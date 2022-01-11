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

      // Name Field
      if (!FD.get('name') || !FD.get('email')) {
        error = true;
      }

      // Everything is fine
      if (!error) {
        // Show the dialog
        dialog.show();
      }
    });

  });
})();


