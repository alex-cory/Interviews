/* Chapter 1 | Arrays and Strings
 * 1.2
 * 
 * Reverse Algorithm
 * 
 * Video: http://bit.ly/1GA43dC
 * 
 * Write code to reverse a C-Style String (C-String means that “abcd” is represented as five characters, 
 * including the null character )
 */

var cstring = 'abcdefgh';

/* C-Style: more difficult way */
function reverseString (string) {
    var start = 0;
    var end = chars.length;
    
    while (start < end) {
        var temp = chars[start];
        chars[start] = chars[end];
        chars[end] = temp;
        start++;
        end--;
    }
    console.log(chars);
    //    return chars;
}

reverseString(cstring);






/* easy way */
function reverseString2 (string) {
    console.log(chars.reverse());
    //    return chars.reverse();
}

//reverseString2(cstring);