/**
 *
 * Implementations:
 * - Data Structures JS: http://bit.ly/1DIN6NN 
 */
/**
 * Breadth First Search Implementation
 * Time Complexity: O(|V|^2)
 *
 * @param   {Array}  graph      Adjacency matrix, which represents the graph.
 * @param   {Number} startNode  Node we begin with.
 * @param   {Number} searchNode Node in which we are searching for.
 * @returns {Array}             Shortest path from startNode to searchNode.
 */
export default class depthFirstSearch  {
  constructor(graph, startNode, targetNode) {
    this.parents = [];
    this.queue   = [];
    this.visited = [];
    this.current;
  }

  queue.push(startNode);
  parents[startNode] = null;
  visited[startNode] = true;

  while (queue.length) {

    current = queue.shift();

    if (current === targetNode) {
      return buildPath(parents, targetNode);
    }

    for (var i = 0; i < graph.length; i += 1) {

      if (i !== current && graph[current][i] && !visited[i]) {
        parents[i] = current;
        visited[i] = true;
        queue.push(i);
      }
    }
  }
  return null;
};

// Example:
let graph = [[1, 1, 0, 0, 1, 0],
             [1, 0, 1, 0, 1, 0],
             [0, 1, 0, 1, 0, 0],
             [0, 0, 1, 0, 1, 1],
             [1, 1, 0, 1, 0, 0],
             [0, 0, 0, 1, 0, 0]];
console.log(brea);
