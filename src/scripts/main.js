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
      arrowShape: "M 23.231 74.272 L 0.731 51.772 C -0.245 50.796 -0.245 49.214 0.731 48.237 L 23.231 25.737 C 24.212 24.761 25.794 24.761 26.771 25.737 C 27.747 26.714 27.747 28.37 26.771 29.347 L 8.536 47.655 L 97.501 47.655 C 98.884 47.655 100.001 48.62 100.001 49.999 C 100.001 51.378 98.884 52.343 97.501 52.343 L 8.536 52.343 L 26.771 70.655 C 27.259 71.144 27.501 71.823 27.501 72.464 C 27.501 73.104 27.259 73.765 26.771 74.253 C 25.794 75.229 24.212 75.249 23.231 74.272 Z M 23.231 74.272",
      wrapAround: true,
      autoPlay: true
    }

    new Flickity('.c-cta__carousel', flickOptions);
    new Flickity('.c-listing__carousel', {
      watchCSS: true,
      prevNextButtons: false
    });
  });
})();