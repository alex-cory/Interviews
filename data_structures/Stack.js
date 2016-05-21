import Node from './Node/_Node'
import { isArray, isPlainObject, isUndefined } from 'lodash'
import { green } from 'chalk'

 /**
  * Stack class
  *
  * @example in ./examples/stack.js
  */
export default class Stack {
  constructor(data) {
    this._length = 0
    this._storage = []

    if (data) this.push(data)
  }

  isStack() {}
  // Conversion methods to change this Stack to a different data structure
  toQueue() {}
  toGraph() {}
  toLinkedList() {}
  toDoublyLinkedList() {}
  toBinaryTree() {}
  toBinarySearchTree() {}

  /** Tests if this stack is empty. TODO */
  empty() {
    return this.length === 0
  }


  /** Looks at the object at the top of this stack without removing it from the stack. */
  peek() {
    return this.storage[this.length - 1]
  }


  /** Removes the object at the top of this stack and returns that object as the value of this function. */
  pop() {
    let deleted = this.storage[this.length - 1]

    this.storage.splice(this.length - 1, 1)
    this.length--;

    return deleted;
  }

  /** Returns the 1-based position where an object is on this stack. */
  search(term) {
    if (isUndefined(term)) throw new Error(green('No search term was provided! [from inside search()]'))
    let current
    if (isPlainObject(term)) {
      let node = term
      for (let i = 0; i < this.length; i++) {
        current = this.storage[i]
        if (node.data == current.data) {
          return i
        }
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        current = this.storage[i]
        if (term == current.data) {
          return i
        }
      }
    }
  }


  /** Pushes an item or list of items onto the top of this stack. */
  push(data) {
    if (isUndefined(data)) throw new Error(green('No data provided when adding a new node! [from inside push()]'))
    if (isArray(data)) {
      this.pushAll(data)
    } else {
      this.pushNode(data)
    }
  }


  pushAll(items) {
    if (items.length == 0) throw new Error(green('Your array is empty! :( [from: addAll()]'))

    for (let i = 0; i < items.length; i++) {
      this.addNode(items[i])
    }
  }


  /** Pushes an item onto the top of this stack. */
  pushNode(data) {
    if (isUndefined(data)) throw new Error(green('No data provided when adding a new node! [from inside addNode())]'))

    // increases the size of our storage
    var length = this.length++;

    // assigns length as a key of storage
    // assigns node as the value of this key
    this.storage[length] = new Node(data)
  }

  get head() { return this._head }
  set head(data) { this._head = data }
  get storage() { return this._storage }
  set storage(data) { this._storage[this.length++] = data }
  get length() { return this._length }
  set length(newLength) { this._length = newLength }
}