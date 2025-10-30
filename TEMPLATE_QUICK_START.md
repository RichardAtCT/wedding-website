# Wedding Website Template - Quick Start Guide

Get your wedding website up and running in 15 minutes!

## Prerequisites

- Node.js installed
- Basic text editing skills
- Your wedding photos ready
- (Optional) API keys for Google Maps, Analytics

## 5-Minute Setup

### 1. Fork & Clone

```bash
git clone https://github.com/YOUR-USERNAME/wedding-website.git
cd wedding-website
npm install
```

### 2. Copy Configuration Files

```bash
cd js
cp wedding-data.example.js wedding-data.js
cp config.example.js config.js
cd ..
```

### 3. Edit Your Wedding Data

Open `js/wedding-data.js` and search-and-replace:

**Names:**

- Replace `"Ram"` with your groom's name
- Replace `"Antara"` with your bride's name
- Replace `"Ram & Antara"` with your couple names

**Dates:**

- Replace `"November 27th, 2017"` with your wedding date
- Update all event dates and times
- Update calendar dates (format: `YYYYMMDDTHHMMSS`)

**Venue:**

- Replace `"ITC Fortune Park"` with your venue name
- Update address, city, state, postal code
- Update coordinates (use Google Maps to find lat/lng)

**Your Story:**

- Replace the love story text with your own story
- Update image paths to your photos

**Social Media:**

- Replace `"RamAndAntara"` with your hashtag
- Update Twitter handle

### 4. Add Your Photos

Replace these images in the `/img` folder:

```
img/
├── hero-min.jpg          (Your main banner - 1920x1080px)
├── logo-lg.png           (Your logo/monogram)
├── IMG_2317.jpg          (Story photo 1)
├── DSD_0214.jpg          (Story photo 2)
└── eng_pics/
    ├── photo1-min.jpg    (Thumbnail)
    ├── photo1.jpg        (Full size)
    ├── photo2-min.jpg
    ├── photo2.jpg
    └── ... (6 photos total)
```

### 5. Generate Invite Code

1. Choose your invite code (e.g., "Smith2025")
2. Go to https://www.md5hashgenerator.com/
3. Generate MD5 hash
4. Add to `wedding-data.js`:

```javascript
rsvp: {
  inviteCodeHashes: ['your-generated-hash-here'];
}
```

### 6. Build & Test

```bash
npm run build
```

Open `index.html` in your browser and test:

- [ ] Your names appear correctly
- [ ] All dates are correct
- [ ] Events show properly
- [ ] Your photos load
- [ ] RSVP form accepts your invite code

## API Keys (Optional)

Get API keys for full functionality:

### Google Maps (for venue map)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project → Enable Maps JavaScript API
3. Create API key → Restrict to your domain
4. Add to `js/config.js`: `GOOGLE_MAPS_API_KEY: 'YOUR_KEY'`

### Google Analytics 4 (for tracking)

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create GA4 property
3. Copy Measurement ID (G-XXXXXXXXXX)
4. Add to `js/config.js`: `GA4_MEASUREMENT_ID: 'G-XXXXXXXXXX'`

### Google Apps Script (for RSVP)

See main README for detailed RSVP setup instructions.

## Deploy to GitHub Pages

```bash
git add .
git commit -m "Customize wedding website"
git push

# Then:
# 1. Go to GitHub repository settings
# 2. Pages → Source → Select 'main' branch
# 3. Save
# 4. Your site will be live at https://YOUR-USERNAME.github.io/wedding-website/
```

## Using an LLM Coding Assistant

Don't want to do this manually? Use an AI assistant!

1. Open [LLM-INSTRUCTIONS.md](LLM-INSTRUCTIONS.md)
2. Copy the "Quick Start Prompt" template
3. Fill in your wedding details
4. Paste into Claude, ChatGPT, or your favorite AI assistant
5. Let it update the files for you!

## Customization Checklist

- [ ] Copied configuration templates
- [ ] Updated couple names
- [ ] Updated all dates and times
- [ ] Updated venue information
- [ ] Replaced all photos
- [ ] Updated love story
- [ ] Generated and added invite code hash
- [ ] Updated social media handles
- [ ] Updated Instagram hashtag
- [ ] Built the project (`npm run build`)
- [ ] Tested in browser
- [ ] Updated manifest.json
- [ ] (Optional) Added Google Maps API key
- [ ] (Optional) Added Google Analytics
- [ ] (Optional) Set up RSVP Google Apps Script
- [ ] Deployed to hosting

## File Reference

**Configuration Files:**

- `js/wedding-data.js` - All your wedding information (CUSTOMIZE THIS!)
- `js/config.js` - API keys and service URLs
- `manifest.json` - PWA settings (app name, colors)

**Template Files (reference only):**

- `js/wedding-data.example.js` - Configuration template
- `js/config.example.js` - API key template
- `LLM-INSTRUCTIONS.md` - AI assistant guide

**Pages:**

- `index.html` - Main website HTML
- `README.md` - Full documentation

## Need Help?

**Quick Help:**

- Check [LLM-INSTRUCTIONS.md](LLM-INSTRUCTIONS.md) - Use an AI to help!
- See [README.md](README.md) - Full documentation
- Check `wedding-data.example.js` - See all options

**Common Issues:**

**Map not showing?**
→ Add Google Maps API key to `config.js`

**Photos not loading?**
→ Check file paths in `wedding-data.js` match your image files

**RSVP not working?**
→ Verify invite code hash is correct (regenerate at md5hashgenerator.com)

**Dates showing wrong?**
→ Check calendar date format is `YYYYMMDDTHHMMSS` (e.g., `20250615T140000`)

**Nothing changed after editing?**
→ Run `npm run build` and hard-refresh browser (Ctrl+Shift+R)

## What's Next?

1. **Customize Colors**: Edit `sass/partials/_colors.scss`
2. **Add More Events**: Add entries to `events` array in `wedding-data.js`
3. **Set Up RSVP**: Follow RSVP setup guide in main README
4. **Custom Domain**: Configure custom domain in GitHub Pages settings
5. **Share**: Send your website link to guests!

---

**Time to celebrate!** 🎉

Your wedding website should now be personalized and ready to share with your guests.

For detailed documentation and advanced features, see the main [README.md](README.md).
