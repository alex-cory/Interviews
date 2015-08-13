/* Chapter 1 | Arrays and Strings
 * 1.7
 *
 * Set Row & Column All to Zero
 *
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column is set to 0.
 *
 */


/* -------------------------------------------------------------------------------------------------------------
 * Algorithm:  Set Row & Column All to Zero
 */
function rowColZero(matrix) {

    var row = [];
    var column = [];

    for (var i = 0; i < matrix.length; i++) { // rows
        
        // find out which columns and rows have zeros in them
        for (var j = 0; j < matrix[0].length; j++) { // units per row
            if (matrix[i][j] == 0) {
                row[i] = 1;
                column[j] = 1;
            }
        }
    }
    // change each row and column to be filled with 0's
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            if (row[i] == 1 || column[j] == 1) {
                matrix[i][j] = 0
            }
        }
    }
    console.log(matrix);
}


/* -------------------------------------------------------------------------------------------------------------
 * TESTING:  Set Row & Column All to Zero
 */

var matrix1 = [['A', 'B', 'C', 'D'],
              ['E', '0', 'G', 'H'],
              ['I', 'J', 'K', 'L'],
              ['M', 'N', '0', 'P'],
              ['Q', 'R', 'S', 'T']];
rowColZero(matrix1);