import Node from './Node/_Node'
import { isArray, isPlainObject, isUndefined } from 'lodash'
import { green } from 'chalk'

 /**
  * Queue class
  *
  * http://www.codeproject.com/Articles/669131/Data-Structures-with-JavaScript
  *
  * @example in ./examples/queue.js
  */
export default class Queue {
  constructor(data) {
    this._length = 0
    this._storage = []
    this._head = null
    this._tail = null

    if (data) this.add(data)
  }

  isQueue() {}
  // Conversion methods to change this Queue to a different data structure
  toStack() {}
  toGraph() {}
  toLinkedList() {}
  toDoublyLinkedList() {}
  toBinaryTree() {}
  toBinarySearchTree() {
    // http://bit.ly/1sdrog5
  }
  // recursive
  addRecursive(data) {}
  searchRecursive(term) {}
  containsRecursive(data) {}
  // other
  clear() {}
  containsAll(array) {}
  isEmpty() {}
  removeAll() {}


  /** Inserts the specified element into this queue */
  add(item) {
    if (isUndefined(item)) throw new Error(green('Did you provide any data, a node, or an array of nodes to add to the Queue? [from: add()]'))

    if (isArray(item)) {
      this.addAll(item)
    } else {
      this.addNode(item)
    }
  }


  addAll(items) {
    if (items.length == 0) throw new Error(green('Your array is empty! :( [from: addAll()]'))

    for (let i = 0; i < items.length; i++) {
      this.addNode(items[i])
    }
  }


  addNode(item) {
    if (isUndefined(item)) throw new Error(green('No data provided when adding a new node! [from: addNode())]'))
    let data = isPlainObject(item) ? item._data : item

    //create a new item object, place data in
    let node = new Node(data)

    if (!this.head) {
      this.head = node
    }

    // update the current tail with the new node
    this.tail = node
    // add the node to the end of the queue
    this.storage[this.length] = node
    this.length++

    return node
  }


  /** Retrieves and removes the head of this queue. */
  remove() {
    if (this.length == 0) {
      return
    } else if (this.length == 1) {
      this.head = null
      this.tail = null
    } else if (this.length == 2) {
      this.head = this.tail
    } else {
      this.head = this.storage[1]
    }
    this.length--
    return this.storage.shift()
  }


  /** Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty. */
  peek() {
    if (this.length == 0) return null

    return this.storage[0]
  }


  search(term) {
    if (isUndefined(term)) throw new Error(green('No search term was provided! [from: search()]'))
    term = isPlainObject(term) ? term._data : term

    let current

    for (var i = 0; i < this.length; i++) {
      current = this.storage[i]
      if (current.data == term) {
        return i
      }
    }
    return null
  }


  contains(term) {
    if (isUndefined(term)) throw new Error(green('No search term was provided! [from: contains()]'))
    term = isPlainObject(term) ? term._data : term

    let current

    for (var i = 0; i < this.length; i++) {
      current = this.storage[i]
      if (current.data == term) {
        return true
      }
    }
    return false
  }


  get head() { return this._head }
  set head(data) { this._head = data }
  get tail() { return this._tail }
  set tail(data) { this._tail = data }
  get storage() { return this._storage }
  set storage(data) { this._storage[this.length++] = data }
  get length() { return this._length }
  set length(newLength) { this._length = newLength }
}