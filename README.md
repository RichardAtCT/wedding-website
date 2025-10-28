# Wedding Website
A beautiful, feature rich, device friendly wedding website.  
_See [wedding.rampatra.com](http://wedding.rampatra.com/) for a demo. Use invite code `271117` to RSVP._

# Highlights
1. Slick and fully __responsive__ design.
2. __RSVP feature__ which directly uploads data to a Google sheet.
3. __Receive email alerts__ when someone RSVPs.
4. __Add to Calendar__ feature which supports four different calendars.
5. __Book Uber__ button lets guests book a cab to the venue with just a single tap.
6. A nice __Youtube video__ showing your venue.
7. __Google Map__ showing your venue's location.
8. Start and run the website __completely free__. No hosting, backend server, or database required as you can use
   [GitHub Pages](https://pages.github.com/) to host and Google sheets (with the help of Google scripts) to store RSVP
   data.

# Getting Started

## Quick Start (Local Development)
1. `$ git clone https://github.com/rampatra/wedding-website.git` - clone this project to your computer
2. `$ cd wedding-website` - go inside the project directory
3. `$ npm install` - install dependencies
4. `$ npm run build` - compile sass to css, minify js, etc.
5. That's it, open `index.html` file on your browser by just double-clicking on it.

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
           FORM_ACTION_URL: 'YOUR_GOOGLE_APPS_SCRIPT_URL'
       }
   };
   ```

4. **Deploy to GitHub Pages:**
   - Push your changes to your repository
   - Enable GitHub Pages in repository settings
   - See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions

**Note:** The API keys in this repository are examples. While they are safe to commit when properly restricted (see [SECURITY.md](SECURITY.md)), you should replace them with your own keys for production use.

# Documentation
I have written a 
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

_P.S. For any queries or concerns, you can reach out to me on [Twitter](https://twitter.com/rampatra_). I'll try my best to help._
