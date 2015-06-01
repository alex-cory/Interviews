/* Chapter 1 | Arrays and Strings
 * 1.6
 *
 * Rotate Matrix 90 Degrees
 *
 * Explanation: http://bit.ly/1NsSQiY
 * Sample Solution 1: https://ideone.com/hQ2BVg
 * Sample Solution 2: http://bit.ly/1z8iFcd
 * Sample Solution 3: http://bit.ly/1GYpe7y
 * Video: http://bit.ly/1z7P031
 * Video: http://bit.ly/1cmXyxZ   <= Person Who Wrote: Cracking The Coding Interview
 * 
 *
 * QUESTION:
 * Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to
 * rotate the image by 90 degrees. Can you do this in place?
 * 
 * ANSWER:
 * Can you do this in place?
 * - Basically what this means is, is this matrix a square.  Well, it's NxN so it can be done in place.  For
 *   example, see below.
 *
 * Can Be done In Place    Can't Be done In Place
 *       A B C D              A B C D    I E A
 *       E F G H              E F G H -> J F B  (goes from 3x4 -> 4x3)
 *       I J K L              I J K L    K G C
 *       M N O P                         L H D
 */

/* -------------------------------------------------------------------------------------------------------------
 * ALGORITHM:  Rotate Matrix 90 Degrees            CLOCKWISE
 * 
 * Big-O Complexity:
 * O(1)              <= is this correct? I thought it was 0(n^2)
 * 
 * int   n      = width of matrix
 * array matrix = multi-dimensional array (aka image)
 */
function rotateClockwise(matrix, n) {
    if (!matrix || !n) { console.log('Missing an Argument.'); return; }

    // for each layer of the matrix                                       /* First Loop */
    for (var layer = 0; layer < n / 2; layer++) {                         // layer = 0; layer < 2; layer++
        // set indices for outer the various layers
        var first = layer;                                                // first = 0
        var last = n - 1 - layer;                                         // last  = 3
                                                                          // n     = 4
        // for each of the chars in the first layer
        for (var i = first; i < last; i++) {
            var offset = i - first;                                       // offset = 0
            // save the top left corner -> temp
            var top = matrix[first][first + offset];                      // top = matrix[0][0 + 0] = A
            // bottom left -> top left;
            matrix[first][i] = matrix[last - offset][first];              // matrix[0][0] = matrix[3][0]
            // bottom right -> bottom left;
            matrix[last - offset][first] = matrix[last][last - offset];   // matrix[3][0] = matrix[3][3]
            // top right -> bottom right;
            matrix[last][last - offset] = matrix[i][last];                // matrix[3][3] = matrix[0][3]
            // top left -> top right;
            matrix[i][last] = top;                                        // matrix[3][0] = top
        }
    }
    console.log(matrix);
    return;
}

/* -------------------------------------------------------------------------------------------------------------
 * TESTING: Rotate Matrix 90 Degrees           CLOCKWISE
 */

var matrix = [['A', 'B', 'C', 'D'],
             ['E', 'F', 'G', 'H'],
             ['I', 'J', 'K', 'L'],
             ['M', 'N', 'O', 'P']];
console.log(matrix);
console.log('Matrix After:');
rotateClockwise(matrix, 4);


/* -------------------------------------------------------------------------------------------------------------
 * NOTES:  Rotate Matrix 90 Degrees            CLOCKWISE
 *
 *    Original Matrix  
 *   A    B    C    D  
 * (0,0)(0,1)(0,2)(0,3)
 *   E    F    G    H  
 * (1,0)(1,1)(1,2)(1,3)
 *   I    J    K    L  
 * (2,0)(2,1)(2,2)(2,3)
 *   M    N    O    P  
 * (3,0)(3,1)(3,2)(3,3)                                             
 *     
 * Matrix Before
 * [ [ 'A', 'B', 'C', 'D' ],
 *   [ 'E', 'F', 'G', 'H' ],
 *   [ 'I', 'J', 'K', 'L' ],
 *   [ 'M', 'N', 'O', 'P' ] ]
 *                                             /*
 * Matrix After: 1st Layer, 1st Charactor Swap  * Found by placing this if statement at this place in function 
 * [ [ 'M', 'B', 'C', 'A' ],                    * for (var i = first; i < last; i++) {
 *   [ 'E', 'F', 'G', 'H' ],                    *    if (i>0) {            
 *   [ 'I', 'J', 'K', 'L' ],                    *        console.log(matrix);
 *   [ 'P', 'N', 'O', 'D' ] ]                   *        return;
 *                                              *    }
 * Matrix After: 1st Layer, 2nd Charactor Swap  *
 * [ [ 'M', 'I', 'C', 'A' ],                    * for (var i = first; i < last; i++) {
 *   [ 'E', 'F', 'G', 'B' ],                    *    if (i>1) {              
 *   [ 'O', 'J', 'K', 'L' ],                    *        console.log(matrix);  
 *   [ 'P', 'N', 'H', 'D' ] ]                   *        return;
 *                                              *    } 
 * Matrix After: 1st Layer, 3rd Charactor Swap  * 
 * [ [ 'M', 'I', 'E', 'A' ],                    * for (var i = first; i < last; i++) {
 *   [ 'N', 'J', 'F', 'B' ],                    *     if (i>2) {            
 *   [ 'O', 'K', 'G', 'C' ],                    *         console.log(matrix);
 *   [ 'P', 'L', 'H', 'D' ] ]                   *         return;
 *                                              *     }
 * Matrix After: 2nd Layer, 1st Charactor Swap
 * [ [ 'M', 'I', 'E', 'A' ],
 *   [ 'N', 'J', 'F', 'B' ],
 *   [ 'O', 'K', 'G', 'C' ],
 *   [ 'P', 'L', 'H', 'D' ] ]
 *
 */


/* -------------------------------------------------------------------------------------------------------------
 * ALGORITHM:  Rotate Matrix 90 Degrees    COUNTER CLOCKWISE
 * 
 * int   n      = width of matrix
 * array matrix = multi-dimensional array (aka image)
 */
function rotateCounterCockwise(matrix, n) {
    if (!matrix || !n) {
        console.log('Missing an Argument.');
        return;
    }
                                                                          /* First Loop */
    for (var layer = 0; layer < n / 2; layer++) {                         // layer = 0; layer < 2; layer++
        var first = layer;                                                // first = 0
        var last = n - 1 - layer;                                         // last  = 3
                                                                          // n     = 4
        for (var i = first; i < last; i++) {                              // i = 0;  i < 3;   i++

            var offset = i - first;                                       // offset = 0
            // save the top element -> temp;
            var top = matrix[first][first + offset];                      // top = matrix[0][0 + 0] = A
            // bottom left -> top left;
            matrix[first][first + offset] = matrix[last][first + offset]; // matrix[0][0] = matrix[3][0]
            // bottom right -> bottom left;
            matrix[last][first + offset] = matrix[last][last - offset];   // matrix[3][0] = matrix[3][3]
            // top right -> bottom right;
            matrix[last][last - offset] = matrix[first][last - offset];   // matrix[3][3] = matrix[0][3]
            // top left -> top right;
            matrix[last - offset][first] = top;                           // matrix[3][0] = top
            if (i==2) {            
                console.log(matrix);
                return;
            }
        }
    }
    console.log(matrix);
}

/* -------------------------------------------------------------------------------------------------------------
 * TESTING:  O(n^2) Counter Clockwise
 */

//var matrix = [['A', 'B', 'C', 'D'],
//             ['E', 'F', 'G', 'H'],
//             ['I', 'J', 'K', 'L'],
//             ['M', 'N', 'O', 'P']];
//rotateCounterClockwise(matrix, 4);