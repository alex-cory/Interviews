 // used for the examples at the bottom
import * as data from '../_data';

/**
 * Node Class Implementation in JavaScript ES6
 *
 * Implementations:
 * - Tree Node http://bit.ly/1DILtzO
 * - Interval Tree: http://bit.ly/1guGZ4V
 * - Splay Tree: http://bit.ly/1guHjka
 * - AVL Tree: http://bit.ly/1DIRhJE
 * - Linked List Node: http://bit.ly/1guHvA7
 *
 * @example
 * let parent = {_data: '15'}
 * let c = new Node(5, parent);
 * console.log(c.parent); // returns {_data: '15'}
 * ALSO!
 * let n = new Node(5, 4, 6);
 * console.log(n.data);  // returns 5
 * console.log(n.left);  // returns 4
 * console.log(n.right); // returns 6
 * n.left = 2;
 * n.right = 7;
 * console.log(n.left);  // returns 2
 * console.log(n.right); // returns 7
 *
 * @param {Number|String} data   The number representing the current node.
 * @param {Node}          parent Represents parent Node or previous Node.
 * @param {Node}          left   The left child node.
 * @param {Node}          right  The right child node.
 */
export default class Node {

  constructor(data) {

    this._data = data
    // this._data = this.setInitial('data', arguments);
    // this._left = this.setInitial('left', arguments);
    // this._right = this.setInitial('right', arguments);
    // this._next =  null;
    // this._prev = arguments.length == 3 ? null : parent;
    // this._parent =  this.setInitial('parent', arguments);

  }

  /**
   * Provides a reference to the current Node's parent Node.
   * @return {Node} The parent of the current Node.
   */
  get parent() {
    return this._parent;
  }


  /**
   * Adds the current Node's parent.
   * @param {Node} parentNode The parent of the current Node.
   */
  set parent(parentNode) {
    this._parent = parentNode;
  }


  /**
   * Provides the current Node's left child Node.
   * @return {Node} Left Child Node.
   */
  get left() {
    return this._left;
  }


  /**
   * Adds the current Node's left child Node.
   * @param {Node} node New left child Node.
   */
  set left(node) {
    this._left = node;
  }


  /**
   * Provides the current Node's right child Node.
   * @return {Node} Right child Node.
   */
  get right() {
    return this._right;
  }


  /**
   * Adds the current Node's right child Node.
   * @param {Node} node New right child Node.
   */
  set right(node) {
    this._right = node;
  }


  /**
   * Changes the status of the current Node to be marked.
   */
  mark() {
    this._marked = true;
  }


  /**
   * Changes the status of the current Node to not be marked.
   */
  unmark() {
    this._marked = false;
  }


  /**
   * Tells us if the current Node is marked or not.
   * @return {boolean} If the current Node is marked.
   */
  get mark() {
    return this._marked;
  }


  /**
   * Provides us the data about the current Node.
   * @return {(String|Number)} Data about the current Node.
   */
  get data() {
    return this._data;
  }


  /**
   * Adds the information to the current Node.
   * @param {(String|Number)} currNodeData Data about the current Node.
   */
  set data(data) {
    this._data = data;
  }


  /**
   * Tells if the current node is the bottom
   * node in the Stack.
   * @return {boolean}
   */
  hasNext() {
    return typeof this.next !== 'undefined';
  }


  /**
   * Allows us to access the current Node's next
   * property.
   * @return {Node} The next node.
   */
  get next() {
    return this._next;
  }


  /**
   * Allows us to change the next node.
   * @param {Node} node The next node.
   */
  set next(node) {
    this._next = node;
  }

  get level () {
    return this._level
  }
  
  set level (level) {
    this._level = level
  }

  get position () {
    return this._position
  }

  set position (position) {
    this._position = position
  }

  // TODO
  // has no left or right child
  isLeaf () {
  }

  /**
   * Prints out information about the current Node.
   */
  toString() {
    console.log('Current Node: ', this._data);
    if (this._next) {
      console.log('Next Node: ', this._next);
    } else if (this._left || this._right) {
      console.log("Current Node's Left Child: ", this._left);
      console.log("Current Node's Right Child: ", this._right);
    }
  }


  /**
   * Checks for data to be the propper format and sets the intial values of the Node.
   * @param  {Array}  args           Arguments of the constructor.
   * @param  {String} type           The number defining this as the current node.
   * @return {(Number|Array|Object)} The number after passing validation.
   */
  setInitial(type, args) {
    if (args.length === 1 && (typeof args[0] == 'number' || typeof args[0] == 'string') && type != 'data') return null;

    let i = type == 'data' ? 0 :
            type == 'left' ? 1 :
            type == 'right' ? 2 :
            3;
    let j = args.length === 1 ? 0
          : args.length === 3
            && (type === 'right' || type === 'left')
            && args[i] instanceof Array ? i
          : Object.prototype.toString.call(args[i]).slice(8, -1) === 'Object' ? i
          : args.length === 4
            && type === 'parent' ? 3
          : 0;

           // if is string or number: new Node(4)
    return typeof args[j] == 'number'
           || typeof args[j] == 'string' ? args[j]
           // if is object: new Node({'data': 10, 'left': {'data': 8}, 'right': {'data': 12}})
         : Object.prototype.toString.call(args[j]).slice(8, -1) === 'Object'
           && type === 'data'
           && typeof args[j].data != 'undefined' ? args[j].data
         : Object.prototype.toString.call(args[j]).slice(8, -1) === 'Object'
           && type === 'left'
           && typeof args[j].left != 'undefined' ? args[j].left
         : Object.prototype.toString.call(args[j]).slice(8, -1) === 'Object'
           && type === 'right'
           && typeof args[j].right != 'undefined' ? args[j].right
         : Object.prototype.toString.call(args[j]).slice(8, -1) === 'Object'
           && type === 'parent'
           && typeof args[j].parent != 'undefined' ? args[j].parent
         : args[j] instanceof Array
           && type === 'parent'
           && typeof args[j][i] == 'undefined' ? null
         : args[j] instanceof Array ? args[j][i]
         : null;
  }
}

/**
 * (a) new Node(7)
 * Binary Tree
 * (b) new Node([10,[9],[11],[12])
 * (c) new Node([10,[9],[11]])
 * (d) new Node({data: 10, left: {}, right: {}});
 * (e) new Node({data: 10, left: {}, right: {}, parent: {}});
 * (f) new Node(10, {}, {})
 * Linked List
 * (x) new Node(10, {}) //obj is previous node
 * (x) new Node(10)
 * (x) new Node(10, 9, 11)
 */
/**
 * TESTS:
 */
// let a = new Node(7); // Single Number: Pass
// let b = new Node(  // Array With Parent
//   data.treeArray   // Pass
// );
// let c = new Node(  // Array No Parent
//   data.treeArrayNP // Pass
// );
// let d = new Node(  // Object With Parent
//   data.treeObj     // Pass
// );
// let e = new Node(  // Object No Parent
//   data.treeObjNP   // Pass
// );
// let f = new Node( // String, Obj, Obj
//   9,              // Fail
//   {
//     'data': 8, 'left': {}, 'right': {}
//   },
//   {
//     'data': 10, 'left': {}, 'right': {}
//   },
//   {
//     'data': 12,
//     'left': {
//       'data': 9,
//       'left': {
//         'data': 8, 'left': {}, 'right': {}
//       },
//       'right': {
//         'data': 10, 'left': {}, 'right': {}
//       }
//     },
//     'right': {}
//   }
// );
// console.log('\nSingle Number:\n(a)', a);
// console.log('\nArray With Parent:\n(b)', b);
// console.log('\nArray No Parent:\n(c)', c);
// console.log('\nObject With Parent:\n(d)', d);
// console.log('\nObject No Parent:\n(e)', e);

/* TODO:
 * - when an object == {} set to null
 * - when an array == [] set to null
 */
