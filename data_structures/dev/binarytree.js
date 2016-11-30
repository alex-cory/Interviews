import Node from './node';
import { cloneDeep, isArray, isPlainObject, isUndefined, isInteger, isNull } from 'lodash'
import { green, blue } from 'chalk'

/**
 * Binary Tree Class Implementation in JavaScript ES6
 *
 * Definition: Binary tree = a tree where each node has at most 2 children nodes

 * Resources:
 * -
 *
 * Implementations:
 * - Data Structures JS: http://bit.ly/1DIMho9
 * - Tree Traversal Functions: http://bit.ly/1DISWPh
 * - StackOverflow: http://bit.ly/1DIT80V
 * - Stanford Binary Trees: http://stanford.io/1DITSDm
 * @param {(Array|Object)}
 */
export default class BinaryTree {
  constructor (data) {
    this._root = null
    this._size = 0

    if (data) this.add(data)
  }

  isRegularBinaryTree (tree) {
    // TODO: complete
    return true;
  }

  add (data, position = this.size) {
    if (isUndefined(data)) throw new Error(green('No data provided when adding a new node! [from: add()]'))

    if (isArray(data)) {
      this.addAll(data)
    } else {
      this.addNode(data, position)
    }
  }

  addNode (data) {
    let node = data instanceof Node ? data : new Node(data)
    this.size++

    if (isNull(this.root)) {
      return this.root = node
    }

    let currentNode = this.root
    let parentNode = null

    while (currentNode) {
      parentNode = currentNode

      if (currentNode.data < node.data) {
        currentNode = currentNode.left

        if (isNull(currentNode)) {
          return parentNode.left = node
        }
      } else {
        currentNode = currentNode.right

        if (isNull(currentNode)) {
          return parentNode.right = node
        }
      }
    }
  }

  addAll (itmes) {
    if (items.length == 0) throw new Error(green('No data provided when adding a new node! [from: addAll()]'))

    for (let i = 0; i < items.length; i++) {
      this.addNode(items[i])
    }
  }

  // TODO
  isRoot () {
    return isNull(this.root.parent) || isUndefined(this.root.parent)
  }

  isBinaryTree () {
    // has either 2, 1, or no children
  }

  remove (node) {
  }

  contains (node) {
  }

  balance () {
  }

  min () {
  }

  max () {
  }

  previous () {
  }

  next () {
  }

  /**
   * Traverse
   * examples: https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/trees.html
   */
  traverse (type) {
    switch (type) {
      case 'pre-order':
        // do something
        break
      case 'in-order':
        // do something
        break
      case 'post-order':
        // do something
        break
      case 'level-order':
        // do something
        break
      default:
        // do something
        break
    }
  }

  getTree () {
    console.log(this._tree);
    // return this._tree;
  }

  getCurrentNode () {
    console.log(this._tree);
  }

  isEmpty () {
  }

  toArray () {
  }

  toString () {
  }

  get size () { return this._size }
  set size (size) { this._size = size }
  get root () { return this._root }
  set root (node) { this._root = node }
}
