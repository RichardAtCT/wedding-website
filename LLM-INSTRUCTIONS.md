# LLM Instructions for Personalizing Your Wedding Website

This file contains instructions you can provide to an LLM coding assistant (like Claude, ChatGPT, etc.) to help you customize this wedding website template for your event.

## Quick Start Prompt

Copy and paste this prompt to your LLM coding assistant, filling in your details:

```
I'm customizing a wedding website template. Please help me personalize it with the following information:

**Couple Information:**
- Bride's name: [Your name]
- Groom's name: [Your name]
- How we met story: [Your story]

**Wedding Date & Events:**
- Main wedding date: [Date]
- Event 1: [Name, date, time, description]
- Event 2: [Name, date, time, description]
- [Add more events as needed]

**Venue Details:**
- Venue name: [Name]
- Address: [Full address]
- Coordinates: [Lat/Long if known, otherwise just the address]
- Contact person: [Name and phone]

**Additional Details:**
- RSVP deadline: [Date]
- Instagram hashtag: [Your hashtag]
- Social media handles: [Your handles]
- Dress code for each event: [Details]

Please update the wedding-data.js file with this information. If I'm missing any information, please ask me for it before proceeding.
```

---

## Detailed Instructions for LLM Assistants

When a user asks you to help customize this wedding website, follow these steps:

### Step 1: Gather Required Information

Ask the user for the following essential information if not already provided:

**Couple Information:**

- Bride's full name and preferred short name
- Groom's full name and preferred short name
- How they met (their love story)
- Groom's personal website (optional)

**Event Details:**
For each wedding event (ceremony, reception, pre-wedding events):

- Event name
- Date (month, day, year)
- Time (start and end)
- Brief description
- Which event is the main ceremony

**Venue Information:**

- Venue name
- Full address (street, city, state, postal code, country)
- Venue coordinates (latitude/longitude) - if they don't know, you can look this up
- Contact person name and phone number(s)

**RSVP Configuration:**

- RSVP deadline date
- Invite code(s) they want to use (you'll need to generate MD5 hashes)
- Whether they've set up Google Apps Script for form submission

**Visual Assets:**

- Confirm they have photos ready to upload:
  - Hero/banner image
  - 2 photos for "how we met" section
  - 6 engagement/couple photos for gallery
  - Logo (optional)

**Social Media:**

- Instagram hashtag (without #)
- Twitter handle (with @)
- Any other social media

**Additional:**

- Dress code for each event (optional)
- YouTube video ID if they want to feature a video (optional)
- Website URL where it will be hosted
- Primary color preference (or keep the default gold)

### Step 2: Update wedding-data.js

1. **Read the existing wedding-data.js file**
   - This contains the current example data (Ram & Antara's wedding)

2. **Update the WEDDING_DATA object** with the user's information:
   - Replace all couple names, dates, and personal information
   - Update all event details with correct dates, times, and descriptions
   - Update venue information including coordinates
   - Update image paths (they may need to rename their images)
   - Update social media information
   - Update metadata (page title, description, OG tags)

3. **Format dates correctly:**
   - Display dates: "June 15th, 2025"
   - Calendar dates: "YYYYMMDDTHHMMSS" format (e.g., "20250615T140000")
   - Ensure all dates are consistent across the config

4. **Generate MD5 hashes for invite codes:**
   - Take the user's desired invite code(s)
   - Generate MD5 hash using a library or online tool
   - Add to `rsvp.inviteCodeHashes` array
   - Example: "wedding2025" → MD5 hash → add to array

### Step 3: Update config.js (if needed)

If the user has API keys, help them update `js/config.js`:

- Google Maps API key (required for venue map)
- Google Analytics 4 Measurement ID (optional)
- Uber Client ID (optional)
- Google Apps Script URL for RSVP form (required if using RSVP)

Remind them: **Never commit config.js to public repositories!**

### Step 4: Update manifest.json

Update the PWA manifest with:

- New couple names
- Updated description
- Their preferred theme color (from wedding-data.js)

### Step 5: Provide Image Guidance

Tell the user which images they need to prepare:

```
Please prepare the following images and place them in the /img folder:

Required Images:
- hero-min.jpg - Main banner image (1920x1080px or larger, landscape)
- logo-lg.png - Your logo/monogram (if using)

For "How We Met" section:
- IMG_2317.jpg (or rename your files in wedding-data.js)
- DSD_0214.jpg

For engagement gallery (/img/eng_pics folder):
- 6 photos with both thumbnail (-min.jpg) and full-size versions
- Recommended size: Thumbnails 400px wide, Full size 1200px wide

Optional:
- iphone_instagram.jpg - For Instagram hashtag section
```

### Step 6: Calendar Date Formatting Helper

When converting dates to calendar format, use this logic:

```
User provides: "June 15, 2025, 2:00 PM"
Convert to: "20250615T140000"

Format: YYYYMMDDTHHMMSS
- YYYY = 4-digit year
- MM = 2-digit month (01-12)
- DD = 2-digit day (01-31)
- T = literal 'T' separator
- HH = 2-digit hour in 24-hour format (00-23)
- MM = 2-digit minute (00-59)
- SS = 2-digit second (usually 00)
```

### Step 7: Testing Checklist

After making changes, provide this checklist to the user:

```
✓ Open index.html in a browser
✓ Verify all names and dates are correct
✓ Check that all events display properly
✓ Test the venue map (requires Google Maps API key)
✓ Test RSVP form with invite code
✓ Check all images load correctly
✓ Test on mobile device/responsive view
✓ Verify "Add to Calendar" buttons work
✓ Check social media links
```

### Step 8: Common Customizations

**To add more events:**
Add a new object to the `events` array in wedding-data.js:

```javascript
{
    name: "Rehearsal Dinner",
    date: "June 14th, 2025",
    time: "6PM - 9PM",
    description: "Join us for a casual dinner the night before the wedding.",
    calendarDate: {
        start: "20250614T180000",
        end: "20250614T210000"
    }
}
```

**To change the color scheme:**
Update `theme.primaryColor` in wedding-data.js, then update the SCSS variables in `sass/partials/_colors.scss`:

```scss
$accent-color: #your-color-here;
```

**To disable features:**

- Set `video.enabled: false` to hide video section
- Set `dressCode.enabled: false` to remove dress code modal
- Set `rsvp.enabled: false` to disable RSVP form
- Set `social.instagram.enabled: false` to hide Instagram section

### Step 9: Security Reminders

Always remind users:

- Never commit `config.js` with real API keys to public repos
- Add `config.js` and `wedding-data.js` to `.gitignore` if making the repo public
- Use environment variables or keep a local copy of these files
- The provided `config.example.js` and `wedding-data.example.js` are for reference only

### Step 10: Additional Help

If the user needs help with:

- **Setting up Google Apps Script for RSVP:** Direct them to the original README section
- **Getting Google Maps API key:** Provide link to Google Cloud Console
- **Generating MD5 hashes:** Suggest https://www.md5hashgenerator.com/
- **Image optimization:** Recommend tools like TinyPNG or Squoosh
- **Deployment:** Suggest GitHub Pages, Netlify, or Vercel

---

## Example Interaction

**User:** "Help me customize this for my wedding. I'm Sarah and my fiancé is Mike. We're getting married on July 20, 2025 at The Grand Hotel in San Francisco."

**LLM Response:** "I'd be happy to help! Let me gather some more details:

1. What time is your ceremony?
2. Do you have any other events (reception, rehearsal dinner, etc.)?
3. What's the full address of The Grand Hotel?
4. Do you have a contact person's name and phone number for the venue?
5. When is your RSVP deadline?
6. What invite code would you like to use?
7. Do you have an Instagram hashtag for your wedding?
8. Have you prepared your photos? I'll need:
   - A banner image
   - 2 photos for your love story
   - 6 photos for the engagement gallery

Once you provide these details, I'll update the wedding-data.js file for you!"

---

## Advanced Customization Guidance

For users who want to make deeper customizations, you can help with:

1. **Modifying the HTML structure** (index.html)
2. **Customizing styles** (sass/styles.scss and partials)
3. **Adding new sections** to the website
4. **Integrating additional APIs** or services
5. **Customizing animations** and effects
6. **Optimizing performance** and accessibility
7. **Setting up custom domains** and hosting

Always ask clarifying questions and provide code examples when helping with these advanced tasks.

---

## Error Prevention

Common issues to watch for:

- ✗ Incorrect date format in calendar dates
- ✗ Missing comma in JavaScript arrays/objects
- ✗ Incorrect file paths for images
- ✗ Latitude/longitude swapped
- ✗ Missing quotes around strings
- ✗ Forgetting to escape special characters in strings
- ✗ Time zones not considered for calendar dates

Always validate the JavaScript syntax after making changes and test thoroughly!

---

## Need More Help?

If you encounter issues or need clarification on any part of this template, please:

1. Check the main README.md for technical documentation
2. Review the original code comments
3. Consult the wedding-data.example.js for reference
4. Ask your LLM assistant to debug specific issues

Happy customizing! 🎉
