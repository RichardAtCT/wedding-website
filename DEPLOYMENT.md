# Deployment Guide

This guide covers deploying the wedding website to various platforms, with special focus on GitHub Pages.

---

## GitHub Pages Deployment

GitHub Pages is a free static hosting service perfect for this website.

### API Key Strategy for GitHub Pages

**Important:** Since GitHub Pages serves files directly from your repository, you have two options for handling API keys:

#### Option A: Public API Keys with Restrictions (Recommended)

The API keys used in this project are **designed to be public** when properly restricted:

1. **Google Maps API Key** - Restrict by HTTP referrer
2. **GA4 Measurement ID** - Public by design
3. **Uber Client ID** - Public by design

**Setup Steps:**

1. **Configure Google Maps API Key:**
   ```
   Go to: https://console.cloud.google.com/google/maps-apis/credentials

   1. Create/select API key
   2. Click "Restrict Key"
   3. Under "Application restrictions":
      - Select "HTTP referrers (websites)"
      - Add your domains:
        * https://yourusername.github.io/*
        * https://your-custom-domain.com/*
   4. Under "API restrictions":
      - Select "Restrict key"
      - Enable only: "Maps JavaScript API"
   5. Save
   ```

2. **Edit the .gitignore:**

   Remove `js/config.js` from `.gitignore` OR create a separate `config.production.js`

3. **Commit your config:**
   ```bash
   # Option 1: Commit config.js directly
   git rm --cached js/config.js
   # Edit .gitignore to remove the config.js line
   git add js/config.js .gitignore
   git commit -m "Add production config with restricted API keys"

   # Option 2: Use separate production config
   cp js/config.js js/config.production.js
   # Edit index.html to use config.production.js
   git add js/config.production.js
   git commit -m "Add production config"
   ```

4. **Deploy to GitHub Pages:**
   ```bash
   git push origin main

   # Enable GitHub Pages
   # Go to: Repository Settings > Pages
   # Source: Deploy from branch 'main'
   # Folder: / (root)
   # Save
   ```

**Why this is safe:**
- Google Maps key is restricted to your domain only
- Even if someone copies your key, it won't work on their domain
- GA4 ID is meant to be public (everyone can see it in browser DevTools anyway)
- Uber Client ID is public OAuth client identifier

#### Option B: GitHub Actions Build with Secrets (Advanced)

For maximum security, use GitHub Actions to inject secrets during build.

**Setup:**

1. **Add secrets to GitHub:**
   ```
   Repository > Settings > Secrets and variables > Actions > New repository secret

   Add:
   - GOOGLE_MAPS_API_KEY
   - GA4_MEASUREMENT_ID
   - UBER_CLIENT_ID
   ```

2. **Create `.github/workflows/deploy.yml`:**
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3

         - name: Setup Node
           uses: actions/setup-node@v3
           with:
             node-version: '18'

         - name: Install dependencies
           run: npm install

         - name: Create config file
           run: |
             cat > js/config.js << EOF
             const CONFIG = {
                 GOOGLE_MAPS_API_KEY: '${{ secrets.GOOGLE_MAPS_API_KEY }}',
                 GA4_MEASUREMENT_ID: '${{ secrets.GA4_MEASUREMENT_ID }}',
                 UBER_CLIENT_ID: '${{ secrets.UBER_CLIENT_ID }}',
                 RSVP: {
                     FORM_ACTION_URL: '${{ secrets.RSVP_FORM_URL }}'
                 }
             };
             if (typeof window !== 'undefined') {
                 window.CONFIG = CONFIG;
             }
             EOF

         - name: Build
           run: npm run build

         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./
             publish_branch: gh-pages
   ```

3. **Update GitHub Pages settings:**
   - Source: Deploy from branch `gh-pages`

---

## Alternative Hosting Options

### Netlify

Netlify supports environment variables natively.

**Deploy:**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# Set environment variables in Netlify UI
# Site settings > Build & deploy > Environment variables

# Build command: npm run build
# Publish directory: .
```

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel

Similar to Netlify with environment variable support.

```bash
npm install -g vercel
vercel

# Add environment variables in Vercel dashboard
```

### Cloudflare Pages

1. Connect GitHub repository
2. Add environment variables in dashboard
3. Build command: `npm run build`
4. Output directory: `/`

---

## Custom Domain Setup

### GitHub Pages with Custom Domain

1. **Add CNAME file:**
   ```bash
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Configure DNS:**

   **For apex domain (example.com):**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

   **For subdomain (www.example.com):**
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

3. **Enable HTTPS:**
   - Go to repository Settings > Pages
   - Check "Enforce HTTPS"
   - Wait for certificate to provision (can take 24 hours)

4. **Update API key restrictions:**
   - Add your custom domain to Google Maps API restrictions
   - Update Content Security Policy if implemented

---

## Pre-Deployment Checklist

### Configuration
- [ ] API keys configured in config.js
- [ ] Google Maps API key restricted to domain(s)
- [ ] GA4 Measurement ID added
- [ ] RSVP form endpoint configured (Google Apps Script URL)
- [ ] Custom domain configured (if using)

### Security
- [ ] HTTPS enabled
- [ ] API keys restricted by domain/referrer
- [ ] Security headers configured (see SECURITY.md)
- [ ] Content Security Policy tested
- [ ] All external resources use HTTPS

### Testing
- [ ] Build completes: `npm run build`
- [ ] No console errors in browser
- [ ] Google Map loads correctly
- [ ] RSVP form submits successfully
- [ ] All images display
- [ ] Animations work
- [ ] Mobile responsive
- [ ] "Add to Calendar" works
- [ ] "Book Uber" link works (if using)
- [ ] All navigation links work

### Performance
- [ ] Images optimized
- [ ] CSS/JS minified
- [ ] No 404 errors
- [ ] Lighthouse score acceptable
- [ ] Page loads in < 3 seconds

### Analytics
- [ ] GA4 tracking verified in Real-Time reports
- [ ] Events fire correctly
- [ ] No tracking errors in console

### Content
- [ ] Update wedding details (dates, location, names)
- [ ] Replace placeholder images
- [ ] Update contact information
- [ ] Customize event descriptions
- [ ] Update social media links
- [ ] Test RSVP invite codes

---

## Rollback Procedure

If issues occur after deployment:

### GitHub Pages
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or roll back to specific commit
git reset --hard <commit-hash>
git push -f origin main
```

### Using GitHub Releases
```bash
# Tag stable versions
git tag -a v2.0.0 -m "Version 2.0.0 - Production ready"
git push origin v2.0.0

# Roll back to tag
git checkout v2.0.0
git checkout -b rollback
git push origin rollback
# Then update GitHub Pages to use 'rollback' branch
```

---

## Monitoring After Deployment

### Check These Regularly

1. **Analytics Dashboard:**
   - Verify traffic is being tracked
   - Monitor RSVP submissions
   - Check for errors

2. **Browser Console:**
   - Visit site and check for JavaScript errors
   - Verify all resources load
   - Test in multiple browsers

3. **Google Search Console:**
   - Submit sitemap
   - Monitor indexing
   - Check for crawl errors

4. **Performance Monitoring:**
   - Run Lighthouse audits monthly
   - Check Core Web Vitals
   - Monitor load times from different locations

---

## Troubleshooting

### Map doesn't load
- Check API key is correct in config.js
- Verify API key restrictions include your domain
- Check browser console for error messages
- Ensure Maps JavaScript API is enabled

### RSVP form doesn't submit
- Verify Google Apps Script URL is correct
- Check CORS settings on Apps Script
- Test invite code hash matches
- Check browser console for errors

### Analytics not tracking
- Verify GA4 Measurement ID format (G-XXXXXXXXXX)
- Check if ad blockers are interfering
- Wait 24-48 hours for data to appear
- Check Real-Time reports for immediate verification

### 404 Errors
- Ensure all file paths are relative
- Check case sensitivity in file names
- Verify all referenced files are committed
- Clear browser cache

### HTTPS Certificate Issues
- Wait 24 hours after enabling custom domain
- Check DNS propagation: https://dnschecker.org
- Verify CNAME file is in repository
- Contact GitHub Support if persists

---

## Production Optimization

### Before Going Live

1. **Minify all assets:**
   ```bash
   npm run build
   ```

2. **Test on multiple devices:**
   - Desktop: Chrome, Firefox, Safari, Edge
   - Mobile: iOS Safari, Chrome Mobile
   - Tablet: iPad, Android tablets

3. **Load test:**
   - Simulate traffic spikes
   - Test RSVP form under load
   - Monitor Google Apps Script execution limits

4. **SEO optimization:**
   - Add meta descriptions
   - Update Open Graph tags with actual content
   - Create sitemap.xml
   - Submit to Google Search Console

---

## Cost Estimates

### Free Tier (Recommended for Wedding Websites)

- **GitHub Pages:** Free (100GB bandwidth/month)
- **Google Maps:** $200/month free credit (28,500 loads)
- **GA4:** Free (unlimited)
- **Google Apps Script:** Free (limited executions)
- **Let's Encrypt SSL:** Free

**Total monthly cost:** $0 for typical wedding website traffic

### If Scaling Needed

- **Netlify Pro:** $19/month (more bandwidth)
- **Google Maps over free tier:** $7 per 1,000 loads
- **CDN (Cloudflare):** Free tier usually sufficient

---

Last Updated: 2025-10-28
Version: 2.0.0
