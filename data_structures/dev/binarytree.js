import Node from './node';

/**
 * Binary Tree Class Implementation in JavaScript ES6
 * 
 * Resources: 
 * - 
 *
 * Implementations:
 * - Data Structures JS: http://bit.ly/1DIMho9
 * - Tree Traversal Functions: http://bit.ly/1DISWPh
 * - StackOverflow: http://bit.ly/1DIT80V
 * - Syncano: http://bit.ly/1DIThBF
 * - Stanford Binary Trees: http://stanford.io/1DITSDm
 * @param {(Array|Object)}
 */
export default class BinaryTree {
  constructor(root) {
    this._root = this.setInitial(root);
  }

  setInitial(root) {
    return new Node(root);
  }

  isRegularBinaryTree(tree) {
    // TODO: complete
    return true;
  }

  insert(node) {
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

  getTree() {
    console.log(this._tree);
    // return this._tree;
  }

  getCurrentNode() {
    console.log(this._tree);
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





