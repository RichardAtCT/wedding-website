/**
 * Wedding Website Configuration
 *
 * This file contains all the personal information for your wedding website.
 * Simply update the values below to customize the website for your event.
 *
 * IMPORTANT: After updating this file, keep your changes and DO NOT commit
 * sensitive information to public repositories.
 */

const WEDDING_DATA = {
  // ====================
  // COUPLE INFORMATION
  // ====================
  couple: {
    bride: {
      name: 'Alex',
      fullName: 'Alex Johnson', // Used in structured data
    },
    groom: {
      name: 'Jordan',
      fullName: 'Jordan Smith',
      website: '', // Optional: Personal website URL
    },
    coupleNames: 'Alex & Jordan', // How you want your names to appear together
    story: {
      heading: 'How we met',
      text: `We first met in the spring at a local coffee shop. It was one of those perfect moments where
                   everything just felt right. We started talking about our favorite books and realized we had so much
                   in common. From that day forward, we knew there was something special between us. After months of
                   friendship and countless conversations, we finally decided to take the next step together.`,
      image1: 'img/IMG_2317.jpg', // First photo in the story section
      image2: 'img/DSD_0214.jpg', // Second photo in the story section
    },
  },

  // ====================
  // WEDDING EVENTS
  // ====================
  events: [
    {
      name: 'Welcome Reception',
      date: 'June 15th, 2024',
      time: '2PM - 5PM',
      description:
        "Join us for a casual afternoon reception where we'll welcome all our guests. Light refreshments will be served as we gather to celebrate the beginning of our wedding festivities.",
      calendarDate: {
        start: '20240615T140000',
        end: '20240615T170000',
      },
    },
    {
      name: 'Rehearsal Dinner',
      date: 'June 15th, 2024',
      time: '7PM - 11PM',
      description:
        'An intimate evening with close family and friends. Join us for dinner, drinks, and toasts as we celebrate the night before our big day.',
      calendarDate: {
        start: '20240615T190000',
        end: '20240615T230000',
      },
    },
    {
      name: 'Wedding Ceremony',
      date: 'June 16th, 2024',
      time: '3PM - 4PM',
      description:
        'The ceremony where we exchange our vows and commit to spending the rest of our lives together. Please arrive 15 minutes early to find your seats.',
      calendarDate: {
        start: '20240616T150000',
        end: '20240616T160000',
      },
    },
    {
      name: 'Reception',
      date: 'June 16th, 2024',
      time: '5PM - 11PM',
      description:
        'Celebrate with us! Join us for dinner, dancing, and celebrations as we begin our journey as a married couple.',
      calendarDate: {
        start: '20240616T170000',
        end: '20240616T230000',
      },
      isMainEvent: true, // Used for structured data
    },
  ],

  // Calendar event details (used for "Add to Calendar" feature)
  calendar: {
    title: "Alex & Jordan's Wedding",
    description: 'Join us for the wedding celebration of Alex and Jordan!',
    location: 'Grand Plaza Hotel, 123 Main Street, Downtown',
    // Overall event timespan (should cover all events)
    startDate: '20240615T140000',
    endDate: '20240616T230000',
  },

  // ====================
  // VENUE INFORMATION
  // ====================
  venue: {
    name: 'Grand Plaza Hotel',
    address: {
      street: '123 Main Street',
      city: 'Downtown',
      state: 'California',
      postalCode: '90001',
      country: 'US',
    },
    coordinates: {
      lat: 34.0522,
      lng: -118.2437,
    },
    contact: {
      name: 'Event Coordinator',
      phones: ['+1 555-123-4567', '+1 555-987-6543'],
    },
  },

  // ====================
  // RSVP CONFIGURATION
  // ====================
  rsvp: {
    enabled: true,
    deadline: "May 1st '24",
    // MD5 hashed invite codes (use https://www.md5hashgenerator.com/ to generate)
    // Example: "271117" hashes to "b0e53b10c1f55ede516b240036b88f40"
    inviteCodeHashes: ['b0e53b10c1f55ede516b240036b88f40', '2ac7f43695eb0479d5846bb38eec59cc'],
    // Google Apps Script URL for form submission (see README for setup instructions)
    formActionUrl: '',
  },

  // ====================
  // IMAGES & MEDIA
  // ====================
  images: {
    logo: 'img/logo-lg.png',
    hero: 'img/hero-min.jpg',
    instagramHashtag: 'img/iphone_instagram.jpg',
    // Engagement photos for gallery
    engagement: [
      { thumb: 'img/eng_pics/_RFX2942-min.jpg', full: 'img/eng_pics/_RFX2942.jpg' },
      { thumb: 'img/eng_pics/IMG_3483-min.jpg', full: 'img/eng_pics/IMG_3483.jpg' },
      { thumb: 'img/eng_pics/DSD_0290-min.jpg', full: 'img/eng_pics/DSD_0290.jpg' },
      { thumb: 'img/eng_pics/_RFX3034-min.jpg', full: 'img/eng_pics/_RFX3034.jpg' },
      { thumb: 'img/eng_pics/DSC_3032-min.jpg', full: 'img/eng_pics/DSC_3032.jpg' },
      { thumb: 'img/eng_pics/DSD_0218-min.jpg', full: 'img/eng_pics/DSD_0218.jpg' },
    ],
  },

  // Optional: YouTube video to showcase location or memories
  video: {
    enabled: false,
    youtubeId: '', // YouTube video ID
    location: 'Our City', // Location name shown above video
  },

  // ====================
  // SOCIAL MEDIA
  // ====================
  social: {
    instagram: {
      enabled: true,
      hashtag: 'AlexAndJordan2024', // Without the # symbol
      url: 'https://www.instagram.com/explore/tags/alexandjordan2024/',
    },
    twitter: {
      handle: '@weddingcouple', // Include the @ symbol
    },
  },

  // ====================
  // DRESS CODE (Optional)
  // ====================
  dressCode: {
    enabled: true,
    events: [
      {
        name: 'Welcome Reception',
        description:
          'Casual chic attire. Sundresses, slacks and button-downs are perfect for this afternoon event.',
      },
      {
        name: 'Rehearsal Dinner',
        description: 'Semi-formal attire. Cocktail dresses and dress shirts with slacks.',
      },
      {
        name: 'Wedding Ceremony',
        description:
          'Formal attire. Floor-length gowns and tuxedos or formal suits. Please avoid wearing white.',
      },
      {
        name: 'Reception',
        description: 'Formal attire continues from the ceremony. Dancing shoes recommended!',
      },
    ],
  },

  // ====================
  // PAGE METADATA
  // ====================
  meta: {
    title: 'Alex & Jordan getting married!',
    description:
      "On June 15-16, 2024, we will celebrate our love with family and friends. We can't wait to see you there!",
    keywords:
      'wedding, Alex Jordan, wedding invitation, June 15, June 16, Grand Plaza Hotel, wedding celebration',
    // Open Graph & Social Sharing
    ogTitle: "Alex & Jordan's Wedding | June 15-16, 2024",
    ogImage: 'https://yourwebsite.com/img/hero-min.jpg',
    ogUrl: 'https://yourwebsite.com',
    // For PWA manifest
    manifestName: 'Alex & Jordan Wedding',
    manifestShortName: 'A&J Wedding',
    manifestDescription: 'Join us for our wedding celebration!',
  },

  // ====================
  // THEME COLORS
  // ====================
  theme: {
    primaryColor: '#e8ca6f', // Gold accent color
    primaryColorHover: '#d3b56a',
    // You can add more color customizations here
    // These would need corresponding CSS updates
  },

  // ====================
  // FOOTER
  // ====================
  footer: {
    text: 'Made with love for our special day',
    showBackToTop: true,
  },
};

// Make the configuration available globally
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WEDDING_DATA;
}
