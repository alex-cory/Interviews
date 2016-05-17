/* Chapter 1 | Arrays and Strings
 * 1.5
 *
 * String Replace
 *
 * Write a method to replace all spaces in a string with ‘%20’
 *
 */


/* -------------------------------------------------------------------------------------------------------------
 * Algorithm:  O(n)   The Better Way
 */
function stringReplace(string, whatToReplace, replacement) {
    if (!string || !replacement) { console.log('Missing an Argument.'); return; }
    
    for (var i=0; i<string.length; i++) {
        if (string[i] == whatToReplace) {
            string = string.substr(0, i) + replacement + string.substr(i+1);
        }
    }
    console.log(string);
    return string;
}

/* -------------------------------------------------------------------------------------------------------------
 * TESTING:  O(n)
 */

var needsReplacement = 'I really  like it when my spaces get filled with percent twenty\'s';
stringReplace(needsReplacement, ' ', '%20');