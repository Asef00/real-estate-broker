/* eslint-env browser */
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    // Your custom JavaScript goes here
    // var dialogEl = document.getElementById('success-modal');
    // var dialog = new A11yDialog(dialogEl);

    const element = document.getElementById('your-dialog-id')

    const dialog = new A11yDialog(element)

    // var form = document.querySelector('.c-footer__form');
    // form.addEventListener('submit', function (event) {
    //   event.preventDefault();
    //   var FD = new FormData(form);
    //   var error = false;

    //   // Name Field
    //   if (!FD.get('name')) {
    //     error = true;
    //   }

    //   // Everything is fine
    //   if (!error) {
    //     // Show the dialog
    //     dialog.show();
    //   }
    // });
  });


})();


