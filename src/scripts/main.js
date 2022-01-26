/* eslint-env browser */
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    // Your custom JavaScript goes here


    // init modal
    var success_modal = document.getElementById('success-modal')
    if (success_modal) {
      var dialog = new A11yDialog(success_modal);
      dialog.on('show', function (element, event) {
        document.documentElement.classList.add('is-modal-opend');
      })

      dialog.on('hide', function (element, event) {
        document.documentElement.classList.remove('is-modal-opend');
      })
    }


    // Event handling
    var form = document.querySelector('.js-form');
    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();

        var FD = new FormData(form);
        const name = FD.get('name').trim();
        const email = FD.get('email').trim();
        let validName = false;
        let validEmail = false;

        const isValidEmail = email => {
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(email).toLowerCase());
        }

        const setError = (element, message) => {
          // console.log(element,message);
          const inputControl = element.parentElement;
          const errorDisplay = inputControl.querySelector('.js-error');

          errorDisplay.innerText = message;
          inputControl.classList.add('is-invalid');
        }

        const setSuccess = element => {
          const inputControl = element.parentElement;
          const errorDisplay = inputControl.querySelector('.js-error');

          errorDisplay.innerText = '';
          inputControl.classList.remove('is-invalid');
        };

        if (name === '') {
          validName = false;
          setError(form.name, 'Please enter your name');
        } else {
          validName = true;
          setSuccess(form.name);
        }

        if (email === '') {
          validEmail = false;
          setError(form.email, 'Please enter email address');
        } else if (!isValidEmail(email)) {
          validEmail = false;
          setError(form.email, 'Provide a valid email address');
        } else {
          validEmail = true;
          setSuccess(form.email);
        }

        // Everything is fine
        if (validEmail && validName) {
          // Show the dialog
          dialog.show();
        }
      });
    }




    // Scroll behaviour
    new SmoothScroll('a[href*="#"]', {
      speed: 300
    });




    // Flickity init
    var listing_carousel = document.querySelector('.js-listing-carousel');
    if (listing_carousel) {
      new Flickity(listing_carousel, {
        watchCSS: true,
        prevNextButtons: false
      });
    }

    var story_carousel = document.querySelector('.js-story-carousel');
    if (story_carousel) {
      new Flickity(story_carousel, {
        prevNextButtons: false,
        wrapAround: true,
        watchCSS: true,
        // groupCells: true,
        pageDots: false,
        // setGallerySize: false,
        // autoPlay: true
      });
    }

    var cta_carousel = document.querySelector('.js-cta-carousel');
    if (cta_carousel) {
      new Flickity(cta_carousel, {
        arrowShape: "M 23.231 74.272 L 0.731 51.772 C -0.245 50.796 -0.245 49.214 0.731 48.237 L 23.231 25.737 C 24.212 24.761 25.794 24.761 26.771 25.737 C 27.747 26.714 27.747 28.37 26.771 29.347 L 8.536 47.655 L 97.501 47.655 C 98.884 47.655 100.001 48.62 100.001 49.999 C 100.001 51.378 98.884 52.343 97.501 52.343 L 8.536 52.343 L 26.771 70.655 C 27.259 71.144 27.501 71.823 27.501 72.464 C 27.501 73.104 27.259 73.765 26.771 74.253 C 25.794 75.229 24.212 75.249 23.231 74.272 Z M 23.231 74.272",
        wrapAround: true,
        // cellAlign: 'left',
        // contain: true,
        imagesLoaded: true,
        // groupCells: true,
        // prevNextButtons: false,
        // autoPlay: true
      });
    }
  });
})();