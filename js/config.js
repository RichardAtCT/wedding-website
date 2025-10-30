/**
 * Configuration file for API keys
 *
 * IMPORTANT: These keys are SAFE to commit when properly restricted:
 *
 * 1. Google Maps API Key - Restrict to your domain in Google Cloud Console
 *    https://console.cloud.google.com/google/maps-apis/credentials
 *    Set HTTP referrer restrictions to your domain(s) only
 *
 * 2. GA4 Measurement ID - Public by design (visible in all page requests)
 *
 * 3. Uber Client ID - Public OAuth identifier
 *
 * Users should replace these with their own keys and restrict them properly.
 * See DEPLOYMENT.md and SECURITY.md for detailed instructions.
 */

const CONFIG = {
  // Google Maps API Key
  GOOGLE_MAPS_API_KEY: 'AIzaSyBlPw3GQYI3faa_9mRE6plWuM7xNEmrwH0',

  // Google Analytics 4 Measurement ID
  GA4_MEASUREMENT_ID: 'G-XXXXXXXXXX',

  // Uber API Client ID
  UBER_CLIENT_ID: 'Yh7Dl6SjB56RY2JuuZF8ttVa6ryFV78W',

  // RSVP Form Configuration
  RSVP: {
    FORM_ACTION_URL: '',
  },
};

// Make config available globally
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
