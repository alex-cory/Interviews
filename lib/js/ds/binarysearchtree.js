import Node from './node';
import * as data from './_data';

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
    this._root = this.isBinarySearchTree(tree) ? new Node(tree) : null;
    // this._currentNode = tree[0];
  }


  isBinarySearchTree(tree) {
    tree = tree || this.node;

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


  insert(data, current) {
    if (this.root === null) {
      this.root = new Node(data, null, null, null);
      return;
    }
    var insertKey;
    current = current || this.root;
    if (current.data > data) {
      insertKey = '_left';
    } else {
      insertKey = '_right';
    }
    if (!current[insertKey]) {
      current[insertKey] = new Node(data, null, null, current);
    } else {
      this.insert(data, current[insertKey]);
    }
  }

  get root() {
    return this._root;
  }

  set root(node) {
    this._root = node;
  }

  contains(node) {
  }

  remove(node) {
  }

  min() {
  }

  max() {
  }

  previous() {
  }

  next() {
  }

  traverse() {
  }

  get node() {
    // console.log(this._tree);
    return this._tree;
  }

  isEmpty() {
  }

  size() {
  }

  toArray() {
  }

  toString() {
  }
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
