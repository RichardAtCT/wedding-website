/**
 * Configuration file for API keys and sensitive data
 *
 * IMPORTANT:
 * 1. Copy this file to 'config.js' in the same directory
 * 2. Replace the placeholder values with your actual API keys
 * 3. Never commit config.js to version control
 */

const CONFIG = {
    // Google Maps API Key
    // Get your key from: https://console.cloud.google.com/google/maps-apis
    GOOGLE_MAPS_API_KEY: 'YOUR_GOOGLE_MAPS_API_KEY_HERE',

    // Google Analytics 4 Measurement ID
    // Format: G-XXXXXXXXXX
    // Get from: https://analytics.google.com/
    GA4_MEASUREMENT_ID: 'G-XXXXXXXXXX',

    // Uber API Client ID (optional)
    // Get from: https://developer.uber.com/
    UBER_CLIENT_ID: 'YOUR_UBER_CLIENT_ID_HERE',

    // RSVP Form Configuration
    RSVP: {
        // Google Apps Script URL for RSVP form submissions
        FORM_ACTION_URL: 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
    }
};

// Make config available globally
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
