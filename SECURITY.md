# Security Best Practices

This document outlines security measures and best practices for deploying the wedding website.

## API Key Management

### Configuration
All API keys are stored in `js/config.js` which is excluded from version control.

**Setup Instructions:**
1. Copy `js/config.example.js` to `js/config.js`
2. Replace placeholder values with your actual API keys
3. Never commit `config.js` to version control (it's in `.gitignore`)

### Required API Keys

1. **Google Maps API Key**
   - Get from: https://console.cloud.google.com/google/maps-apis
   - Restrict usage to your domain only
   - Enable only Maps JavaScript API

2. **Google Analytics 4 Measurement ID**
   - Format: `G-XXXXXXXXXX`
   - Get from: https://analytics.google.com/

3. **Uber API Client ID** (Optional)
   - Get from: https://developer.uber.com/
   - Only needed if using the "Book Uber" feature

## Content Security Policy (CSP)

Implement Content Security Policy headers to prevent XSS attacks.

### Recommended CSP Headers

Add these headers to your web server configuration:

```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://maps.googleapis.com https://apis.google.com https://cdnjs.cloudflare.com https://code.jquery.com https://platform.twitter.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com;
  img-src 'self' data: https: http:;
  font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com data:;
  connect-src 'self' https://www.google-analytics.com https://script.google.com;
  frame-src https://www.facebook.com https://platform.twitter.com https://plusone.google.com https://www.youtube.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self' https://script.google.com;
```

### Implementation by Platform

#### GitHub Pages
Add to your repository's `_headers` file:
```
/*
  Content-Security-Policy: [policy above]
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

#### Apache (.htaccess)
```apache
<IfModule mod_headers.c>
    Header set Content-Security-Policy "[policy above]"
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

#### Nginx
```nginx
add_header Content-Security-Policy "[policy above]";
add_header X-Content-Type-Options "nosniff";
add_header X-Frame-Options "SAMEORIGIN";
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
```

## HTTPS Requirements

**Always use HTTPS in production.**

- GitHub Pages provides free HTTPS with Let's Encrypt
- Never serve the website over HTTP
- Update all resource URLs to use HTTPS
- Enable HSTS (HTTP Strict Transport Security)

### HSTS Header
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

## Subresource Integrity (SRI)

For CDN resources, use SRI to ensure files haven't been tampered with.

Example:
```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossorigin="anonymous"></script>
```

Generate SRI hashes: https://www.srihash.org/

## Form Security

### RSVP Form
- Uses POST method to Google Apps Script
- Includes CSRF protection via invite code
- Validates invite code using MD5 hash (consider upgrading to SHA-256)
- Rate limiting recommended on backend

### Recommendations
1. Implement rate limiting on the Google Apps Script endpoint
2. Add honeypot field to prevent bot submissions
3. Consider upgrading from MD5 to SHA-256 for invite code validation
4. Add reCAPTCHA for additional protection

## Dependency Security

### Regular Updates
```bash
npm audit
npm audit fix
```

### Current Status (Phase 1 Complete)
- jQuery: 3.7.1 (latest, no known vulnerabilities)
- Font Awesome: 6.7.0 (latest)
- animate.css: 4.1.1 (latest)
- All dependencies updated to latest secure versions

### Automated Scanning
Consider setting up:
- Dependabot (GitHub)
- Snyk
- npm audit in CI/CD pipeline

## Privacy & GDPR Compliance

### Google Analytics 4
- Anonymize IP addresses (enabled by default in GA4)
- Cookie consent banner recommended
- Privacy policy required
- Data retention settings configured

### Recommendations
1. Add cookie consent banner (e.g., using CookieConsent library)
2. Create privacy policy page
3. Configure GA4 data retention settings
4. Consider EU-US data transfer implications

## Additional Security Measures

### 1. Input Validation
- All form inputs validated on client and server side
- Email validation implemented
- Number fields have min/max constraints

### 2. Cross-Origin Resource Sharing (CORS)
- Configure Google Apps Script to accept requests only from your domain

### 3. Rate Limiting
- Implement on RSVP form submission
- Prevent brute force attacks on invite code

### 4. Error Handling
- Don't expose sensitive information in error messages
- Log errors securely on backend

### 5. Regular Monitoring
- Monitor Google Apps Script logs
- Set up alerts for unusual activity
- Review access logs regularly

## Security Checklist

Before deploying to production:

- [ ] All API keys moved to config.js
- [ ] config.js added to .gitignore
- [ ] Google Maps API key restricted to domain
- [ ] HTTPS enabled
- [ ] CSP headers configured
- [ ] HSTS enabled
- [ ] SRI hashes added for CDN resources
- [ ] npm audit shows 0 vulnerabilities
- [ ] RSVP form rate limiting implemented
- [ ] Cookie consent banner added
- [ ] Privacy policy created
- [ ] Error handling doesn't expose sensitive data
- [ ] All external resources loaded over HTTPS

## Reporting Security Issues

If you discover a security vulnerability, please email security@yourdomain.com (replace with your contact).

Do not create public GitHub issues for security vulnerabilities.

## References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Content Security Policy Reference](https://content-security-policy.com/)
- [Google Maps API Security Best Practices](https://developers.google.com/maps/api-security-best-practices)
- [npm Security Best Practices](https://docs.npmjs.com/packages-and-modules/securing-your-code)

---

Last Updated: 2025-10-28
Version: 2.0.0
