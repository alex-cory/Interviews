/**
 * Queue Class Implementation in JavaScript ES6
 * 
 * Implementations:
 * - http://bit.ly/1DILtzO
 * - BucketJS: http://bit.ly/1guIYq7
 */
class Queue {
  constructor(contents = []) {
    this._queue = [...contents];
  }
  pop() {
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
  }
  /**
   * Adds node to top of Queue.
   * @param {(String|Number)} data The fresh data to identify the current node.
   */
  enqueue(data) {
    let node = new Node(data);

    // Set the previous top to be beneith this node.
    node.next = this.top;
    this.top = node;

    this.count++;
  } 
  var a = [],
    b = 0;
  this.getLength = function() {
    return a.length - b
  };
  this.isEmpty = function() {
    return 0 == a.length
  };
  this.enqueue = function(b) {
    a.push(b)
  };
  this.dequeue = function() {
    if (0 != a.length) {
      var c = a[b];
      2 * ++b >= a.length && (a = a.slice(b), b = 0);
      return c
    }
  };
  this.peek = function() {
    return 0 < a.length ? a[b] : void 0
  }
}
