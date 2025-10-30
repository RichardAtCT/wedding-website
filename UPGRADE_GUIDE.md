# Upgrade Guide - Version 2.0.0

## Phase 1: Critical Updates (COMPLETED)

This guide documents the changes made during Phase 1 of the modernization effort.

### Summary of Changes

Version 2.0.0 brings the wedding website up to 2025 security and compatibility standards with critical dependency updates, security enhancements, and removal of legacy browser support.

---

## Breaking Changes

### 1. jQuery Updated (1.11.2 → 3.7.1)

**Impact:** Potential compatibility issues with older jQuery plugins

**Changes:**

- jQuery 3.x has deprecated/removed some APIs
- Most notably: `.load()`, `.error()`, `.unload()` methods removed
- The website's current code is compatible, but custom modifications may need updates

**Migration:**

- Replace `.load(handler)` with `.on('load', handler)`
- Replace `.error(handler)` with `.on('error', handler)`
- See full migration guide: https://jquery.com/upgrade-guide/3.0/

### 2. Font Awesome (4.7.0 → 6.7.0)

**Impact:** Icon class names may need updating

**Changes:**

- Old: `font-awesome/css/font-awesome.min.css`
- New: `@fortawesome/fontawesome-free/css/all.min.css`
- Icon class prefix changes:
  - `fa` still works but consider using `fas`, `far`, `fab` for specificity
  - Some icon names changed (e.g., `fa-automobile` → `fa-car`)

**Backward Compatibility:**

- Most `fa-*` classes still work
- The website continues to use `fa` prefix for compatibility

**Future Migration:**
Consider updating icon classes:

```html
<!-- Old -->
<i class="fa fa-heart"></i>

<!-- New (recommended) -->
<i class="fas fa-heart"></i>
```

### 3. API Key Management

**BREAKING:** API keys moved to external config file

**Required Action:**

1. Copy `js/config.example.js` to `js/config.js`
2. Add your API keys to `js/config.js`
3. Never commit `js/config.js` (it's in .gitignore)

**Configuration:**

```javascript
const CONFIG = {
  GOOGLE_MAPS_API_KEY: 'YOUR_KEY_HERE',
  GA4_MEASUREMENT_ID: 'G-XXXXXXXXXX',
  UBER_CLIENT_ID: 'YOUR_CLIENT_ID_HERE',
};
```

### 4. Google Analytics (Universal Analytics → GA4)

**BREAKING:** Old UA tracking code removed

**Required Action:**

1. Create a GA4 property at https://analytics.google.com/
2. Add your GA4 Measurement ID to `js/config.js`
3. Historic UA data will not be accessible in GA4

**Changes:**

- Old: `analytics.js` with `UA-*` tracking ID
- New: `gtag.js` with `G-*` measurement ID
- Event tracking syntax changed (update custom events if any)

### 5. Removed IE 7/8/9 Support

**Impact:** Website will not function on Internet Explorer < 10

**Changes Removed:**

- IE conditional comments
- Modernizr library
- IE-specific polyfills
- Browser upgrade warnings

**Browser Support:**
Now supports last 2 versions of:

- Chrome, Firefox, Safari, Edge
- Mobile: iOS Safari, Chrome Mobile

---

## New Features

### 1. Enhanced Security

- API keys no longer exposed in HTML
- Dynamic loading of external scripts with config
- Prepared for CSP headers (see SECURITY.md)
- Added security best practices documentation

### 2. Updated CDN Fallbacks

- CDN URLs updated to latest versions
- Added `crossorigin` and `referrerpolicy` attributes
- Better error handling for CDN failures

### 3. Modern JavaScript

- Removed dependency on outdated libraries
- ES6+ syntax support ready
- Better error handling

---

## Dependency Updates

### Before (v1.0.1)

```json
{
  "animate.css": "^3.7.2",
  "font-awesome": "^4.7.0",
  "waypoints": "^4.0.1",
  "gulp": "^4.0.2",
  "sass": "^1.25.0"
}
```

### After (v2.0.0)

```json
{
  "animate.css": "^4.1.1",
  "@fortawesome/fontawesome-free": "^6.7.0",
  "jquery": "^3.7.1",
  "waypoints": "^4.0.1",
  "gulp": "^5.0.0",
  "sass": "^1.80.0"
}
```

### Security Status

- **Before:** Multiple known vulnerabilities in jQuery 1.11.2
- **After:** 0 known vulnerabilities (verified with `npm audit`)

---

## Migration Steps

### For New Deployments

1. **Clone and Install:**

   ```bash
   git clone <your-repo>
   cd wedding-website
   npm install
   ```

2. **Configure API Keys:**

   ```bash
   cp js/config.example.js js/config.js
   # Edit js/config.js with your keys
   ```

3. **Build Assets:**

   ```bash
   npm run build
   ```

4. **Deploy:**
   - Copy all files to your web server or GitHub Pages
   - Configure security headers (see SECURITY.md)

### For Existing Installations

1. **Backup Current Site:**

   ```bash
   cp -r wedding-website wedding-website-backup
   ```

2. **Pull Updates:**

   ```bash
   git pull origin main
   npm install
   ```

3. **Migrate API Keys:**

   ```bash
   # Extract keys from old index.html
   # Add them to js/config.js
   cp js/config.example.js js/config.js
   # Edit config.js
   ```

4. **Update GA4:**
   - Create GA4 property
   - Add measurement ID to config.js

5. **Rebuild:**

   ```bash
   npm run build
   ```

6. **Test Locally:**
   - Open index.html in browser
   - Verify maps load
   - Check RSVP form
   - Test all navigation

7. **Deploy:**
   - Upload updated files
   - Monitor for issues

---

## Known Issues & Limitations

### 1. Sass Deprecation Warnings

**Issue:** Gulp build shows deprecation warnings about @import rules

**Impact:** None currently, but will break in Dart Sass 3.0.0

**Planned Fix:** Phase 4 - Migrate to @use/@forward syntax

### 2. jQuery Plugin Compatibility

**Issue:** Some third-party jQuery plugins may not work with jQuery 3.x

**Mitigation:**

- Current plugins (fancybox, flexslider, waypoints) are compatible
- Test thoroughly if adding new plugins

### 3. Font Awesome Icon Changes

**Issue:** Some icon names changed between versions

**Mitigation:**

- Current icons tested and working
- Check Font Awesome docs when adding new icons

---

## Testing Checklist

After upgrading, verify:

- [ ] Homepage loads without errors
- [ ] Navigation menu works
- [ ] Google Map displays correctly
- [ ] All images load
- [ ] Animations work (scroll-triggered)
- [ ] RSVP form submits successfully
- [ ] "Add to Calendar" works
- [ ] "Book Uber" button works (if configured)
- [ ] All icons display correctly
- [ ] Mobile responsive layout
- [ ] No console errors
- [ ] Google Analytics tracking (check Real-Time in GA4)

---

## Rollback Procedure

If issues occur after upgrade:

1. **Immediate Rollback:**

   ```bash
   git checkout v1.0.1
   npm install
   npm run build
   ```

2. **Restore Backup:**

   ```bash
   cp -r wedding-website-backup/* wedding-website/
   ```

3. **Report Issues:**
   - Document the problem
   - Check browser console for errors
   - Create GitHub issue with details

---

## Next Steps

### Phase 2: Performance Optimization (Planned)

- Image optimization (WebP/AVIF)
- Lazy loading
- Asset optimization
- Update Bootstrap to 5.3

### Phase 3: Modern Features (Planned)

- PWA functionality
- Dark mode support
- Accessibility improvements (WCAG 2.1 AA)
- SEO enhancements

### Phase 4: Architecture Improvements (Planned)

- Modern build system (Vite)
- TypeScript support
- Testing framework
- CI/CD pipeline

See `MODERNIZATION_PLAN.md` for full roadmap.

---

## Support & Questions

- **Documentation:** See README.md and SECURITY.md
- **Issues:** Create a GitHub issue
- **Security:** See SECURITY.md for reporting vulnerabilities

---

## Changelog

### Version 2.0.0 (2025-10-28) - Phase 1 Complete

**Added:**

- API key configuration system (config.js)
- Security documentation (SECURITY.md)
- Modernization plan (MODERNIZATION_PLAN.md)
- This upgrade guide

**Updated:**

- jQuery 1.11.2 → 3.7.1
- Font Awesome 4.7.0 → 6.7.0
- animate.css 3.7.2 → 4.1.1
- Gulp 4.0.2 → 5.0.0
- Sass 1.25.0 → 1.80.0
- Google Analytics → GA4
- CDN fallback URLs
- package.json version to 2.0.0

**Removed:**

- IE 7/8/9 conditional comments
- Modernizr library
- Browser upgrade warnings
- Hardcoded API keys from HTML
- Old Universal Analytics code

**Security:**

- Fixed all known npm vulnerabilities
- Implemented API key management
- Added security headers documentation
- Prepared for CSP implementation

---

Last Updated: 2025-10-28
Phase: 1 of 5 Complete
