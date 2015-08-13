/* 

Solution: http://www.careercup.com/question?id=14948781
Solution: http://www.geeksforgeeks.org/find-number-of-islands/

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

11110
11010
11000
00000

Answer: 1

Example 2:

11000
11000
00100
00011

Answer: 3
*/

var grid1A = '11000\n11000\n00100\n00011';
//var grid1B = {{11000},
//              {11000},
//              {00100},
//              {00011}};

function Island(islandParts) {
    this.position =
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

    var islandCount = 0;
    var rows = grid.split('\n');
    // foreach row in rows
    for (var y = 0; y < rows.length; y++) {
        // foreach node in row
        for (var x = 0; x < rows[y].length; x++) {
            // if node = 1
            if (rows[y][x] == 1) {

            }
            rows[i][j]
        };
    };

    console.log(rows);
    var islandPart = {
        xPos: null,
        yPos: null,
        hasIslandPartLeft: false,
        hasIslandPartRight: false,
        hasIslandPartTop: false,
        hasIslandPartBottom: false
    }
    var island = {
        islandParts: {},
    }

    //    checkIslandParts

    //        console.log(columns);
};

console.log(numIslands(grid1A));