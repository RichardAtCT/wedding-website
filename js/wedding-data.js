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
            name: "Antara",
            fullName: "Antara Roy" // Used in structured data
        },
        groom: {
            name: "Ram",
            fullName: "Ram Patra",
            website: "https://rampatra.com" // Optional: Personal website URL
        },
        coupleNames: "Ram & Antara", // How you want your names to appear together
        story: {
            heading: "How we met",
            text: `I first saw Antara in the Fall of 2008 at Amity University, Uttar Pradesh. She was the most
                   stunning beauty I have ever seen and from that day forward, I knew my heart belonged to her. Like a
                   complete loser, I was too nervous to talk to her for almost a year. Finally, in June of 2009, I got
                   some courage and introduced myself to her and the rest, as they say, is history.`,
            image1: "img/IMG_2317.jpg", // First photo in the story section
            image2: "img/DSD_0214.jpg"  // Second photo in the story section
        }
    },

    // ====================
    // WEDDING EVENTS
    // ====================
    events: [
        {
            name: "Mehndi",
            date: "November 27th, 2017",
            time: "1PM - 5PM",
            description: "It is a foundation of any wedding. Mehndi is a ceremony of love, in which the bride and groom's palms are decorated with beautiful and intricate designs of henna.",
            calendarDate: {
                start: "20171127T130000",
                end: "20171127T170000"
            }
        },
        {
            name: "Cocktail Night",
            date: "November 27th, 2017",
            time: "7PM - 12AM",
            description: "Let's get the party started! Join us for an evening of great music, dancing, drinks and lots of fun as we celebrate the beginning of our new journey together.",
            calendarDate: {
                start: "20171127T190000",
                end: "20171128T000000"
            }
        },
        {
            name: "Haldi",
            date: "November 28th, 2017",
            time: "10AM - 11AM",
            description: "The Haldi ceremony is a traditional ritual where turmeric paste is applied to the bride and groom. It's believed to bring good fortune and a radiant glow for the big day.",
            calendarDate: {
                start: "20171128T100000",
                end: "20171128T110000"
            }
        },
        {
            name: "Wedding",
            date: "November 28th, 2017",
            time: "6PM - 12AM",
            description: "This is the main event! Join us as we exchange vows and celebrate our union with traditional ceremonies, followed by dinner and dancing.",
            calendarDate: {
                start: "20171128T180000",
                end: "20171129T000000"
            },
            isMainEvent: true // Used for structured data
        }
    ],

    // Calendar event details (used for "Add to Calendar" feature)
    calendar: {
        title: "Ram & Antara's Wedding",
        description: "Join us for the wedding celebration of Ram and Antara!",
        location: "ITC Fortune Park, Kona Expressway, Howrah",
        // Overall event timespan (should cover all events)
        startDate: "20171127T100000",
        endDate: "20171129T000000"
    },

    // ====================
    // VENUE INFORMATION
    // ====================
    venue: {
        name: "ITC Fortune Park",
        address: {
            street: "Kona Expressway",
            city: "Howrah",
            state: "West Bengal",
            postalCode: "711403",
            country: "IN"
        },
        coordinates: {
            lat: 22.5932759,
            lng: 88.27027720000001
        },
        contact: {
            name: "Mr. Amit Roy",
            phones: ["+91 9412345678", "+91 7123456789"]
        }
    },

    // ====================
    // RSVP CONFIGURATION
    // ====================
    rsvp: {
        enabled: true,
        deadline: "November 1st '17",
        // MD5 hashed invite codes (use https://www.md5hashgenerator.com/ to generate)
        // Example: "271117" hashes to "b0e53b10c1f55ede516b240036b88f40"
        inviteCodeHashes: [
            "b0e53b10c1f55ede516b240036b88f40",
            "2ac7f43695eb0479d5846bb38eec59cc"
        ],
        // Google Apps Script URL for form submission (see README for setup instructions)
        formActionUrl: "https://script.google.com/macros/s/AKfycbyo0rEknln8LedEP3bkONsfOh776IR5lFidLhJFQ6jdvRiH4dKvHZmtoIybvnxpxYr2cA/exec"
    },

    // ====================
    // IMAGES & MEDIA
    // ====================
    images: {
        logo: "img/logo-lg.png",
        hero: "img/hero-min.jpg",
        instagramHashtag: "img/iphone_instagram.jpg",
        // Engagement photos for gallery
        engagement: [
            { thumb: "img/eng_pics/_RFX2942-min.jpg", full: "img/eng_pics/_RFX2942.jpg" },
            { thumb: "img/eng_pics/IMG_3483-min.jpg", full: "img/eng_pics/IMG_3483.jpg" },
            { thumb: "img/eng_pics/DSD_0290-min.jpg", full: "img/eng_pics/DSD_0290.jpg" },
            { thumb: "img/eng_pics/_RFX3034-min.jpg", full: "img/eng_pics/_RFX3034.jpg" },
            { thumb: "img/eng_pics/DSC_3032-min.jpg", full: "img/eng_pics/DSC_3032.jpg" },
            { thumb: "img/eng_pics/DSD_0218-min.jpg", full: "img/eng_pics/DSD_0218.jpg" }
        ]
    },

    // Optional: YouTube video to showcase location or memories
    video: {
        enabled: true,
        youtubeId: "9giqL1H6yRs", // YouTube video ID
        location: "Kolkata" // Location name shown above video
    },

    // ====================
    // SOCIAL MEDIA
    // ====================
    social: {
        instagram: {
            enabled: true,
            hashtag: "RamAndAntara", // Without the # symbol
            url: "https://www.instagram.com/explore/tags/ramandantara/"
        },
        twitter: {
            handle: "@rampatra_" // Include the @ symbol
        }
    },

    // ====================
    // DRESS CODE (Optional)
    // ====================
    dressCode: {
        enabled: true,
        events: [
            {
                name: "Mehndi",
                description: "Wear something colorful and comfortable. Think vibrant yellows, greens, and oranges!"
            },
            {
                name: "Cocktail Night",
                description: "Dress to impress! Cocktail attire - elegant dresses and suits."
            },
            {
                name: "Haldi",
                description: "Wear clothes you don't mind getting stained with turmeric. Whites and light colors are traditional."
            },
            {
                name: "Wedding",
                description: "Traditional Indian wedding attire. Sarees, lehengas, sherwanis, or suits."
            }
        ]
    },

    // ====================
    // PAGE METADATA
    // ====================
    meta: {
        title: "Ram & Antara getting hitched!",
        description: "On November 27-28, 2017, we will celebrate our love with family and friends in Kolkata, India. We can't wait to see you there!",
        keywords: "wedding, Ram Antara, wedding invitation, November 27, November 28, ITC Fortune Park, Howrah, Kolkata",
        // Open Graph & Social Sharing
        ogTitle: "Ram & Antara's Wedding | November 27-28, 2017",
        ogImage: "https://wedding.ramswaroop.me/img/hero-min.jpg",
        ogUrl: "https://wedding.ramswaroop.me",
        // For PWA manifest
        manifestName: "Ram & Antara Wedding",
        manifestShortName: "R&A Wedding",
        manifestDescription: "Join us for our wedding celebration in Kolkata!"
    },

    // ====================
    // THEME COLORS
    // ====================
    theme: {
        primaryColor: "#e8ca6f", // Gold accent color
        primaryColorHover: "#d3b56a",
        // You can add more color customizations here
        // These would need corresponding CSS updates
    },

    // ====================
    // FOOTER
    // ====================
    footer: {
        text: "Crafted by Ram with lots of heart for Antara",
        showBackToTop: true
    }
};

// Make the configuration available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WEDDING_DATA;
}
