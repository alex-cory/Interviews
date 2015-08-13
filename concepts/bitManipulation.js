/*
 * Bit Manipulation
 *
 * VIDEOS:
 * - YouTube: Interview Questions Bit Manipulation: http://bit.ly/1NVSvFO
 * - http://bit.ly/1NVL3ug
 * - JS Bitwise AND operator associativity rule: http://bit.ly/1JainXB
 * - JS Bitwise OR operator: http://bit.ly/1NVQ8Tw
 * - YouTube Search: JavaScript Bitwise Operators: http://bit.ly/1NVS2U7
 *
 * NOTES:
 *      - Basic:
 *          - javascript = type free
 *          - numbers are always stored as 64-bit floating point values (i.e. double precision floating point)
 *      - Bitwise
 *          - Operators:
 *              - And           &
 *              - Or            |
 *              - Exclusive Or  ^
 *              - Not           ~     (highest priority)
 *          - Info
 *              - bitwise operators work with numeric data converted from:
 *
 *                  [ FLOATING POINT ] -> [ 32-BIT INTEGER ] -> [ FLOATING POINT ]
 *
 *      - Corresponding Logical Operators: only work with boolean, not bit patterns
 *          - &&
 *          - ||
 *          - !
 *
 *
 * RESOURCES:
 * - *** Bit Manipulation Snippets: http://stanford.io/1NVISH2                  <== THIS ONE IS REALLY GREAT
 * - JavaScript Bit Manipulation: http://bit.ly/1CycBu5
 * - JavaScript Bitwise Operators: http://mzl.la/1NVFnk1
 * - Explanation of JavaScript bit operators in this function: http://bit.ly/1NVFHz9
 * - How do you set, clear and toggle a single bit in JavaScript? http://bit.ly/1NVG0dk
 * - *** Getting Bitwise With JavaScript: http://bit.ly/1NVGfVC
 * - * Benchmarking JS Bit Manipulation: http://jsperf.com/binswapwars
 * - JavaScript: The less known parts: http://bit.ly/1NVVE8E
 */


/* -------------------------------------------------------------------------------------------------------------
 * EXAMPLE:
 */

/**
 * Get the binary for a number.
 * @param dec
 * @returns {string}
 */
function getBinary(dec) {
    dec = parseInt(dec);
    return dec.toString(2);
}

console.log(getBinary(2));

var a = 5; //101
var b = 7; //111

console.log('the decimal value or a is: ' + a);
console.log('the decimal value or b is: ' + b);

console.log('the binary value or a is: ' + getBinary(a));
console.log('the binary value or b is: ' + getBinary(b));

var c = ~a;

console.log('the decimal value or c is: ' + c);
console.log('the binary value or c is: ' + getBinary(c));
