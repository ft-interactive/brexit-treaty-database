// import $ from 'jquery';
// import Tablesort from 'tablesort';

// // Taken and rewritten from https://github.com/tristen/tablesort/blob/gh-pages/src/sorts/tablesort.number.js
// (function sortNumber() {
//   const cleanNumber = i => i.replace(/[^\-?0-9.]/g, '');

//   const compareNumber = (a, b) => {
//     const floatA = parseFloat(a);
//     const floatB = parseFloat(b);

//     return (isNaN(floatA) ? 0 : floatA) - (isNaN(floatB) ? 0 : floatB);
//   };

//   const suffixedCurrency = /^-?\d+\s*([,.]\d{0,2})?[£\x24Û¢´€]/; // Suffixed currency
//   const numberRegex = /^-?(\d)*-?([,.]){0,1}-?(\d)+([E,e][-+][\d]+)?%?$/; // General number
//   const prefixed = /^-?[£\x24Û¢´€]?\d+\s*([,.]\d{0,2})/; // Prefixed currency

//   Tablesort.extend(
//     'number',
//     item => prefixed.test(item) || suffixedCurrency.test(item) || numberRegex.test(item),
//     (a, b) => compareNumber(cleanNumber(b), cleanNumber(a)),
//   );
// }());

// $('.search').keyup(function searchKeyup() {
//   const el = this;
//   // Show only matching TR, hide rest of them
//   $.each($('.sortable tbody tr'), function handleSearch() {
//     if ($(this).text().toLowerCase().indexOf($(el).val().toLowerCase()) === -1) {
//       $(this).hide();
//     } else {
//       $(this).show();
//     }
//   });
// });

// Tablesort(document.querySelector('.sortable'), {
//   // descending: true,
// });


(function() {

  const oTable = require('o-table');
  oTable.init();
  oTable.wrap();

}());
console.log('O-Table loaded.')

/*
  TODO: delete this comment

  This file is where you bootstrap your JS code
  For example import stuff here:

  import {select} from 'd3-selection';
  import myComponent from './components/my-component';

  Split logical parts of you project into components e.g.

  /client
    - /components
        - /component-name
            - styles.scss
            - index.js
            - template.html

*/
