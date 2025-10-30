/**
 * Wedding Website Configuration Template
 *
 * GETTING STARTED:
 * 1. Copy this file to 'wedding-data.js'
 * 2. Fill in your wedding details below
 * 3. Replace placeholder images in the /img folder with your own photos
 * 4. Update API keys in config.js (see config.example.js)
 *
 * TIP: You can use an LLM coding assistant to help you customize this file!
 * See LLM-INSTRUCTIONS.md for guidance.
 */

const WEDDING_DATA = {
    // ====================
    // COUPLE INFORMATION
    // ====================
    couple: {
        bride: {
            name: "Jane",
            fullName: "Jane Smith"
        },
        groom: {
            name: "John",
            fullName: "John Doe",
            website: "" // Optional: Personal website URL
        },
        coupleNames: "John & Jane",
        story: {
            heading: "How we met",
            text: `Your love story goes here. Tell your guests how you met, when you fell in love,
                   and what makes your relationship special. This will appear on your wedding website.`,
            image1: "img/couple-photo-1.jpg",
            image2: "img/couple-photo-2.jpg"
        }
    },

    // ====================
    // WEDDING EVENTS
    // ====================
    events: [
        {
            name: "Wedding Ceremony",
            date: "June 15th, 2025",
            time: "2PM - 4PM",
            description: "Join us as we exchange vows and celebrate our union.",
            calendarDate: {
                start: "20250615T140000",
                end: "20250615T160000"
            },
            isMainEvent: true
        },
        {
            name: "Reception",
            date: "June 15th, 2025",
            time: "6PM - 11PM",
            description: "Dinner, dancing, and celebrating our new journey together!",
            calendarDate: {
                start: "20250615T180000",
                end: "20250615T230000"
            }
        }
        // Add more events as needed
    ],

    // Calendar event details
    calendar: {
        title: "John & Jane's Wedding",
        description: "Join us for our wedding celebration!",
        location: "Your Venue Name and Address",
        startDate: "20250615T140000",
        endDate: "20250615T230000"
    },

    // ====================
    // VENUE INFORMATION
    // ====================
    venue: {
        name: "Your Venue Name",
        address: {
            street: "123 Wedding Street",
            city: "Your City",
            state: "Your State",
            postalCode: "12345",
            country: "US"
        },
        coordinates: {
            lat: 40.7128, // Replace with your venue's latitude
            lng: -74.0060 // Replace with your venue's longitude
        },
        contact: {
            name: "Contact Person Name",
            phones: ["+1 234-567-8900"]
        }
    },

    // ====================
    // RSVP CONFIGURATION
    // ====================
    rsvp: {
        enabled: true,
        deadline: "May 1st, 2025",
        // Generate MD5 hashes for your invite codes at https://www.md5hashgenerator.com/
        inviteCodeHashes: [
            "your-hashed-code-here"
        ],
        // Set up Google Apps Script for form submission (see README)
        formActionUrl: ""
    },

    // ====================
    // IMAGES & MEDIA
    // ====================
    images: {
        logo: "img/logo-lg.png",
        hero: "img/hero-min.jpg",
        instagramHashtag: "img/iphone_instagram.jpg",
        engagement: [
            { thumb: "img/eng_pics/photo1-min.jpg", full: "img/eng_pics/photo1.jpg" },
            { thumb: "img/eng_pics/photo2-min.jpg", full: "img/eng_pics/photo2.jpg" },
            { thumb: "img/eng_pics/photo3-min.jpg", full: "img/eng_pics/photo3.jpg" },
            { thumb: "img/eng_pics/photo4-min.jpg", full: "img/eng_pics/photo4.jpg" },
            { thumb: "img/eng_pics/photo5-min.jpg", full: "img/eng_pics/photo5.jpg" },
            { thumb: "img/eng_pics/photo6-min.jpg", full: "img/eng_pics/photo6.jpg" }
        ]
    },

    // Optional: YouTube video
    video: {
        enabled: false,
        youtubeId: "",
        location: ""
    },

    // ====================
    // SOCIAL MEDIA
    // ====================
    social: {
        instagram: {
            enabled: true,
            hashtag: "YourWeddingHashtag",
            url: "https://www.instagram.com/explore/tags/yourweddinghashtag/"
        },
        twitter: {
            handle: "@yourhandle"
        }
    },

    // ====================
    // DRESS CODE (Optional)
    // ====================
    dressCode: {
        enabled: false,
        events: []
    },

    // ====================
    // PAGE METADATA
    // ====================
    meta: {
        title: "John & Jane getting married!",
        description: "Join us for our wedding celebration on June 15th, 2025!",
        keywords: "wedding, John Jane, wedding invitation",
        ogTitle: "John & Jane's Wedding | June 15, 2025",
        ogImage: "https://yourwebsite.com/img/hero-min.jpg",
        ogUrl: "https://yourwebsite.com",
        manifestName: "John & Jane Wedding",
        manifestShortName: "J&J Wedding",
        manifestDescription: "Join us for our wedding celebration!"
    },

    // ====================
    // THEME COLORS
    // ====================
    theme: {
        primaryColor: "#e8ca6f",
        primaryColorHover: "#d3b56a"
    },

    // ====================
    // FOOTER
    // ====================
    footer: {
        text: "Made with love for our special day",
        showBackToTop: true
    }
};

// Make the configuration available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WEDDING_DATA;
}
