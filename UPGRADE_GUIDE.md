# Upgrade Guide - Version 3.0.0

This guide documents the changes made during the modernization effort.

## Summary of Changes

**Version 2.0.0 (Phase 1):** Security and compatibility updates with modern dependencies
**Version 2.1.0 (Phase 2):** Performance optimization with Bootstrap 5.3 and native browser APIs
**Version 3.0.0 (Phase 4):** Architecture improvements with Vite, ESLint, Prettier, and CI/CD

---

## Phase 4: Architecture Improvements (COMPLETED - v3.0.0)

### Summary

Version 3.0.0 introduces major architectural improvements including a modern build system (Vite), code quality tools (ESLint, Prettier), automated git hooks (Husky), and a comprehensive CI/CD pipeline (GitHub Actions).

**New Features:**

- **Vite 7.x** - Modern development server with Hot Module Replacement
- **ESLint 9.x** - JavaScript linting with modern flat config
- **Prettier 3.x** - Automated code formatting
- **Husky 9.x** - Git hooks for pre-commit quality checks
- **GitHub Actions** - Full CI/CD pipeline with automated testing and deployment

**New npm Scripts:**

- `npm run dev` - Start Vite dev server with HMR (port 3000)
- `npm run lint` - Run ESLint and auto-fix issues
- `npm run format` - Format all code with Prettier
- `npm run format:check` - Check code formatting
- `npm run preview` - Preview production build

**Migration Impact:**

- **Breaking:** `npm run watch` now uses Vite instead of Gulp (Gulp still available via `npm run gulp`)
- **New:** Git pre-commit hooks automatically lint and format code
- **New:** CI/CD pipeline runs on every push and pull request
- **Enhanced:** Better developer experience with instant hot reload

---

## Phase 2: Performance Optimization (COMPLETED - v2.1.0)

### Summary

Version 2.1.0 focuses on performance optimization, upgrading to Bootstrap 5.3, and replacing jQuery plugins with native browser APIs.

---

## Phase 2 Breaking Changes

### 1. Bootstrap (3.x → 5.3.3)

**MAJOR BREAKING CHANGE:** Bootstrap completely rewritten

**Critical HTML Changes Required:**

```html
<!-- Grid offsets -->
Old:
<div class="col-md-6 col-md-offset-3">
  New:
  <div class="col-md-6 offset-md-3">
    <!-- Visibility utilities -->
    Old:
    <div class="hidden-xs hidden-sm">
      New:
      <div class="d-none d-md-block">
        <!-- Modals -->
        Old: data-toggle="modal" data-dismiss="modal" New: data-bs-toggle="modal"
        data-bs-dismiss="modal"

        <!-- Close buttons -->
        Old: <button class="close"><span>&times;</span></button> New:
        <button class="btn-close"></button>
      </div>
    </div>
  </div>
</div>
```

**CSS Changes:**

- Bootstrap 3 CSS file completely replaced
- Custom CSS compatibility layer added (in styles.scss)
- Modal close button styling updated
- Grid system uses modern flexbox

**Migration:**
All HTML has been updated in this release. If you have custom pages, update them to Bootstrap 5 syntax.

### 2. Waypoints Library Removed

**BREAKING:** Waypoints.js completely removed

**Replacement:** Native IntersectionObserver API

**Changes:**

- Removed `waypoints` dependency from package.json
- All scroll-triggered animations now use IntersectionObserver
- Better performance with native API
- No library overhead

**Migration:**
If you added custom waypoint triggers, convert them:

```javascript
// Old (Waypoints)
$('.element').waypoint(
  function () {
    $('.element').addClass('animate');
  },
  { offset: '75%' }
);

// New (IntersectionObserver)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  },
  { rootMargin: '-25% 0px' }
);

document.querySelectorAll('.element').forEach((el) => {
  observer.observe(el);
});
```

### 3. Build System (gulp-uglify → gulp-terser)

**BREAKING:** ES6+ JavaScript required for minification

**Changes:**

- gulp-uglify removed (doesn't support ES6+)
- gulp-terser added for modern JavaScript
- Codebase now uses ES6+ syntax (const, arrow functions, etc.)

**Impact:**

- Minified JavaScript now supports modern syntax
- Better code compression
- Faster build times

**Migration:**
No action needed - build system automatically updated.

---

## Phase 1 Breaking Changes

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

## Phase 2 New Features

### 1. Performance Optimizations

- **Lazy Loading:** All images below the fold use `loading="lazy"`
- **Resource Hints:** Preconnect to Google Maps, YouTube, GA
- **Deferred Scripts:** Non-critical JS deferred for faster page load
- **Optimized Loading:** Critical CSS and JS preloaded

### 2. Modern JavaScript APIs

- **IntersectionObserver:** Native scroll-triggered animations
- **Lazy YouTube:** Video player loads only when needed
- **ES6+ Syntax:** const, arrow functions, template literals
- **Smaller Bundle:** Removed Waypoints library dependency

### 3. Bootstrap 5.3 Features

- **Modern Grid:** Flexbox-based responsive grid
- **Better Modals:** Improved accessibility and styling
- **Utility Classes:** Comprehensive utility system
- **Smaller CSS:** More efficient stylesheet

### 4. Build Improvements

- **ES6+ Support:** Full modern JavaScript support
- **Terser Minification:** Better compression than UglifyJS
- **Faster Builds:** Optimized build pipeline

---

## Phase 1 New Features

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

### v1.0.1 → v2.0.0 (Phase 1)

```json
{
  // Updated
  "animate.css": "^3.7.2" → "^4.1.1",
  "font-awesome": "^4.7.0" → "@fortawesome/fontawesome-free": "^6.7.0",
  "gulp": "^4.0.2" → "^5.0.0",
  "sass": "^1.25.0" → "^1.80.0",

  // Added
  "jquery": "^3.7.1"
}
```

### v2.0.0 → v2.1.0 (Phase 2)

```json
{
  // Added
  "bootstrap": "^5.3.3",
  "gulp-terser": "^2.1.0",

  // Removed
  "waypoints": "^4.0.1" ❌ (replaced with native IntersectionObserver),
  "gulp-uglify": "^3.0.2" ❌ (replaced with gulp-terser)
}
```

### v2.1.0 → v3.0.0 (Phase 4)

```json
{
  // Added
  "@eslint/js": "^9.38.0",
  "@vitejs/plugin-legacy": "^7.2.1",
  "eslint": "^9.38.0",
  "eslint-config-prettier": "^10.1.8",
  "eslint-plugin-prettier": "^5.5.4",
  "husky": "^9.1.7",
  "lint-staged": "^16.2.6",
  "prettier": "^3.6.2",
  "terser": "^5.44.0",
  "vite": "^7.1.12",
  "vite-plugin-sass": "^0.1.0",
  "vite-plugin-static-copy": "^3.1.4"
}
```

### Current Dependencies (v3.0.0)

```json
{
  "dependencies": {
    "@fortawesome/fontawesome-free": "^6.7.0",
    "animate.css": "^4.1.1",
    "bootstrap": "^5.3.3",
    "jquery": "^3.7.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.38.0",
    "@vitejs/plugin-legacy": "^7.2.1",
    "eslint": "^9.38.0",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-prettier": "^5.5.4",
    "gulp": "^5.0.0",
    "gulp-rename": "^2.0.0",
    "gulp-sass": "^5.1.0",
    "gulp-terser": "^2.1.0",
    "gulp-uglify": "^3.0.2",
    "husky": "^9.1.7",
    "lint-staged": "^16.2.6",
    "prettier": "^3.6.2",
    "sass": "^1.80.0",
    "terser": "^5.44.0",
    "vite": "^7.1.12",
    "vite-plugin-sass": "^0.1.0",
    "vite-plugin-static-copy": "^3.1.4"
  }
}
```

### Security Status

- **v1.0.1:** Multiple known vulnerabilities in jQuery 1.11.2
- **v2.0.0:** 0 known vulnerabilities (verified with `npm audit`)
- **v2.1.0:** 0 known vulnerabilities, 195 packages total
- **v3.0.0:** 0 known vulnerabilities, 468 packages total

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

### Version 2.1.0 (2025-10-29) - Phase 2 Complete

**Added:**

- Bootstrap 5.3.3 dependency
- gulp-terser for ES6+ minification
- Lazy loading for all images (`loading="lazy"`)
- Resource hints (preconnect, dns-prefetch, preload)
- IntersectionObserver for scroll animations
- IntersectionObserver for lazy YouTube loading
- Bootstrap 5 compatibility CSS
- ES6+ JavaScript syntax throughout
- Deferred script loading
- Technology Stack section in README
- Browser Support section in README

**Updated:**

- Bootstrap 3.x → 5.3.3 (major upgrade)
- All HTML grid classes to Bootstrap 5 syntax
- All HTML visibility utilities to Bootstrap 5 syntax
- Modal components to Bootstrap 5 syntax
- gulpfile.js to use terser instead of uglify
- js/scripts.js with IntersectionObserver implementation
- sass/styles.scss with Bootstrap 5 fixes
- README.md with modern stack information
- MODERNIZATION_PLAN.md marked Phase 2 complete
- package.json version to 2.1.0

**Removed:**

- Waypoints library dependency (replaced with IntersectionObserver)
- gulp-uglify (replaced with gulp-terser)
- Waypoints CDN fallback code
- All `psd/` design files from repository (~62MB)

**Performance:**

- Reduced initial JavaScript load (deferred scripts)
- Faster DNS resolution (resource hints)
- Reduced image loading impact (lazy loading)
- Smoother animations (native API vs library)
- Faster YouTube initialization (lazy loaded)
- Smaller repository size (removed PSDs)

**Build System:**

- Now supports ES6+ JavaScript syntax
- Terser provides better minification than UglifyJS
- Faster build times with modern tools

---

### Version 2.0.0 (2025-10-28) - Phase 1 Complete

**Added:**

- API key configuration system (config.js)
- Security documentation (SECURITY.md)
- Modernization plan (MODERNIZATION_PLAN.md)
- Upgrade guide (UPGRADE_GUIDE.md)
- Deployment documentation (DEPLOYMENT.md)

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

Last Updated: 2025-10-29
Phase: 2 of 5 Complete
Current Version: 2.1.0
