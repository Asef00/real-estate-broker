/* eslint-env browser */
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    // Your custom JavaScript goes here

    var dialog = new A11yDialog(document.getElementById('success-modal'));

    var form = document.querySelector('.c-footer__form');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var FD = new FormData(form);
      var error = false;

      const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

      // Name Field
      if (!FD.get('name') || !FD.get('email') || !validateEmail) {
        error = true;
      }

      // Everything is fine
      if (!error) {
        // Show the dialog
        dialog.show();
      }
    });

    var flickOptions = {
      wrapAround: true,
      autoPlay: true
    }

    new Flickity('.c-cta__carousel', flickOptions);

    if (matchMedia('screen and (max-width: 576px)').matches) {
      var carousel = document.querySelector('.c-listings .c-listings__carousel');
      carousel.classList.remove('row');
      new Flickity(carousel, {
        prevNextButtons: false
      });
    }
  });
})();


