/* Chapter 1 | Arrays and Strings
 * 1.3
 *
 * Remove Duplicates Within a String
 *
 * Video:
 *
 * Design an algorithm and write code to remove the duplicate characters in a string without using any
 * additional buffer NOTE: One or two additional variables are fine. An extra copy of the array is not.
 * FOLLOW UP
 *
 * Write the test cases for this method
 *
 * Test Cases:
 * 1.   String does not contain any duplicates, e.g.: abcd
 * 2.   String contains all duplicates, e.g.: aaaa
 * 3.   Null string
 * 4.   String with all continuous duplicates, e.g.: aaabbb
 */


/* -------------------------------------------------------------------------------------------------------------
 * Algorithm:  O(n)   The Better Way
 */
function removeDuplicatesOn(string) {
    if (string == null) {
        console.log(string);
        return;
    }
    
    // make an array of all false values for the amount of ascii chars and fill it
    var ascii = new Array(256).join(0).split('');
    
    for (var i = 0; i < string.length; i++) {
        var asciiIndex = string.charCodeAt(i);
        // if the ascii char hasn't been used
        if (parseInt(ascii[asciiIndex]) == 0) {
            // set it to true
            ascii[asciiIndex] = 1;
        } else {
            // keep from index 0 to position before i + number after i all the way to the end of the string
            string = string.substring(0, i) + string.substring(i+1);
            // decrement the counter because javascript indexes readjust unlike in java
            i--;
        }
    }
    console.log(string);
}

/* -------------------------------------------------------------------------------------------------------------
 * TESTING:  O(n)
 */
//console.log('\nTest Case 1: No Duplicates         (e.g. abcd)');
//var noDuplicates = 'abcd';
//removeDuplicatesOn(noDuplicates);
//
//console.log('\nTest Case 2: All Duplicates        (e.g. aaaa)');
//var allDuplicates = 'aaaa';
//removeDuplicatesOn(allDuplicates);
//
//console.log('\nTest Case 3: Null string           (e.g. null)');
//var nullString = null;
//removeDuplicatesOn(nullString);
//
//console.log('\nTest Case 4: Continuous Duplicates (e.g. aabb)');
//var continuousDuplicates = 'aabb';
//removeDuplicatesOn(continuousDuplicates);


/* -------------------------------------------------------------------------------------------------------------
 * Algorithm:  O(n^2)   aka The Obvious Solution
 */
function removeDuplicatesOn2(string) {
    if (string == null) {
        console.log(string);
        return;
    }

    string = string.split('');

    for (var i = 0; i < string.length; i++) {
        for (var j = i + 1; j < string.length; j++) {
            if (string[i] == string[j]) {
//                console.log('Duplicate Found: ' + string[j]);
                string.splice(j, 1);
                j--;
            }
        }
    }
    string = string.join();
    console.log(string);
}

/* -------------------------------------------------------------------------------------------------------------
 * TESTING:  O(n^2)
 */
//console.log('\nTest Case 1: No Duplicates         (e.g. abcd)');
//var noDuplicates = 'abcd';
//removeDuplicatesOn2(noDuplicates);
//
//console.log('\nTest Case 2: All Duplicates        (e.g. aaaa)');
//var allDuplicates = 'aaaa';
//removeDuplicatesOn2(allDuplicates);
//
//console.log('\nTest Case 3: Null string           (e.g. null)');
//var nullString = null;
//removeDuplicatesOn2(nullString);
//
//console.log('\nTest Case 4: Continuous Duplicates (e.g. aabb)');
//var continuousDuplicates = 'aabb';
//removeDuplicatesOn2(continuousDuplicates);