# Wedding Website
A beautiful, feature rich, device friendly wedding website.
_See [wedding.rampatra.com](http://wedding.rampatra.com/) for a demo. Use invite code `271117` to RSVP._

## ⚡ Modern Stack (2025 Update)

This website has been modernized to 2025 standards with:
- **Bootstrap 5.3.3** - Latest Bootstrap with modern grid system
- **ES6+ JavaScript** - Modern JavaScript with native browser APIs
- **Performance Optimized** - Lazy loading, resource hints, and deferred scripts
- **Zero Vulnerabilities** - All dependencies updated and secured
- **Native APIs** - IntersectionObserver replaces jQuery plugins
- **Google Analytics 4** - Latest analytics platform

[View full modernization plan](MODERNIZATION_PLAN.md) | **Status:** Phase 1 ✅ Phase 2 ✅

# Highlights
1. Slick and fully __responsive__ design.
2. __RSVP feature__ which directly uploads data to a Google sheet.
3. __Receive email alerts__ when someone RSVPs.
4. __Add to Calendar__ feature which supports four different calendars.
5. __Book Uber__ button lets guests book a cab to the venue with just a single tap.
6. A nice __Youtube video__ showing your venue.
7. __Google Map__ showing your venue's location.
8. Start and run the website __completely free__. No hosting, backend server, or database required as you can use
   [GitHub Pages](https://pages.github.com/) to host and Google sheets (with the help of Google scripts) to store RSVP
   data.

# Technology Stack

**Frontend:**
- Bootstrap 5.3.3 (responsive grid, modals, utilities)
- jQuery 3.7.1 (minimal usage, transitioning to vanilla JS)
- Animate.css 4.1.1 (CSS animations)
- Font Awesome 6.7.0 (icons)

**Build Tools:**
- Gulp 5.0.0 (task runner)
- Sass 1.80.0 (CSS preprocessing)
- Terser (ES6+ JavaScript minification)

**APIs & Services:**
- Google Maps API (venue location)
- Google Analytics 4 (web analytics)
- YouTube API (video embedding)
- Google Sheets (RSVP data storage)

**Performance:**
- Native IntersectionObserver (lazy loading)
- Resource hints (preconnect, dns-prefetch)
- Deferred script loading
- Image lazy loading

# Getting Started

## Quick Start (Local Development)
1. `$ git clone https://github.com/rampatra/wedding-website.git` - clone this project to your computer
2. `$ cd wedding-website` - go inside the project directory
3. `$ npm install` - install dependencies (195 packages, 0 vulnerabilities)
4. `$ npm run build` - compile Sass to CSS, minify ES6+ JavaScript
5. That's it, open `index.html` in your browser by double-clicking it.

**Build Commands:**
- `npm run build` - Build CSS and JS for production
- `npm run watch` - Watch Sass files for changes during development

## API Key Configuration

The website uses API keys for Google Maps, Google Analytics, and Uber integration. These are configured in `js/config.js`.

**For your own deployment:**

1. **Get a Google Maps API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/google/maps-apis/credentials)
   - Create an API key
   - **IMPORTANT:** Restrict the key to your domain(s) under "HTTP referrers"
   - Enable only "Maps JavaScript API"

2. **Get a Google Analytics 4 Measurement ID:**
   - Create a GA4 property at [Google Analytics](https://analytics.google.com/)
   - Copy your Measurement ID (format: G-XXXXXXXXXX)

3. **Update `js/config.js`:**
   ```javascript
   const CONFIG = {
       GOOGLE_MAPS_API_KEY: 'YOUR_RESTRICTED_API_KEY',
       GA4_MEASUREMENT_ID: 'G-XXXXXXXXXX',
       UBER_CLIENT_ID: 'YOUR_UBER_CLIENT_ID', // optional
       RSVP: {
           FORM_ACTION_URL: 'YOUR_GOOGLE_APPS_SCRIPT_URL'
       }
   };
   ```

4. **Deploy to GitHub Pages:**
   - Push your changes to your repository
   - Enable GitHub Pages in repository settings
   - See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions

**Note:** The API keys in this repository are examples. While they are safe to commit when properly restricted (see [SECURITY.md](SECURITY.md)), you should replace them with your own keys for production use.

# Using as a Template

This website is designed to be easily customizable for your own wedding! All personal information has been centralized into configuration files for easy modification.

## 🚀 Quick Customization Guide

### Step 1: Copy the Configuration Template

```bash
cd js
cp wedding-data.example.js wedding-data.js
cp config.example.js config.js
```

### Step 2: Edit Your Wedding Information

Open `js/wedding-data.js` and update with your details:

- **Couple Information**: Names, your love story, photos
- **Wedding Events**: Dates, times, descriptions for all your events
- **Venue Details**: Name, address, coordinates, contact info
- **RSVP Configuration**: Deadline, invite codes, form URL
- **Images**: Paths to your photos (hero, couple, engagement gallery)
- **Social Media**: Instagram hashtag, Twitter handle
- **Theme Colors**: Primary color scheme
- **Metadata**: Page title, descriptions for SEO

### Step 3: Configure API Keys

Open `js/config.js` and add your API keys:

```javascript
const CONFIG = {
    GOOGLE_MAPS_API_KEY: 'YOUR_API_KEY_HERE',
    GA4_MEASUREMENT_ID: 'G-XXXXXXXXXX',
    UBER_CLIENT_ID: 'YOUR_UBER_CLIENT_ID', // optional
    RSVP: {
        FORM_ACTION_URL: 'YOUR_GOOGLE_APPS_SCRIPT_URL'
    }
};
```

### Step 4: Replace Images

Place your images in the `/img` folder:

**Required Images:**
- `hero-min.jpg` - Main banner image (1920x1080px recommended)
- `logo-lg.png` - Your wedding logo/monogram
- `img/IMG_2317.jpg` - First photo for "How we met" section
- `img/DSD_0214.jpg` - Second photo for "How we met" section

**Engagement Gallery** (`/img/eng_pics/` folder):
- Add 6 photos with both thumbnail and full-size versions
- Thumbnail naming: `photo1-min.jpg`
- Full-size naming: `photo1.jpg`
- Update the file paths in `wedding-data.js`

**Optional:**
- `iphone_instagram.jpg` - For Instagram hashtag section

### Step 5: Update manifest.json

Edit `manifest.json` to update the PWA details:
- `name`: Your wedding name
- `short_name`: Short version
- `description`: Your wedding description
- `theme_color`: Match your theme color from wedding-data.js

### Step 6: Generate Invite Code Hashes

For security, invite codes are stored as MD5 hashes:

1. Choose your invite code (e.g., "wedding2025")
2. Generate MD5 hash at [md5hashgenerator.com](https://www.md5hashgenerator.com/)
3. Add the hash to `wedding-data.js` under `rsvp.inviteCodeHashes`

Example:
```javascript
rsvp: {
    inviteCodeHashes: [
        "a1b2c3d4e5f6..." // MD5 hash of your invite code
    ]
}
```

### Step 7: Build and Test

```bash
npm run build
```

Open `index.html` in your browser and verify:
- ✅ All names and dates are correct
- ✅ All events display properly
- ✅ Venue map shows correct location
- ✅ RSVP form works with your invite code
- ✅ All images load correctly
- ✅ Social media links work
- ✅ "Add to Calendar" buttons work

## 🤖 Using an LLM Coding Assistant

Want help from an AI assistant? See **[LLM-INSTRUCTIONS.md](LLM-INSTRUCTIONS.md)** for a comprehensive prompt you can use with Claude, ChatGPT, or other coding assistants to help you customize the website!

Simply copy the prompt template, fill in your wedding details, and let the AI assistant help you update all the configuration files.

## 📝 What Gets Automatically Updated

The configuration system automatically populates:

✅ Page metadata (title, description, Open Graph tags)
✅ Structured data for search engines (Schema.org)
✅ Invitation text and dates
✅ "How we met" story section
✅ All event details and timings
✅ Venue information and map location
✅ Instagram hashtag section
✅ Engagement photo gallery
✅ RSVP form validation
✅ "Add to Calendar" functionality
✅ Footer text

## 🔒 Security Best Practices

**IMPORTANT:** If you're forking this repository and making it public:

1. **Never commit sensitive data** to your public repository:
   - Add `js/config.js` to `.gitignore`
   - Add `js/wedding-data.js` to `.gitignore` if it contains private information

2. **Keep template files committed**:
   - `js/config.example.js` ✅ Safe to commit
   - `js/wedding-data.example.js` ✅ Safe to commit

3. **Use environment variables** for production deployment

4. **Restrict API keys** to your specific domain in Google Cloud Console

See [SECURITY.md](SECURITY.md) for detailed security guidelines.

## 🎨 Advanced Customization

### Changing Colors

Edit `sass/partials/_colors.scss` to change the color scheme:

```scss
$accent-color: #your-color-here;
$accent-color-hover: #your-hover-color;
```

Then rebuild:
```bash
npm run build
```

### Adding More Events

Add more events to the `events` array in `wedding-data.js`:

```javascript
events: [
    {
        name: "Rehearsal Dinner",
        date: "June 14th, 2025",
        time: "6PM - 9PM",
        description: "Join us for a casual dinner the night before.",
        calendarDate: {
            start: "20250614T180000",
            end: "20250614T210000"
        }
    },
    // ... more events
]
```

### Disabling Features

Set these to `false` in `wedding-data.js`:

- `video.enabled: false` - Hide video section
- `dressCode.enabled: false` - Remove dress code modal
- `rsvp.enabled: false` - Disable RSVP form
- `social.instagram.enabled: false` - Hide Instagram section

### Modifying HTML Structure

If you need to customize the HTML layout beyond what's configurable:

1. Edit `index.html` for structural changes
2. Edit `sass/styles.scss` for styling changes
3. Edit `js/populate-content.js` if you need to modify how content is populated
4. Run `npm run build` to compile your changes

## 📚 Additional Resources

- **Configuration Reference**: See `js/wedding-data.example.js` for all available options
- **LLM Assistance**: See `LLM-INSTRUCTIONS.md` for AI-assisted customization
- **RSVP Setup**: See original README sections below for Google Apps Script setup
- **Deployment**: See `DEPLOYMENT.md` for hosting instructions

## ❓ Need Help?

1. Check `LLM-INSTRUCTIONS.md` and use an AI coding assistant
2. Review `wedding-data.example.js` for configuration options
3. See the [blog post](https://blog.rampatra.com/wedding-website) for detailed feature explanations
4. Open an issue on GitHub
5. Reach out on [Twitter](https://twitter.com/rampatra_)

## Browser Support

Modern browsers only (last 2 versions):
- ✅ Chrome, Edge, Firefox, Safari
- ✅ Mobile Safari (iOS), Chrome (Android)
- ❌ Internet Explorer (no longer supported)

All modern browser features used have 94%+ global support.

# Documentation

Comprehensive documentation is available:

- **[MODERNIZATION_PLAN.md](MODERNIZATION_PLAN.md)** - Complete modernization roadmap and progress
- **[UPGRADE_GUIDE.md](UPGRADE_GUIDE.md)** - Detailed changelog and migration guide
- **[SECURITY.md](SECURITY.md)** - Security best practices and API key configuration
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - GitHub Pages and alternative hosting guides

I have also written a
[blog post describing all the features of this wedding website](https://blog.rampatra.com/wedding-website) and how to
customize each of them according to your needs.

# About Me
Hello, my name is Ram. I am a Director of Software Engineering at [Mastercard](https://www.mastercard.com/). I enjoy making teeny tiny applications in
my leisure time and this is one of them. Now that my wedding is over, I am open-sourcing the project. Hope you like it!

# Sponsors
Proudly sponsored by these awesome apps. Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://x.com/rampatra_)]

<table>
    <tr>
        <td>
            <a href="https://presentifyapp.com/" target="_blank"><img src="https://raw.githubusercontent.com/rampatra/assets/refs/heads/main/Presentify/Icons/icon_512.png" width="150" height="150"></a>
        </td>
        <td>
            <a href="https://facescreenapp.com/" target="_blank"><img src="https://github.com/user-attachments/assets/b251b413-ccc4-48f1-a316-c2c2a71f959e" width="150" height="150"></a>
        </td>
        <td>
            <a href="https://keyscreenapp.com" target="_blank"><img src="https://github.com/user-attachments/assets/4b75a739-b4b5-432c-a03c-a9bdd8309934" width="150" height="150"></a>
        </td>
        <td>
            <a href="https://todobarapp.com/" target="_blank"><img src="https://todobarapp.com/assets/img/todobar/app-icon-512.png" width="150" height="150"></a>
        </td>
        <td>
            <a href="https://simplefillapp.com/" target="_blank"><img src="https://github.com/user-attachments/assets/6c575d9c-b65b-4ce7-a468-30f74cfedf18" width="150" height="150"></a>
        </td>
    </tr>
</table>

# Contribute
First, a big thank you 🙏🏻 for the overwhelming response on [Hacker News](https://news.ycombinator.com/item?id=18556787) and [Reddit](https://www.reddit.com/r/opensource/comments/a1bx4h/i_am_open_sourcing_my_wedding_website_on_my_first/). If you'd like to contribute to the project, feel free to create a [PR](https://help.github.com/articles/about-pull-requests/). To support my work, you can buy one of the apps listed under the "Sponsors" section or click the button below.

<a href="https://www.buymeacoffee.com/rampatra" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

_P.S. For any queries or concerns, you can reach out to me on [Twitter](https://twitter.com/rampatra_). I'll try my best to help._
