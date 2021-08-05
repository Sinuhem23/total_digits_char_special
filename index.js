// Take the street address as an input from the user.
// Count the total numbers of character, total number of digits and total number of special characters in this string.
var prompt = require('prompt-sync')();
var str = prompt('Enter your street address: ');

totalCharacters = 0;
totalDigits = 0;
totalSpecial = 0;
for (let i = 0; i < str.length; i++) {
  var st = str[i];
  //  Entire alphabet
  if (
    // Lowercase alphabet
    (st.charCodeAt() >= 97 && st.charCodeAt() <= 122) ||
    // Uppercase alphabet
    (st.charCodeAt() >= 65 && st.charCodeAt() <= 90)
  ) {
    // To handle upper case letters
    // st = st.toLowerCase();
    totalCharacters++;
  } else if (st.charCodeAt() >= 48 && st.charCodeAt() <= 57) totalDigits++;
  else totalSpecial++;
}
console.log(
  'Total numer of characters: ' +
    totalCharacters +
    ' Total number of digits: ' +
    totalDigits +
    ' Total number of special characters: ' +
    totalSpecial
);
