# Wedding Website Template

**A beautiful, modern, and fully customizable wedding website template that you can personalize in minutes.**

This is a complete rewrite and template-focused fork of the original [wedding-website by rampatra](https://github.com/rampatra/wedding-website). All personal content has been centralized into easy-to-edit configuration files, making it simple for anyone to create their own beautiful wedding website.

[![Deploy to GitHub Pages](https://img.shields.io/badge/deploy-github%20pages-blue)](https://pages.github.com/)
[![Modern Stack](https://img.shields.io/badge/bootstrap-5.3.3-purple)](https://getbootstrap.com/)
[![Zero Vulnerabilities](https://img.shields.io/badge/vulnerabilities-0-brightgreen)](https://www.npmjs.com/)

## 🎉 Why This Template?

- **⚡ 15-Minute Setup** - Get your wedding website running in under 15 minutes
- **🎨 Fully Customizable** - Edit one configuration file to personalize everything
- **🤖 AI-Friendly** - Includes comprehensive LLM instructions for AI-assisted customization
- **📱 Responsive Design** - Looks stunning on all devices
- **🆓 Completely Free** - Host on GitHub Pages at no cost
- **🔧 Modern Tech Stack** - Built with Bootstrap 5.3.3, ES6+, and modern browser APIs
- **♿ Accessible** - WCAG AA compliant with proper ARIA labels
- **🚀 PWA Ready** - Progressive Web App support for offline access

## 🌟 Features

### Guest Experience
- ✅ **Beautiful Hero Section** with your photo and logo
- ✅ **Multiple Events Support** - Ceremony, reception, rehearsal dinner, etc.
- ✅ **Interactive Map** with venue location and Uber integration
- ✅ **RSVP Form** with invite code validation (saves to Google Sheets)
- ✅ **Add to Calendar** for Apple, Google, Outlook, and Yahoo calendars
- ✅ **Photo Gallery** with lightbox for engagement photos
- ✅ **Your Love Story** section
- ✅ **Instagram Integration** with custom hashtag
- ✅ **YouTube Video** to showcase your venue or memories
- ✅ **Dress Code Information** with modal for each event

### Developer Experience
- ✅ **Single Configuration File** - All content in `wedding-data.js`
- ✅ **Template Files** - Example configs to get started quickly
- ✅ **LLM Instructions** - Use AI assistants to help customize
- ✅ **Automatic Updates** - Metadata, structured data, and content populated automatically
- ✅ **Type Safety** - Well-documented configuration structure
- ✅ **Build Tools** - Gulp-based build system with Sass compilation
- ✅ **No Database Required** - Static site with Google Sheets integration for RSVPs

## 🚀 Quick Start

### Option 1: 15-Minute Setup (Recommended)

**Perfect for non-technical users or those who want to get started quickly.**

1. **Fork this repository** to your GitHub account

2. **Clone and install:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/wedding-website.git
   cd wedding-website
   npm install
   ```

3. **Copy template files:**
   ```bash
   cd js
   cp wedding-data.example.js wedding-data.js
   cp config.example.js config.js
   cd ..
   ```

4. **Edit your wedding details:**
   Open `js/wedding-data.js` and update:
   - Couple names
   - Wedding dates and events
   - Venue information
   - Your love story
   - Social media handles
   - Image paths

5. **Replace photos** in `/img` folder with your own

6. **Build and preview:**
   ```bash
   npm run build
   ```
   Open `index.html` in your browser

7. **Deploy to GitHub Pages** (see [Deployment](#-deployment))

👉 **Detailed walkthrough:** See [TEMPLATE_QUICK_START.md](TEMPLATE_QUICK_START.md)

### Option 2: AI-Assisted Setup (Easiest)

**Use an LLM coding assistant like Claude or ChatGPT to help you!**

1. Fork and clone this repository
2. Open [LLM-INSTRUCTIONS.md](LLM-INSTRUCTIONS.md)
3. Copy the prompt template and fill in your wedding details
4. Paste into your AI assistant (Claude, ChatGPT, etc.)
5. Let the AI update all your configuration files!

👉 **See:** [LLM-INSTRUCTIONS.md](LLM-INSTRUCTIONS.md) for complete AI-assisted setup guide

## 📝 Configuration Overview

All your wedding information lives in **one file**: `js/wedding-data.js`

```javascript
const WEDDING_DATA = {
    couple: {
        bride: { name: "Jane", fullName: "Jane Smith" },
        groom: { name: "John", fullName: "John Doe" },
        coupleNames: "John & Jane",
        story: { /* your love story */ }
    },
    events: [ /* your wedding events */ ],
    venue: { /* venue details and coordinates */ },
    rsvp: { /* RSVP configuration */ },
    images: { /* paths to your photos */ },
    social: { /* Instagram, Twitter handles */ },
    meta: { /* SEO and page metadata */ },
    theme: { /* color customization */ }
};
```

**What gets automatically updated:**
- Page title and metadata
- Open Graph tags for social sharing
- Schema.org structured data
- All event details and timings
- Venue map and location
- RSVP form validation
- "Add to Calendar" buttons
- Instagram hashtag section
- Engagement photo gallery
- Footer text

See `js/wedding-data.example.js` for complete configuration reference.

## 🎨 Customization

### Basic Customization (No Coding Required)

Everything can be customized by editing `js/wedding-data.js`:

- **Couple Information** - Names, photos, love story
- **Events** - Add, remove, or modify events
- **Venue** - Location, address, coordinates
- **RSVP** - Deadline, invite codes (MD5 hashed)
- **Images** - Hero image, logo, couple photos, gallery
- **Social Media** - Instagram hashtag, Twitter handle
- **Theme** - Primary color scheme
- **Features** - Enable/disable video, dress code, Instagram, etc.

### Advanced Customization

**Change color scheme:**
Edit `sass/partials/_colors.scss` and rebuild:
```bash
npm run build
```

**Modify HTML structure:**
Edit `index.html` and `js/populate-content.js`

**Add custom sections:**
Create new HTML sections and update the population script

## 🔧 Technology Stack

**Frontend:**
- Bootstrap 5.3.3 - Modern responsive framework
- ES6+ JavaScript - Modern native APIs
- Animate.css 4.1.1 - CSS animations
- Font Awesome 6.7.0 - Icons
- jQuery 3.7.1 - Minimal usage for plugins only

**Build Tools:**
- Gulp 5.0.0 - Task automation
- Sass 1.80.0 - CSS preprocessing
- Terser - JavaScript minification

**APIs & Integrations:**
- Google Maps JavaScript API - Venue location
- Google Analytics 4 - Web analytics (optional)
- Google Sheets - RSVP data storage
- YouTube API - Video embedding (optional)
- Uber API - Transportation booking (optional)

**Performance & Modern Features:**
- IntersectionObserver API - Lazy loading and animations
- Service Worker - PWA support and offline access
- Resource hints - Preconnect, DNS prefetch
- Responsive images - Lazy loading with native attributes
- Structured data - Schema.org for SEO

## 🗺️ API Keys & Services

### Required for Full Functionality

**Google Maps API** (for venue map):
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create project → Enable "Maps JavaScript API"
3. Create API key and restrict to your domain
4. Add to `js/config.js`

**Google Sheets** (for RSVP):
1. Create a Google Sheet for RSVP responses
2. Set up Google Apps Script (see detailed guide below)
3. Add script URL to `js/config.js`

### Optional Services

- **Google Analytics 4** - Track website visits
- **Uber API** - Enable "Book Uber" button
- **YouTube** - Embed venue or memory videos

See [detailed API setup guide](#setting-up-google-sheets-for-rsvp) below.

## 🚀 Deployment

### Deploy to GitHub Pages (Free)

1. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Save

2. **Your site will be live at:**
   ```
   https://YOUR-USERNAME.github.io/wedding-website/
   ```

3. **Custom Domain (Optional):**
   - Add `CNAME` file with your domain
   - Configure DNS settings (see [GitHub Pages docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))

### Alternative Hosting

This is a static website that can be hosted anywhere:
- **Netlify** - Drag and drop deployment
- **Vercel** - Git-based deployment
- **AWS S3** - Host as static website
- **Any web server** - Upload files via FTP

## 📋 Setting Up Google Sheets for RSVP

<details>
<summary><b>Click to expand detailed setup instructions</b></summary>

### Step 1: Create a Google Sheet

1. Create a new Google Sheet
2. Add columns: `timestamp`, `name`, `email`, `guests`, `message`

### Step 2: Create Google Apps Script

1. In your sheet: Extensions → Apps Script
2. Delete default code and paste:

```javascript
function doPost(e) {
    try {
        var sheet = SpreadsheetApp.getActiveSheet();
        var data = [
            new Date(),
            e.parameter.name,
            e.parameter.email,
            e.parameter.guests,
            e.parameter.message || ''
        ];

        sheet.appendRow(data);

        return ContentService
            .createTextOutput(JSON.stringify({result: "success"}))
            .setMimeType(ContentService.MimeType.JSON);
    } catch(error) {
        return ContentService
            .createTextOutput(JSON.stringify({
                result: "error",
                message: error.message
            }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}
```

### Step 3: Deploy

1. Click "Deploy" → "New deployment"
2. Type: Web app
3. Execute as: Me
4. Who has access: Anyone
5. Click "Deploy"
6. Copy the Web App URL

### Step 4: Configure

Add the URL to `js/wedding-data.js`:
```javascript
rsvp: {
    formActionUrl: "YOUR_APPS_SCRIPT_URL_HERE"
}
```

### Step 5: Email Notifications (Optional)

To receive email when someone RSVPs, add to your script:
```javascript
MailApp.sendEmail({
    to: "your-email@example.com",
    subject: "New RSVP: " + e.parameter.name,
    body: "Name: " + e.parameter.name + "\nGuests: " + e.parameter.guests
});
```

</details>

## 🔐 Security Best Practices

**Important for public repositories:**

1. **Protect Personal Data:**
   - Add `js/wedding-data.js` to `.gitignore` if it contains private info
   - Keep `js/wedding-data.example.js` as public template

2. **API Key Security:**
   - Always restrict API keys to your domain
   - Never commit unrestricted API keys
   - Use environment variables for production

3. **Invite Code Security:**
   - Invite codes are MD5 hashed (not plain text)
   - Generate hashes at [md5hashgenerator.com](https://www.md5hashgenerator.com/)

## 📚 Documentation

- **[TEMPLATE_QUICK_START.md](TEMPLATE_QUICK_START.md)** - 15-minute setup guide
- **[LLM-INSTRUCTIONS.md](LLM-INSTRUCTIONS.md)** - AI-assisted customization guide
- **`js/wedding-data.example.js`** - Complete configuration reference
- **[SECURITY.md](SECURITY.md)** - Security best practices
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Detailed deployment guides

## 🤝 Credits & Attribution

This template is a complete rewrite and fork of the original [wedding-website](https://github.com/rampatra/wedding-website) created by **[Ram Patra](https://github.com/rampatra)**.

**Original Project:**
- Original Creator: [Ram Patra](https://rampatra.com)
- Original Repository: [github.com/rampatra/wedding-website](https://github.com/rampatra/wedding-website)
- Original Demo: [wedding.rampatra.com](http://wedding.rampatra.com/)
- Original Blog Post: [Ram's Blog](https://blog.rampatra.com/wedding-website)

**What's Different in This Fork:**

This template-focused rewrite includes:
- ✨ Centralized configuration system (`wedding-data.js`)
- ✨ Dynamic content population from config
- ✨ LLM-friendly documentation for AI-assisted setup
- ✨ Template example files for easy forking
- ✨ Enhanced documentation focused on reusability
- ✨ Automated metadata and structured data generation
- ✨ Improved separation of content and code

**Acknowledgments:**
- Original design and concept by Ram Patra
- Template architecture and configuration system by this fork
- All contributors to the original project
- The open-source community

If you use this template, consider:
- Supporting Ram's original project: ⭐ Star [rampatra/wedding-website](https://github.com/rampatra/wedding-website)
- Checking out Ram's [apps](https://rampatra.com/)
- Sharing this template with others planning their wedding!

## 🌐 Browser Support

**Modern browsers only:**
- ✅ Chrome/Edge (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Mobile Safari (iOS)
- ✅ Chrome (Android)
- ❌ Internet Explorer (not supported)

All features have 94%+ global browser support.

## 💡 Common Questions

<details>
<summary><b>Do I need to know how to code?</b></summary>

No! You only need to edit the `wedding-data.js` configuration file with your information. You can also use an AI assistant (see [LLM-INSTRUCTIONS.md](LLM-INSTRUCTIONS.md)) to help you.
</details>

<details>
<summary><b>How much does it cost?</b></summary>

Completely free! Host on GitHub Pages at no cost. Optional services like custom domains or paid APIs are your choice.
</details>

<details>
<summary><b>Can I use my own domain?</b></summary>

Yes! GitHub Pages supports custom domains. See [GitHub's documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
</details>

<details>
<summary><b>What if I want to change the design?</b></summary>

You can customize colors via `sass/partials/_colors.scss`, or modify HTML/CSS for deeper changes. The template is fully open-source.
</details>

<details>
<summary><b>How do guests RSVP?</b></summary>

Guests enter their details and an invite code you provide. Responses are saved to your Google Sheet. See [RSVP Setup](#setting-up-google-sheets-for-rsvp).
</details>

<details>
<summary><b>Can I add more sections?</b></summary>

Yes! Edit `index.html` and add new content sections. Update `js/populate-content.js` if you want them to be configuration-driven.
</details>

## 🐛 Troubleshooting

**Map not showing?**
- Add Google Maps API key to `js/config.js`
- Ensure key is enabled for Maps JavaScript API
- Check browser console for errors

**Photos not loading?**
- Verify file paths in `wedding-data.js` match your image files
- Check that images exist in `/img` folder
- Ensure filenames match exactly (case-sensitive)

**RSVP not working?**
- Verify invite code MD5 hash is correct
- Check Google Apps Script is deployed and URL is in config
- Test the Apps Script URL directly in browser

**Changes not appearing?**
- Run `npm run build` after editing SCSS/JS files
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache

**Need more help?**
- Check [TEMPLATE_QUICK_START.md](TEMPLATE_QUICK_START.md)
- Review [LLM-INSTRUCTIONS.md](LLM-INSTRUCTIONS.md)
- Open an issue on GitHub

## 🤖 Contributing

Contributions are welcome! If you have improvements or fixes:

1. Fork this repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

**Ideas for contributions:**
- Additional configuration options
- New design themes
- Improved documentation
- Bug fixes
- Performance improvements
- Accessibility enhancements

## 📄 License

This project maintains the same open-source spirit as the original.

The original project by Ram Patra is open-source and available for anyone to use. This fork builds upon that work with additional features focused on making it easier to use as a template.

## ⭐ Show Your Support

If you found this template helpful:
- ⭐ Star this repository
- ⭐ Star the [original repository](https://github.com/rampatra/wedding-website)
- 🔗 Share with friends getting married
- 🐛 Report issues or suggest improvements
- 🤝 Contribute improvements

## 📬 Questions or Feedback?

- 💬 Open an issue on GitHub
- 📖 Check the documentation files in this repository
- 🤖 Use [LLM-INSTRUCTIONS.md](LLM-INSTRUCTIONS.md) to get AI-assisted help

---

**Made with ❤️ for couples celebrating their special day**

*Based on the original work by [Ram Patra](https://github.com/rampatra) • Template features and documentation by this fork*
