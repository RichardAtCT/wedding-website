/**
 * Wedding Data Initialization Script
 *
 * This script populates the wedding website with data from wedding-data.js
 * It runs before the page loads to update metadata and content dynamically.
 */

(function () {
  'use strict';

  // Check if WEDDING_DATA is available
  if (typeof WEDDING_DATA === 'undefined') {
    console.error(
      'WEDDING_DATA not found! Make sure wedding-data.js is loaded before this script.'
    );
    return;
  }

  /**
   * Update page metadata (title, meta tags, etc.)
   */
  function updateMetadata() {
    const data = WEDDING_DATA;

    // Update page title
    document.title = data.meta.title;

    // Update meta tags
    updateMetaTag('name', 'description', data.meta.description);
    updateMetaTag('name', 'keywords', data.meta.keywords);
    updateMetaTag('name', 'theme-color', data.theme.primaryColor);
    updateMetaTag('name', 'author', data.couple.coupleNames);

    // Update Open Graph tags
    updateMetaTag('property', 'og:title', data.meta.ogTitle);
    updateMetaTag('property', 'og:description', data.meta.description);
    updateMetaTag('property', 'og:image', data.meta.ogImage);
    updateMetaTag('property', 'og:url', data.meta.ogUrl);
    updateMetaTag('property', 'og:site_name', data.couple.coupleNames + "'s Wedding");

    // Update Twitter Card tags
    updateMetaTag('name', 'twitter:title', data.meta.ogTitle);
    updateMetaTag('name', 'twitter:description', data.meta.description);
    updateMetaTag('name', 'twitter:image', data.meta.ogImage);
    updateMetaTag('name', 'twitter:url', data.meta.ogUrl);
    if (data.social.twitter.handle) {
      updateMetaTag('name', 'twitter:creator', data.social.twitter.handle);
    }
  }

  /**
   * Helper function to update or create meta tags
   */
  function updateMetaTag(attribute, name, content) {
    if (!content) return;

    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    if (element) {
      element.setAttribute('content', content);
    } else {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      element.setAttribute('content', content);
      document.head.appendChild(element);
    }
  }

  /**
   * Update structured data (Schema.org JSON-LD)
   */
  function updateStructuredData() {
    const data = WEDDING_DATA;

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: data.couple.coupleNames + "'s Wedding",
      description: data.meta.description,
      startDate: formatDateForSchema(data.calendar.startDate),
      endDate: formatDateForSchema(data.calendar.endDate),
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: data.venue.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: data.venue.address.street,
          addressLocality: data.venue.address.city,
          addressRegion: data.venue.address.state,
          postalCode: data.venue.address.postalCode,
          addressCountry: data.venue.address.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: data.venue.coordinates.lat.toString(),
          longitude: data.venue.coordinates.lng.toString(),
        },
      },
      organizer: [
        {
          '@type': 'Person',
          name: data.couple.groom.fullName,
        },
        {
          '@type': 'Person',
          name: data.couple.bride.fullName,
        },
      ],
      image: [data.meta.ogImage, data.images.logo],
    };

    // Add groom website if available
    if (data.couple.groom.website) {
      structuredData.organizer[0].url = data.couple.groom.website;
    }

    // Add sub-events
    if (data.events.length > 0) {
      structuredData.subEvent = data.events.map((event) => ({
        '@type': 'Event',
        name: event.name,
        startDate: formatDateForSchema(event.calendarDate.start),
        endDate: formatDateForSchema(event.calendarDate.end),
        description: event.description,
      }));
    }

    // Find and update or create the script tag
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (scriptTag) {
      scriptTag.textContent = JSON.stringify(structuredData, null, 4);
    } else {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.textContent = JSON.stringify(structuredData, null, 4);
      document.head.appendChild(scriptTag);
    }
  }

  /**
   * Convert calendar date format to ISO 8601 for Schema.org
   * Input: "20171127T130000"
   * Output: "2017-11-27T13:00:00+05:30" (with timezone)
   */
  function formatDateForSchema(dateStr) {
    if (!dateStr) return '';

    // Parse the date string (YYYYMMDDTHHMMSS)
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    const hour = dateStr.substring(9, 11);
    const minute = dateStr.substring(11, 13);
    const second = dateStr.substring(13, 15) || '00';

    // Return in ISO 8601 format (using +05:30 as default timezone, can be customized)
    return `${year}-${month}-${day}T${hour}:${minute}:${second}+05:30`;
  }

  /**
   * Store data globally for access by scripts.js and other files
   */
  function initializeGlobalData() {
    window.WEDDING_CONFIG = WEDDING_DATA;
  }

  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      updateMetadata();
      updateStructuredData();
      initializeGlobalData();
    });
  } else {
    // DOM already loaded
    updateMetadata();
    updateStructuredData();
    initializeGlobalData();
  }
})();
