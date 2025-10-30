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
- **Vite Build System** - Modern development experience with HMR
- **Code Quality Tools** - ESLint, Prettier, Husky, and GitHub Actions CI/CD

[View full modernization plan](MODERNIZATION_PLAN.md) | **Status:** Phase 1 ✅ Phase 2 ✅ Phase 3 ✅ Phase 4 ✅

# Highlights

1. Slick and fully **responsive** design.
2. **RSVP feature** which directly uploads data to a Google sheet.
3. **Receive email alerts** when someone RSVPs.
4. **Add to Calendar** feature which supports four different calendars.
5. **Book Uber** button lets guests book a cab to the venue with just a single tap.
6. A nice **Youtube video** showing your venue.
7. **Google Map** showing your venue's location.
8. Start and run the website **completely free**. No hosting, backend server, or database required as you can use
   [GitHub Pages](https://pages.github.com/) to host and Google sheets (with the help of Google scripts) to store RSVP
   data.

# Technology Stack

**Frontend:**

- Bootstrap 5.3.3 (responsive grid, modals, utilities)
- jQuery 3.7.1 (minimal usage, transitioning to vanilla JS)
- Animate.css 4.1.1 (CSS animations)
- Font Awesome 6.7.0 (icons)

**Build Tools:**

- Vite 7.x (modern dev server with HMR)
- Sass 1.80.0 (CSS preprocessing)
- Terser (ES6+ JavaScript minification)
- Gulp 5.0.0 (legacy support)

**Code Quality:**

- ESLint 9.x (JavaScript linting)
- Prettier 3.x (code formatting)
- Husky (git hooks)
- lint-staged (pre-commit checks)
- GitHub Actions (CI/CD pipeline)

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
3. `$ npm install` - install dependencies (0 vulnerabilities)
4. `$ npm run dev` - start the development server with hot reload
5. Open your browser to `http://localhost:3000` - the site will auto-reload on changes!

## Build Commands

**Development:**

- **`npm run dev`** - Start Vite development server with hot module replacement (recommended)
- **`npm run watch`** - Watch Sass files for changes during development (alternative)

**Production:**

- **`npm run build`** - Build production-ready assets (SASS, JS, and optimized bundle)
- **`npm run build:sass`** - Compile SASS to minified CSS
- **`npm run build:js`** - Minify JavaScript
- **`npm run preview`** - Preview production build locally

**Code Quality:**

- **`npm run lint`** - Run ESLint and auto-fix issues
- **`npm run format`** - Format code with Prettier
- **`npm run format:check`** - Check code formatting

**Legacy:**

- **`npm run gulp`** - Run legacy Gulp build (deprecated)

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
       FORM_ACTION_URL: 'YOUR_GOOGLE_APPS_SCRIPT_URL',
     },
   };
   ```

4. **Deploy to GitHub Pages:**
   - Push your changes to your repository
   - Enable GitHub Pages in repository settings
   - See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions

**Note:** The API keys in this repository are examples. While they are safe to commit when properly restricted (see [SECURITY.md](SECURITY.md)), you should replace them with your own keys for production use.

## Code Quality & Development Tools

This project includes modern development tools for maintaining code quality:

- **ESLint** - Lints JavaScript code and enforces best practices
- **Prettier** - Automatically formats code for consistency
- **Husky** - Git hooks that run linting before commits
- **GitHub Actions** - Automated CI/CD pipeline for testing and deployment

All code is automatically checked and formatted before commits. The CI/CD pipeline runs on every push and pull request.

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

_P.S. For any queries or concerns, you can reach out to me on [Twitter](https://twitter.com/rampatra_). I'll try my best to help.\_
