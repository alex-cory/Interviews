/**
 * Uses Luhn algorithm to validate a numeric identifier.
 * @param  {String} identifier The identifier to validate.
 * @return {Boolean}           True if the identifier is valid, false if not.
 */
function isValidIdentifier (identifier) {

  var sum     = 0,
      alt     = false,
      i       = identifier.length - 1,
      num;

  while (i >= 0) {

    // Get the next digit.
    num = parseInt(identifier.charAt(i), 10);

    // If it's not a valid number, abort.
    if (isNaN(num)) {
      return false;
    }

    // If it's an alternate number.
    if (alt) {
      num *= 2;
      if (num > 9){
        num = (num % 10) + 1;
      }
    } 

    // Flip the alternate bit.
    alt = !alt;

    // Add to the rest of the sum.
    sum += num;

    // Go to next digit.
    i--;
  }

  // Determine if it's valid.
  return (sum % 10 == 0);
}
