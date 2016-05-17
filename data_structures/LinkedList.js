import Node from './Node/LinkedListNode'
import { cloneDeep, isArray, isPlainObject, isUndefined } from 'lodash'
import { green } from 'chalk'

 /**
  * Linked list class
  *
  * @example in ./examples/linked-list.js
  */
export default class LinkedList {
  constructor(data) {
    this._length = 0
    this._head = null

    if (data) this.add(data)
  }

  isLinkedList() {}
  // Conversion methods to change this Queue to a different data structure
  toArray() {}
  toStack() {}
  toGraph() {}
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
  contains() {}
  containsAll(array) {}
  isEmpty() {}
  removeAll() {}

  /**
   * Return first node from the linked list and removes it from the list.
   * @return {Node} First node.
   */
  shift() {
    if (!this.head) return null

    // save the old head
    let oldHead = this.head

    // set the new head to be the next node in the list
    this.head = oldHead.next

    // decrement the length
    this.length--

    // return the old head node
    return oldHead
  }

  /**
   * Add data to the beginning of linked list.
   * @param {Object} data Data which should be added.
   */
  addFirst(data) {
    // create a new node
    let node = new Node(data)

    // save the old head/first node to a temp variable
    let oldHead = this.head

    // set the new head to our new node
    this.head = node

    // set our new head's next node to the old head node
    this.head.next = oldHead

    // increment length
    this.length++
  }

  /**
   * Check if linked list contains cycle.
   * Don't know what this is? See here: http://bit.ly/1QUpa9U
   * @return {Boolean} Returns true if linked list contains cycle.
   */
  hasCycle() {
    let fast = this.head
    let slow = this.head
    while (true) {
      if (fast === null) return false

      fast = fast.next
      if (fast === null) return false

      fast = fast.next
      slow = slow.next
      if (fast === slow) {
        return true
      }
    }
  }

  removeByPosition(position) {
    //check for out-of-bounds values
    if (position > -1 && position < this.length){

      let current = this.head
      let previous

      //special case: removing head item
      if (position === 0){
          this.head = current.next;
      } else {

        //find the right location
        for (var i = 0; i < position; i++) {
          prev     = current
          current  = current.next
        }

        //skip over the item to remove
        previous.next = current.next;
        this.length--
      }

      //return the value
      return current.data;
    }
    return null;
  }

  /**
   * Remove a node from the linked list using the data to find it
   * @param  {Object}  data Data which should be removed.
   * @return {Boolean}      Returns true if data has been removed.
   */
  removeByData(data) {
    if (!this.head) return false

    let current = this.head
    let previous

    if (this.head.data == data) {
      this.head = current.next
    } else {

      for (var i = 0; i < this.length - 1; i++) {
        previous = current
        current  = current.next

        if (current.data == data) {
          previous.next = current.next
          this.length--
          return current.data
        }
      }
    }
    return false
  }

  searchByData(data) {
    let current = this.head

    for (var i = 0; i < this.length; i++) {
      if (current.data == data) {
        return current
      }
      current = current.next
    }
    throw new Error(green('Failure: non-existent node in this list. [from: searchByData()]'))
  }

  searchByPosition(position) {
    //check for out-of-bounds values
    if (position > -1 && position < this.length){
      let current = this.head

      for (var i = 0; i < position; i++) {
        current = current.next
      }

      return current
    }
    throw new Error(green('Failure: non-existent node in this list. [from: searchByPosition()]'))
  }

  add(item) {
    if (isUndefined(item)) throw new Error(green('No item provided when adding a new node! [from: add()]'))
    if (isArray(item)) {
      this.addAll(item)
    } else {
      this.addNode(item)
    }
  }

  addAll(items) {
    if (items.length == 0) throw new Error(green('No items provided when adding a new node! [from: addAll()]'))

    for (let i = 0; i < items.length; i++) {
      this.addNode(items[i])
    }
  }

  addNode(item) {
    if (isUndefined(item)) throw new Error(green('No data provided when adding a new node! [from: addNode())]'))
    let data = isPlainObject(item) ? item.data : item

    // create a new node
    let node = new Node(data)

    // used to traverse the structure
    let current

    // case: no items in the list yet
    if (this.head == null){
      this.head = node;
    } else {
      current = this.head;

      while(current.next){
        current = current.next;
      }

      current.next = node;
    }
    this.length++
  }


  get head() { return this._head }
  set head(data) { this._head = data }
  get length() { return this._length }
  set length(newLength) { this._length = newLength }
}