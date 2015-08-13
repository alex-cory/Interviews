/**
 * Floyd–Warshall algorithm
 * https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm
 *
 * an algorithm for finding shortest paths in a weighted graph with positive or negative edge weights (but with no negative cycles)
 * - Video: http://bit.ly/1f4wPHn
 * - Stanford Coursera Video: http://bit.ly/1f4xtoj
 *
 * Implementations:
 * - JS Algorithms: http://bit.ly/1f4wNPM
 * - Java: http://bit.ly/1f4wV1z
 * - TurboJS: http://bit.ly/1f4x59n
 * - Pastebin: http://pastebin.com/4emAnLYv  (messy)
 * 
 */

/**
 * Implementation 1
 * Src: JS Algorithms: http://bit.ly/1f4wNPM
 */
var floydWarshall = (function () {
    /**
     * Matrix used for the algorithm.
     */
    var dist;
    /**
     * Initialize the distance matrix.
     *
     * @private
     * @param {Array} graph Distance matrix of the array.
     * @return {Array} Distance matrix used for the algorithm.
     */
    function init(graph) {
      var dist = [];
      var size = graph.length;
      for (var i = 0; i < size; i += 1) {
        dist[i] = [];
        for (var j = 0; j < size; j += 1) {
          if (i === j) {
            dist[i][j] = 0;
          } else if (!isFinite(graph[i][j])) {
            dist[i][j] = Infinity;
          } else {
            dist[i][j] = graph[i][j];
          }
        }
      }
      return dist;
    }
    /**
     * Floyd-Warshall algorithm. Finds the shortest path between
     * each two vertices.<br><br>
     * Complexity: O(|V|^3) where V is the number of vertices.
     *
     * @public
     * @module graphs/shortest-path/floyd-warshall
     * @param {Array} graph A distance matrix of the graph.
     * @return {Array} Array which contains the shortest
     *    distance between each two vertices.
     *
     * @example
     * var floydWarshall =
     * require('path-to-algorithms/src/graphs/shortest-path/floyd-warshall').floydWarshall;
     * var distMatrix =
     *    [[Infinity, 7,        9,       Infinity,  Infinity, 16],
     *     [7,        Infinity, 10,       15,       Infinity, Infinity],
     *     [9,        10,       Infinity, 11,       Infinity, 2],
     *     [Infinity, 15,       11,       Infinity, 6,        Infinity],
     *     [Infinity, Infinity, Infinity, 6,        Infinity, 9],
     *     [16,       Infinity, 2,        Infinity, 9,        Infinity]];
     *
     * // [ [ 0, 7, 9, 20, 20, 11 ],
     * //   [ 7, 0, 10, 15, 21, 12 ],
     * //   [ 9, 10, 0, 11, 11, 2 ],
     * //   [ 20, 15, 11, 0, 6, 13 ],
     * //   [ 20, 21, 11, 6, 0, 9 ],
     * //   [ 11, 12, 2, 13, 9, 0 ] ]
     * var shortestDists = floydWarshall(distMatrix);
     */
    return function (graph) {
      dist = init(graph);
      var size = graph.length;
      for (var k = 0; k < size; k += 1) {
        for (var i = 0; i < size; i += 1) {
          for (var j = 0; j < size; j += 1) {
            if (dist[i][j] > dist[i][k] + dist[k][j]) {
              dist[i][j] = dist[i][k] + dist[k][j];
            }
          }
        }
      }
      return dist;
    };
  }());

/**
 * Implementation 2
 * Src: http://bit.ly/1f4x59n
 */

function Floyd(roads) {
  var M = {};
  for (var i in roads) {
    M[i] = {};
    for (var j in roads) {
      M[i][j] = distance(i, j);
    }
  }
  for (var p in roads) {
    for (var q in roads) {
      for (var r in roads) {
        M[q][r] = Math.min(M[q][r], M[q][p] + M[p][r]);
      }
    }
  }
  return M;
}

var roads = {};
function makeRoad(from, to, length) {
  function addRoad(from, to) {
    if (!(from in roads))
      roads[from] = {};
    roads[from][to] = length;
  }
  addRoad(from, to);
  addRoad(to, from);
}

function makeRoads(start) {
  for (var i = 1; i < arguments.length; i += 2)
    makeRoad(start, arguments[i], arguments[i + 1]);
}

// Direct distance.
function distance(from, to) {
  if (from === to) {
    return 0;
  }
  if (roads[from][to] !== undefined) {
    return roads[from][to];
  } 
  return Number.POSITIVE_INFINITY;
}



makeRoads("A", "B", 2, "C", 3);
makeRoads("B", "C", 3, "D", 6);
makeRoads("C", "D", 3, "E", 5);
makeRoads("D", "E", 1, "F", 3);
makeRoads("E", "F", 1);



function init() {
  var s = 'A--2-B--6-D--3-F \n';
  s = s + ' \\   |   /|   / \n';
  s = s + '  3  3  3 1  1   \n';
  s = s + '   \\ | /  | /   \n';
  s = s + '     C--5-E      \n';
  print(s, "pre");
}

init();
var res = Floyd(roads);
printLn('Distance A --> F: ' + res.A.F);
printLn('Distance B --> E: ' + res.B.E);


/**
 * Implementation 3
 * Src: Stack Exchange: http://bit.ly/1f4xlVM
 */
for (int k = 0; k < n; k++)
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            if (ds[i][k] != inf && ds[k][j] != inf) {
                final int d = ds[i][k] + ds[k][j];
                if (d < ds[i][j]) {
                    ds[i][j] = d;
                    ns[i][j] = k;
                }
            }
