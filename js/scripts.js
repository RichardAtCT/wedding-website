$(document).ready(function () {
  /***************** Intersection Observer for Animations ******************/
  // Modern replacement for Waypoints using native IntersectionObserver API

  // Animation configuration: [selector, animationClass]
  const animations = [
    ['.wp1', 'animated fadeInLeft'],
    ['.wp2', 'animated fadeInRight'],
    ['.wp3', 'animated fadeInLeft'],
    ['.wp4', 'animated fadeInRight'],
    ['.wp5', 'animated fadeInLeft'],
    ['.wp6', 'animated fadeInRight'],
    ['.wp7', 'animated fadeInUp'],
    ['.wp8', 'animated fadeInLeft'],
    ['.wp9', 'animated fadeInRight'],
  ];

  // Create IntersectionObserver with 25% threshold (equivalent to 75% offset in Waypoints)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationClasses = entry.target.dataset.animation;
          entry.target.classList.add(...animationClasses.split(' '));
          observer.unobserve(entry.target); // Trigger once
        }
      });
    },
    {
      threshold: 0,
      rootMargin: '-25% 0px', // Equivalent to 75% offset
    }
  );

  // Observe all elements
  animations.forEach(([selector, animationClass]) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      element.dataset.animation = animationClass;
      observer.observe(element);
    });
  });

  /***************** Initiate Flexslider ******************/
  $('.flexslider').flexslider({
    animation: 'slide',
  });

  /***************** Initiate Fancybox ******************/

  $('.single_image').fancybox({
    padding: 4,
  });

  $('.fancybox').fancybox({
    padding: 4,
    width: 1000,
    height: 800,
  });

  /***************** Tooltips ******************/
  $('[data-toggle="tooltip"]').tooltip();

  /***************** Nav Transformicon ******************/

  /* When user clicks the Icon */
  $('.nav-toggle').click(function () {
    $(this).toggleClass('active');
    $('.header-nav').toggleClass('open');
    event.preventDefault();
  });
  /* When user clicks a link */
  $('.header-nav li a').click(function () {
    $('.nav-toggle').toggleClass('active');
    $('.header-nav').toggleClass('open');
  });

  /***************** Header BG Scroll ******************/

  $(function () {
    $(window).scroll(function () {
      const scroll = $(window).scrollTop();

      if (scroll >= 20) {
        $('section.navigation').addClass('fixed');
        $('header').css({
          'border-bottom': 'none',
          padding: '35px 0',
        });
        $('header .member-actions').css({
          top: '26px',
        });
        $('header .navicon').css({
          top: '34px',
        });
      } else {
        $('section.navigation').removeClass('fixed');
        $('header').css({
          'border-bottom': 'solid 1px rgba(255, 255, 255, 0.2)',
          padding: '50px 0',
        });
        $('header .member-actions').css({
          top: '41px',
        });
        $('header .navicon').css({
          top: '48px',
        });
      }
    });
  });
  /***************** Smooth Scrolling ******************/

  $(function () {
    $('a[href*=#]:not([href=#])').click(function () {
      if (
        location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
        location.hostname === this.hostname
      ) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate(
            {
              scrollTop: target.offset().top - 90,
            },
            2000
          );
          return false;
        }
      }
    });
  });

  /********************** Social Share buttons ***********************/
  const share_bar = document.getElementsByClassName('share-bar');
  const po = document.createElement('script');
  po.type = 'text/javascript';
  po.async = true;
  po.src = 'https://apis.google.com/js/platform.js';
  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(po, s);

  for (let i = 0; i < share_bar.length; i++) {
    const html =
      '<iframe allowtransparency="true" frameborder="0" scrolling="no"' +
      'src="https://platform.twitter.com/widgets/tweet_button.html?url=' +
      encodeURIComponent(window.location) +
      '&amp;text=' +
      encodeURIComponent(document.title) +
      '&amp;via=ramswarooppatra&amp;hashtags=ramandantara&amp;count=horizontal"' +
      'style="width:105px; height:21px;">' +
      '</iframe>' +
      '<iframe src="//www.facebook.com/plugins/like.php?href=' +
      encodeURIComponent(window.location) +
      '&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21&amp;appId=101094500229731&amp;width=150" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:150px; height:21px;" allowTransparency="true"></iframe>' +
      '<div class="g-plusone" data-size="medium"></div>';

    // '<iframe src="https://plusone.google.com/_/+1/fastbutton?bsv&amp;size=medium&amp;url=' + encodeURIComponent(window.location) + '" allowtransparency="true" frameborder="0" scrolling="no" title="+1" style="width:105px; height:21px;"></iframe>';

    share_bar[i].innerHTML = html;
    share_bar[i].style.display = 'inline-block';
  }

  /********************** Lazy Load YouTube Video *********************/
  // Use IntersectionObserver to load YouTube video only when it comes into view
  const videoSection = document.getElementById('video-bg');
  if (videoSection) {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load and initialize YouTube player when section is visible
            $('.player').YTPlayer();
            videoObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '200px', // Start loading 200px before it comes into view
      }
    );

    videoObserver.observe(videoSection);
  }

  /********************** Toggle Map Content **********************/
  $('#btn-show-map').click(function () {
    $('#map-content').toggleClass('toggle-map-content');
    $('#btn-show-content').toggleClass('toggle-map-content');
  });
  $('#btn-show-content').click(function () {
    $('#map-content').toggleClass('toggle-map-content');
    $('#btn-show-content').toggleClass('toggle-map-content');
  });

  /********************** Add to Calendar **********************/
  // Use wedding data if available, otherwise fall back to defaults
  const calendarData =
    typeof WEDDING_DATA !== 'undefined'
      ? WEDDING_DATA.calendar
      : {
          title: 'Our Wedding',
          startDate: '20171127T100000',
          endDate: '20171129T000000',
          location: 'Wedding Venue',
          description: 'Join us for our wedding celebration!',
        };

  const venueData =
    typeof WEDDING_DATA !== 'undefined'
      ? WEDDING_DATA.venue
      : {
          name: 'Wedding Venue',
          contact: { name: 'Contact', phones: ['+1 234-567-8900'] },
        };

  // Convert calendar date format (YYYYMMDDTHHMMSS) to Date object
  function parseCalendarDate(dateStr) {
    if (!dateStr) return new Date();
    const year = parseInt(dateStr.substring(0, 4));
    const month = parseInt(dateStr.substring(4, 6)) - 1; // JS months are 0-indexed
    const day = parseInt(dateStr.substring(6, 8));
    const hour = parseInt(dateStr.substring(9, 11)) || 0;
    const minute = parseInt(dateStr.substring(11, 13)) || 0;
    return new Date(year, month, day, hour, minute);
  }

  const myCalendar = createCalendar({
    options: {
      class: '',
      id: '',
    },
    data: {
      title: calendarData.title,
      start: parseCalendarDate(calendarData.startDate),
      end: parseCalendarDate(calendarData.endDate),
      address: calendarData.location,
      description:
        calendarData.description ||
        "We can't wait to see you on our big day. For any queries or issues, please contact " +
          venueData.contact.name +
          ' at ' +
          venueData.contact.phones[0] +
          '.',
    },
  });

  $('#add-to-cal').html(myCalendar);

  /********************** RSVP **********************/
  $('#rsvp-form').on('submit', function (e) {
    e.preventDefault();
    const data = $(this).serialize();

    $('#alert-wrapper').html(
      alert_markup('info', '<strong>Just a sec!</strong> We are saving your details.')
    );

    // Get RSVP configuration from wedding data
    const rsvpConfig =
      typeof WEDDING_DATA !== 'undefined'
        ? WEDDING_DATA.rsvp
        : {
            inviteCodeHashes: [
              'b0e53b10c1f55ede516b240036b88f40',
              '2ac7f43695eb0479d5846bb38eec59cc',
            ],
            formActionUrl:
              'https://script.google.com/macros/s/AKfycbyo0rEknln8LedEP3bkONsfOh776IR5lFidLhJFQ6jdvRiH4dKvHZmtoIybvnxpxYr2cA/exec',
          };

    // Validate invite code against all configured hashes
    const inviteCodeHash = MD5($('#invite_code').val());
    const isValidCode = rsvpConfig.inviteCodeHashes.some(function (hash) {
      return inviteCodeHash === hash;
    });

    if (!isValidCode) {
      $('#alert-wrapper').html(
        alert_markup('danger', '<strong>Sorry!</strong> Your invite code is incorrect.')
      );
    } else {
      $.post(rsvpConfig.formActionUrl, data)
        .done(function (data) {
          console.log(data);
          if (data.result === 'error') {
            $('#alert-wrapper').html(alert_markup('danger', data.message));
          } else {
            $('#alert-wrapper').html('');
            $('#rsvp-modal').modal('show');
          }
        })
        .fail(function (data) {
          console.log(data);
          $('#alert-wrapper').html(
            alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server. ')
          );
        });
    }
  });
});

/********************** Extras **********************/

/* exported initMap, initBBSRMap */
// These functions are called by Google Maps API callback

// Google map
function initMap() {
  // Get venue coordinates from wedding data
  const venueData = typeof WEDDING_DATA !== 'undefined' ? WEDDING_DATA.venue : null;
  const location = venueData
    ? { lat: venueData.coordinates.lat, lng: venueData.coordinates.lng }
    : { lat: 22.5932759, lng: 88.27027720000001 };

  const map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 15,
    center: location,
    scrollwheel: false,
  });

  // Add marker to map
  new google.maps.Marker({
    position: location,
    map: map,
  });
}

function initBBSRMap() {
  const la_fiesta = { lat: 20.305826, lng: 85.85480189999998 };
  const map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 15,
    center: la_fiesta,
    scrollwheel: false,
  });

  // Add marker to map
  new google.maps.Marker({
    position: la_fiesta,
    map: map,
  });
}

// alert_markup
function alert_markup(alert_type, msg) {
  return (
    '<div class="alert alert-' +
    alert_type +
    '" role="alert">' +
    msg +
    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>'
  );
}

// MD5 Encoding
const MD5 = function (string) {
  function RotateLeft(lValue, iShiftBits) {
    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
  }

  function AddUnsigned(lX, lY) {
    const lX8 = lX & 0x80000000;
    const lY8 = lY & 0x80000000;
    const lX4 = lX & 0x40000000;
    const lY4 = lY & 0x40000000;
    const lResult = (lX & 0x3fffffff) + (lY & 0x3fffffff);
    if (lX4 & lY4) {
      return lResult ^ 0x80000000 ^ lX8 ^ lY8;
    }
    if (lX4 | lY4) {
      if (lResult & 0x40000000) {
        return lResult ^ 0xc0000000 ^ lX8 ^ lY8;
      } else {
        return lResult ^ 0x40000000 ^ lX8 ^ lY8;
      }
    } else {
      return lResult ^ lX8 ^ lY8;
    }
  }

  function F(x, y, z) {
    return (x & y) | (~x & z);
  }

  function G(x, y, z) {
    return (x & z) | (y & ~z);
  }

  function H(x, y, z) {
    return x ^ y ^ z;
  }

  function I(x, y, z) {
    return y ^ (x | ~z);
  }

  function FF(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  function GG(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  function HH(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  function II(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  function ConvertToWordArray(string) {
    let lWordCount;
    const lMessageLength = string.length;
    const lNumberOfWords_temp1 = lMessageLength + 8;
    const lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
    const lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    const lWordArray = Array(lNumberOfWords - 1);
    let lBytePosition = 0;
    let lByteCount = 0;
    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - (lByteCount % 4)) / 4;
      lBytePosition = (lByteCount % 4) * 8;
      lWordArray[lWordCount] =
        lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition);
      lByteCount++;
    }
    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
    lBytePosition = (lByteCount % 4) * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  }

  function WordToHex(lValue) {
    let WordToHexValue = '',
      WordToHexValue_temp = '',
      lByte,
      lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = (lValue >>> (lCount * 8)) & 255;
      WordToHexValue_temp = '0' + lByte.toString(16);
      WordToHexValue =
        WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
    }
    return WordToHexValue;
  }

  function Utf8Encode(string) {
    string = string.replace(/\r\n/g, '\n');
    let utftext = '';

    for (let n = 0; n < string.length; n++) {
      const c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }

    return utftext;
  }

  let x = Array();
  let k, AA, BB, CC, DD, a, b, c, d;
  const S11 = 7,
    S12 = 12,
    S13 = 17,
    S14 = 22;
  const S21 = 5,
    S22 = 9,
    S23 = 14,
    S24 = 20;
  const S31 = 4,
    S32 = 11,
    S33 = 16,
    S34 = 23;
  const S41 = 6,
    S42 = 10,
    S43 = 15,
    S44 = 21;

  string = Utf8Encode(string);

  x = ConvertToWordArray(string);

  a = 0x67452301;
  b = 0xefcdab89;
  c = 0x98badcfe;
  d = 0x10325476;

  for (k = 0; k < x.length; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = FF(a, b, c, d, x[k + 0], S11, 0xd76aa478);
    d = FF(d, a, b, c, x[k + 1], S12, 0xe8c7b756);
    c = FF(c, d, a, b, x[k + 2], S13, 0x242070db);
    b = FF(b, c, d, a, x[k + 3], S14, 0xc1bdceee);
    a = FF(a, b, c, d, x[k + 4], S11, 0xf57c0faf);
    d = FF(d, a, b, c, x[k + 5], S12, 0x4787c62a);
    c = FF(c, d, a, b, x[k + 6], S13, 0xa8304613);
    b = FF(b, c, d, a, x[k + 7], S14, 0xfd469501);
    a = FF(a, b, c, d, x[k + 8], S11, 0x698098d8);
    d = FF(d, a, b, c, x[k + 9], S12, 0x8b44f7af);
    c = FF(c, d, a, b, x[k + 10], S13, 0xffff5bb1);
    b = FF(b, c, d, a, x[k + 11], S14, 0x895cd7be);
    a = FF(a, b, c, d, x[k + 12], S11, 0x6b901122);
    d = FF(d, a, b, c, x[k + 13], S12, 0xfd987193);
    c = FF(c, d, a, b, x[k + 14], S13, 0xa679438e);
    b = FF(b, c, d, a, x[k + 15], S14, 0x49b40821);
    a = GG(a, b, c, d, x[k + 1], S21, 0xf61e2562);
    d = GG(d, a, b, c, x[k + 6], S22, 0xc040b340);
    c = GG(c, d, a, b, x[k + 11], S23, 0x265e5a51);
    b = GG(b, c, d, a, x[k + 0], S24, 0xe9b6c7aa);
    a = GG(a, b, c, d, x[k + 5], S21, 0xd62f105d);
    d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
    c = GG(c, d, a, b, x[k + 15], S23, 0xd8a1e681);
    b = GG(b, c, d, a, x[k + 4], S24, 0xe7d3fbc8);
    a = GG(a, b, c, d, x[k + 9], S21, 0x21e1cde6);
    d = GG(d, a, b, c, x[k + 14], S22, 0xc33707d6);
    c = GG(c, d, a, b, x[k + 3], S23, 0xf4d50d87);
    b = GG(b, c, d, a, x[k + 8], S24, 0x455a14ed);
    a = GG(a, b, c, d, x[k + 13], S21, 0xa9e3e905);
    d = GG(d, a, b, c, x[k + 2], S22, 0xfcefa3f8);
    c = GG(c, d, a, b, x[k + 7], S23, 0x676f02d9);
    b = GG(b, c, d, a, x[k + 12], S24, 0x8d2a4c8a);
    a = HH(a, b, c, d, x[k + 5], S31, 0xfffa3942);
    d = HH(d, a, b, c, x[k + 8], S32, 0x8771f681);
    c = HH(c, d, a, b, x[k + 11], S33, 0x6d9d6122);
    b = HH(b, c, d, a, x[k + 14], S34, 0xfde5380c);
    a = HH(a, b, c, d, x[k + 1], S31, 0xa4beea44);
    d = HH(d, a, b, c, x[k + 4], S32, 0x4bdecfa9);
    c = HH(c, d, a, b, x[k + 7], S33, 0xf6bb4b60);
    b = HH(b, c, d, a, x[k + 10], S34, 0xbebfbc70);
    a = HH(a, b, c, d, x[k + 13], S31, 0x289b7ec6);
    d = HH(d, a, b, c, x[k + 0], S32, 0xeaa127fa);
    c = HH(c, d, a, b, x[k + 3], S33, 0xd4ef3085);
    b = HH(b, c, d, a, x[k + 6], S34, 0x4881d05);
    a = HH(a, b, c, d, x[k + 9], S31, 0xd9d4d039);
    d = HH(d, a, b, c, x[k + 12], S32, 0xe6db99e5);
    c = HH(c, d, a, b, x[k + 15], S33, 0x1fa27cf8);
    b = HH(b, c, d, a, x[k + 2], S34, 0xc4ac5665);
    a = II(a, b, c, d, x[k + 0], S41, 0xf4292244);
    d = II(d, a, b, c, x[k + 7], S42, 0x432aff97);
    c = II(c, d, a, b, x[k + 14], S43, 0xab9423a7);
    b = II(b, c, d, a, x[k + 5], S44, 0xfc93a039);
    a = II(a, b, c, d, x[k + 12], S41, 0x655b59c3);
    d = II(d, a, b, c, x[k + 3], S42, 0x8f0ccc92);
    c = II(c, d, a, b, x[k + 10], S43, 0xffeff47d);
    b = II(b, c, d, a, x[k + 1], S44, 0x85845dd1);
    a = II(a, b, c, d, x[k + 8], S41, 0x6fa87e4f);
    d = II(d, a, b, c, x[k + 15], S42, 0xfe2ce6e0);
    c = II(c, d, a, b, x[k + 6], S43, 0xa3014314);
    b = II(b, c, d, a, x[k + 13], S44, 0x4e0811a1);
    a = II(a, b, c, d, x[k + 4], S41, 0xf7537e82);
    d = II(d, a, b, c, x[k + 11], S42, 0xbd3af235);
    c = II(c, d, a, b, x[k + 2], S43, 0x2ad7d2bb);
    b = II(b, c, d, a, x[k + 9], S44, 0xeb86d391);
    a = AddUnsigned(a, AA);
    b = AddUnsigned(b, BB);
    c = AddUnsigned(c, CC);
    d = AddUnsigned(d, DD);
  }

  const temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);

  return temp.toLowerCase();
};
