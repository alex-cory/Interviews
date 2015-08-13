/* Chapter 1 | Arrays and Strings
 * 1.8
 *
 * Is Substring
 * 
 * Help: http://mzl.la/1aW9CWK
 *
 * Assume you have a method isSubstring which checks if one word is a substring of another.
 * Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only
 * one call to isSubstring (i.e. , “waterbottle” is a rotation of “erbottlewat”)
 *
 */


/* -------------------------------------------------------------------------------------------------------------
 * Algorithm:  Is Substring
 */
function isSubstring(sub, string) {
    // if haystack contains needle return true
    console.log(string.indexOf(sub) !== -1);
    return string.indexOf(sub) !== -1;
}



/* -------------------------------------------------------------------------------------------------------------
 * TESTING:  Is Substring
 */

var needle = 'erbottle';
var haystack = 'waterbottle';
isSubstring(needle, haystack);
