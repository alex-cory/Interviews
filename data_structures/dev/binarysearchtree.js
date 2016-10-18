import Node from '../Node/BinaryTreeNode';

/**
 * Implementations:
 * - JS Algorithms: http://bit.ly/1DIHFyg
 * - Data Structures JS: http://bit.ly/1DIMho9
 * - BucketJS: http://bit.ly/1DIS5y0
 * - Tree Traversal Functions: http://bit.ly/1DISWPh
 * - StackOverflow: http://bit.ly/1DIT80V
 * - Syncano: http://bit.ly/1DIThBF
 * - JS: Binary Search Tree: http://bit.ly/1DITjt5
 * - CS in JS: http://bit.ly/1guKLeN
 * - CS in JS GITHUB: http://bit.ly/1guKR6d
 *https://gist.github.com/trevmex/821973
 *http://khan4019.github.io/front-end-Interview-Questions/bst.html
 * Implementation of a binary search tree class in javascript.
 */
export class BinarySearchTree {
  constructor(tree) {
    this._root = null
    this._size = 0
    // this._root = this.isBinarySearchTree(tree) ? new Node(tree) : null;
    // this._currentNode = tree[0];

    if (data) console.log('USING CONSTRUCTOR');
    // if (data) this.add(data)
  }

  // Conversion methods to change this Binary Search Tree to a different data structure
  toArray() {}
  toQueue() {}
  toStack() {}
  toGraph() {}
  toLinkedList() {}
  toDoublyLinkedList() {}
  // recursive
  searchRecursive(term) {}
  // other
  remove(data) {}
  removeAll(items) {}
  removeNode(item) {}
  contains(data) {}
  containsAll(items) {}
  containsNode(item) {}
  /** NO WORKING */
  isBinarySearchTree(tree) {

    // when at root
    if (tree === null) return true;

    return less(tree.data, tree.left) && more(tree.data, tree.right);

    function less(data, node) {
      if (node === null) return true;

      return (data > node.data) && less(node.data, node.left) && more(node.data, node.right);
    };

    function more(data, node) {
      if (node === null) return true;

      return (data < node.data) && less(node.data, node.left) && more(node.data, node.right);
    }
  }


  insert(data, current = this.root) {
    if (this.root === null) {
      this.root = new Node(data);
      return;
    }
    var insertKey;
    if (current.data > data) {
      current.left = new Node(data)
    } else {
      insertKey = '_right';
    }
    if (!current[insertKey]) {
      current[insertKey] = new Node(data, null, null, current);
    } else {
      this.insert(data, current[insertKey]);
    }
  }




  get root() { return this._root }
  set root(node) { this._root = node }
  get size() { return this._size }
  set size(len) { this._size = len }
}

let a = new BinarySearchTree( // Object No Parent
  data.treeObjNP
);

console.log(a.isIt());
// console.log(a.isBinarySearchTree());






/**
 * TODO:
 * - accept multiple arguments
 * - rewrite isBinarySearchTree
 *   Resources:
 *    - Stanford: (http://stanford.io/1DITSDm, search: isbst)
 *    - JS DS: (http://bit.ly/1MoRLYq)
 */
