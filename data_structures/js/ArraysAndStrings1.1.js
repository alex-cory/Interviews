/* Chapter 1 | Arrays and Strings
 * 1.1
 * 
 * Has Unique Chars Algorithm
 * 
 * Implement an algorithm to determine if a string has all unique characters What if you can not use 
 * additional data structures? (video: http://bit.ly/1aSqHAE)
 *
 * ERROR FIX!!!!!
 */


var basicString = 'colio';
var uniqueString = 'abcdefgh';

function hasUniqueChars (string) {
    var i = 0;
    while (string[i] != null) {
        if (string[i] == string[i+1]) {
            console.log('is not unique!');
            return false;
        } 
        i++
    }
    console.log('is unique!');
    return true;
}

hasUniqueChars(basicString);

