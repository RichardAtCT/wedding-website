/**
 * Content Population Script
 *
 * This script populates dynamic content sections of the wedding website
 * from the wedding-data.js configuration file.
 *
 * Sections populated:
 * - Invitation text
 * - How we met story
 * - Events section
 * - Venue information
 * - Instagram hashtag
 * - Engagement photos gallery
 * - Video section
 * - Footer
 */

$(document).ready(function() {
    'use strict';

    if (typeof WEDDING_DATA === 'undefined') {
        console.error('WEDDING_DATA not found! Make sure wedding-data.js is loaded.');
        return;
    }

    const data = WEDDING_DATA;

    /**
     * Populate invitation section
     */
    function populateInvitation() {
        if (!data.events || data.events.length === 0) return;

        const firstEvent = data.events[0];
        const lastEvent = data.events[data.events.length - 1];

        // Extract dates from events
        const dates = data.events.map(e => e.date).join(' & ');

        $('#invitation p').html(
            `The dates are ${dates} and we would like you to be a part of it.`
        );
    }

    /**
     * Populate "How we met" section
     */
    function populateStory() {
        const story = data.couple.story;

        $('#intro-heading').text(story.heading);
        $('#intro .col-md-6 p').text(story.text);

        // Update story images
        $('#intro img').eq(0).attr('src', story.image1).attr('alt', data.couple.coupleNames);
        $('#intro img').eq(1).attr('src', story.image2).attr('alt', data.couple.coupleNames);
    }

    /**
     * Populate events section
     */
    function populateEvents() {
        if (!data.events || data.events.length === 0) return;

        const eventsContainer = $('.events');
        if (eventsContainer.length === 0) return;

        // Clear existing events except the dress code modal
        eventsContainer.find('.row').not(':last').remove();

        // Generate HTML for each event
        data.events.forEach((event, index) => {
            const isLeft = index % 2 === 0;
            const wpClass = isLeft ? 'wp4' : 'wp5';

            const eventHtml = `
                <div class="row">
                    ${isLeft ? `
                    <div class="col-md-6 col-sm-12 ${wpClass}">
                        <div class="event ${event.isMainEvent ? 'wedding' : ''}">
                            <h3>${event.name}</h3>
                            <p><strong>${event.date}</strong></p>
                            <p><strong>${event.time}</strong></p>
                            ${event.description ? `<p>${event.description}</p>` : ''}
                            ${data.dressCode.enabled ? '<a href="#" data-bs-toggle="modal" data-bs-target="#dc-modal">Dress code</a>' : ''}
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12"></div>
                    ` : `
                    <div class="col-md-6 col-sm-12"></div>
                    <div class="col-md-6 col-sm-12 ${wpClass}">
                        <div class="event ${event.isMainEvent ? 'wedding' : ''}">
                            <h3>${event.name}</h3>
                            <p><strong>${event.date}</strong></p>
                            <p><strong>${event.time}</strong></p>
                            ${event.description ? `<p>${event.description}</p>` : ''}
                            ${data.dressCode.enabled ? '<a href="#" data-bs-toggle="modal" data-bs-target="#dc-modal">Dress code</a>' : ''}
                        </div>
                    </div>
                    `}
                </div>
            `;

            eventsContainer.append(eventHtml);
        });

        // Populate dress code modal if enabled
        if (data.dressCode.enabled && data.dressCode.events.length > 0) {
            populateDressCode();
        }
    }

    /**
     * Populate dress code modal
     */
    function populateDressCode() {
        const modalBody = $('#dc-modal .modal-body .row');
        if (modalBody.length === 0) return;

        modalBody.empty();

        data.dressCode.events.forEach(event => {
            const dressCodeHtml = `
                <div class="col-md-6">
                    <h4>${event.name}</h4>
                    <p>${event.description}</p>
                </div>
            `;
            modalBody.append(dressCodeHtml);
        });
    }

    /**
     * Populate Instagram section
     */
    function populateInstagram() {
        if (!data.social.instagram.enabled) {
            $('#instagram').hide();
            return;
        }

        $('#instagram h3').html(`#${data.social.instagram.hashtag}`);
        $('#instagram a').attr('href', data.social.instagram.url);
        $('#instagram img').attr('src', data.images.instagramHashtag);
    }

    /**
     * Populate engagement photos gallery
     */
    function populateEngagementPhotos() {
        if (!data.images.engagement || data.images.engagement.length === 0) return;

        const gallery = $('#eng-pics .col-md-12');
        if (gallery.length === 0) return;

        // Clear existing photos
        gallery.find('a').remove();

        // Add new photos
        data.images.engagement.forEach(photo => {
            const photoHtml = `
                <a class="fancybox" rel="group" href="${photo.full}">
                    <img src="${photo.thumb}" alt="${data.couple.coupleNames}" loading="lazy">
                </a>
            `;
            gallery.append(photoHtml);
        });

        // Reinitialize fancybox
        $('.fancybox').fancybox({
            padding: 4,
            width: 1000,
            height: 800
        });
    }

    /**
     * Populate video section
     */
    function populateVideo() {
        if (!data.video.enabled) {
            $('#video-bg').hide();
            return;
        }

        $('#video-bg h4').text(data.video.location);
        const videoEmbed = $('#video-bg iframe');
        if (videoEmbed.length > 0) {
            const currentSrc = videoEmbed.attr('src');
            const newSrc = currentSrc.replace(/embed\/[^?]+/, 'embed/' + data.video.youtubeId);
            videoEmbed.attr('src', newSrc);
        }
    }

    /**
     * Populate venue/map section
     */
    function populateVenue() {
        $('#map h4 a').text(data.venue.name);
        $('#map .address p').html(`
            ${data.venue.address.street}<br>
            ${data.venue.address.city}, ${data.venue.address.state} ${data.venue.address.postalCode}
        `);

        // Update contact information
        if (data.venue.contact) {
            const phoneHtml = data.venue.contact.phones.map((phone, index) => {
                const label = index === 0 ? data.venue.contact.name : '';
                return `<a href="tel:${phone.replace(/\s/g, '')}">${label ? label + ': ' : ''}${phone}</a>`;
            }).join('<br>');

            $('#map .address').append(`<p>${phoneHtml}</p>`);
        }

        // Update Uber button with new coordinates
        updateUberLink();
    }

    /**
     * Update Uber deep link with venue coordinates
     */
    function updateUberLink() {
        const uberBtn = $('.uber-btn');
        if (uberBtn.length === 0) return;

        const dropoffName = encodeURIComponent(data.venue.name);
        const dropoffAddress = encodeURIComponent(
            `${data.venue.address.street}, ${data.venue.address.city}, ${data.venue.address.state}`
        );
        const dropoffLat = data.venue.coordinates.lat;
        const dropoffLng = data.venue.coordinates.lng;

        const uberUrl = `https://m.uber.com/ul/?client_id=${CONFIG.UBER_CLIENT_ID}&action=setPickup&dropoff[latitude]=${dropoffLat}&dropoff[longitude]=${dropoffLng}&dropoff[nickname]=${dropoffName}&dropoff[formatted_address]=${dropoffAddress}`;

        uberBtn.attr('href', uberUrl);
    }

    /**
     * Populate RSVP form
     */
    function populateRSVP() {
        if (!data.rsvp.enabled) {
            $('#rsvp').hide();
            return;
        }

        // Update RSVP deadline
        $('#rsvp p').first().html(
            `We would greatly appreciate if you could RSVP by ${data.rsvp.deadline}`
        );
    }

    /**
     * Populate footer
     */
    function populateFooter() {
        $('#footer-credit').html(data.footer.text);
    }

    /**
     * Update hero images
     */
    function updateImages() {
        // Update logo
        $('.logo img').attr('src', data.images.logo).attr('alt', data.couple.coupleNames + ' Wedding Logo');
        $('.hero-content img').attr('src', data.images.logo);

        // Update hero background
        $('.hero').css('background-image', `url(${data.images.hero})`);
    }

    // Execute all population functions
    try {
        populateInvitation();
        populateStory();
        populateEvents();
        populateInstagram();
        populateEngagementPhotos();
        populateVideo();
        populateVenue();
        populateRSVP();
        populateFooter();
        updateImages();

        console.log('Wedding content populated successfully!');
    } catch (error) {
        console.error('Error populating wedding content:', error);
    }
});
