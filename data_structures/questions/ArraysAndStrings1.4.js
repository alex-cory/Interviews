/* Chapter 1 | Arrays and Strings
 * 1.4
 *
 * Two Strings Anagrams
 * 
 * Ex: taco, cat  = false
 * Ex: taco, ocat = true
 *
 * Write a method to decide if two strings are anagrams or not.
 *
 */


/* -------------------------------------------------------------------------------------------------------------
 * Algorithm:  O(n)
 */
function areAnagrams(str1, str2) {
    if (!str1 || !str2) {
        console.log('Missing an argument.');
        return;
    }
    
    var i = 0;
    for (var i=0; i<str1.length; i++) {
        if (str1[i] != str2[str2.length - i - 1]) {
            console.log(false);
            return false;
        }
    }
    console.log(true);
    return true;
}

/* -------------------------------------------------------------------------------------------------------------
 * TESTING:  O(n)
 */
console.log('\nTest Case 1: True         (e.g. taco, ocat)');
var taco = 'taco';
var ocat = 'ocat';
areAnagrams(taco, ocat);

console.log('\nTest Case 2: False         (e.g. taco, ocar)');
var taco = 'taco';
var ocar = 'ocar';
areAnagrams(taco, ocar);
