import Node from './node';

/**
 * Stack Class Implementation in JavaScript ES6
 *
 * Resources:
 * - 
 *
 * Implementations:
 * - BucketJS: http://bit.ly/1DIRZGG
 *
 * @example
 * let stack = new Stack(1);
 * stack.push(2);
 * stack.push(3);
 * stack.push(4);
 * stack.push(5);
 * stack.pop();
 * stack.push(6);
 * console.log(stack.count);      // 5
 * console.log(stack.peek());     // 6
 * console.log(stack.isEmpty());  // false
 * stack.showAll();               // [6, 4, 3, 2, 1]
 *
 * @param {Number} top The current top node of the Stack;
 */
export default class Stack {
  constructor(top) {
    this._top = new Node(top) || null;
    this._count = top ? 1 : 0;
  }


  /**
   * Updates the count of Nodes in the current Stack.
   * @param {Number} num The updated count.
   */
  set count(num) {
    this._count = num;
  }


  /**
   * Provides the count of Nodes in the Stack currently.
   * @return {Number}
   */
  get count() {
    return this._count;
  }


  /**
   * Allows us to change the value of the top
   * Node indirectly.
   * @param {Node} newTop The new node value.
   */
  set top(newTop) {
    this._top = newTop;
  }


  /**
   * Gets the value of the top Node.
   * @return {Node}
   */
  get top() {
    return this._top;
  }


  /**
   * Adds node to top of Stack.
   * @param {(String|Number)} data The fresh data to identify the current node.
   */
  push(data) {
    let node = new Node(data);

    // Set the previous top to be beneith this node.
    node.next = this.top;
    this.top = node;

    this.count++;
  }


  /**
   * Gets the item at the top of the Stack.
   * @return {(String|Number)} The data of the top node.
   */
  peek() {
    if (this.top === null) {
      return null;
    } else {
      return this.top.data;
    }
  }


  /**
   * Removes an item from the Stack.
   * @return {(String|Number)} The data of the node being removed.
   */
  pop() {
    if (this.top === null) return null;

    let out = this.top;
    this.top = this.top.next;

    if(this.count > 0) {
      this.count--;
    }

    return out.data;
  }


  /**
   * Tells us if the Stack is empty.
   * @return {boolean}
   */
  isEmpty() {
    return 0 == this.count;
  }


  /**
   * Spits out all the items in the current Stack.
   * @return {Array} All items in the current Stack.
   */
  showAll(){
    if (this.top === null) {
      return null;

    } else {
      let items = []; //new Array();
      let current = this.top;

      for (let i = 0; i < this.count; i++) {
        items[i] = current.data;
        current = current.next;
      }

      console.log(items);
    }
  }
}
