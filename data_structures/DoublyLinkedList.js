import Node from './Node/DoublyLinkedListNode'
import { cloneDeep, isArray, isPlainObject, isUndefined } from 'lodash'
import { green } from 'chalk'


 /**
  * Doubly Linked list class
  *
  * @example in ./examples/doubly-linked-list.js
  */
export default class DoublyLinkedList {
  constructor(data) {
    this._length = 0
    this._head = null
    this._tail = null

    if (data) this.add(data)
  }

  isDoublyLinkedList() {}
  // Conversion methods to change this Queue to a different data structure
  toArray() {}
  toQueue() {}
  toStack() {}
  toGraph() {}
  toBinaryTree() {}
  toBinarySearchTree() {
    // http://bit.ly/1sdrog5
  }
  // recursive
  searchRecursive(term) {}
  // other
  addAll() {}
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

    // save the old head/first node to a temp variable
    let oldHead = cloneDeep(this.head)

    this.remove(this.head)

    return oldHead
  }


  /* DONE */
  /**
   * Add data to the beginning of linked list.
   * @param {Object} data Data which should be added.
   */
  addFirst(data) {
    if (isUndefined(data)) throw new Error(green('No data provided when adding a new node! [from: addFirst()]'))

    // create a new node
    let node = new Node(data)

    // save the old head/first node to a temp variable
    let oldHead = this.head

    // set the new head to our new node
    this.head = node

    // set the 2nd node's previous node to be the current head
    oldHead.prev = this.head

    // set our new head's next node to the old head node
    this.head.next = oldHead

    // increment length
    this.length++
  }


  remove(node) {
    if (isUndefined(node)) throw new Error(green('No such node in the list! Whoopsies!'))

    let current = this.head
    for (var i = 0; i < this.length; i++) {
      if (current.data === node.data) {
        this.removeByPosition(i)
      }
      current = current.next
    }
  }


  /* DONE */
  removeByPosition(position) {
    if (isUndefined(position)) throw new Error(green('No position was provided when trying to remove a node! [from: removeByPosition()]'))

    //check for out-of-bounds values
    if (position > -1 && position < this.length){

      let current = this.head

      // case: removing first item
      if (position === 0){
        this.head = current.next

        /*
         * If there's only one item in the list and you remove it,
         * then `this.head` will be null. In that case, you should
         * also set `this.tail` to be null to effectively destroy
         * the list. Otherwise, set the previous pointer on the
         * new `this.head` to be null.
         */
        if (!this.head){
          this.tail = null
        } else {
          this.head.prev = null
        }

      // case: removing last item
      } else if (position === this.length -1){
        let oldTail = cloneDeep(this.tail)
        this.tail = this.tail.prev
        this.tail.next = null
        return oldTail

      // case: removing any item besides the first or last
      } else {
        // move to the node with the specified position
        for (let i = 0; i < position; i++) {
          current = current.next
        }
        let previous = current.prev

        //skip over the item to remove
        previous.next = current.next
      }

      this.length--
      return current
    }
    throw new Error(green('Failure: non-existent node in this list. [from: removeByPosition()]'))
  }


  /* DONE */
  /**
   * Remove a node from the linked list using the data to find it
   * @param  {Object}  data Data which should be removed.
   * @return {Boolean}      Returns true if data has been removed.
   */
  removeByData(data) {
    if (isUndefined(this.head)) return false

    let current = this.head
    let previous

    // case: removing the first node
    if (this.head.data == data) {
      let oldHead = current
      let newHead = current.next
      newHead.prev = null
      this.head = newHead
      return oldHead

    // case: removing the last node
    } else if (this.tail.data == data) {
      let oldTail = cloneDeep(this.tail)
      this.tail = this.tail.prev
      this.tail.next = null
      return oldTail

    // case: removing any item besides the first or last
    } else {

      for (var i = 1; i < this.length - 1; i++) {
        previous = current
        current  = current.next

        if (current.data == data) {
          previous.next = current.next
          this.length--
          return current
        }
      }
    }
    return false
  }


  /* DONE */
  searchByData(data) {
    if (isUndefined(data)) throw new Error(green('No data provided when searching for a node! [from: searchByData()]'))

    let current = this.head

    for (var i = 0; i < this.length; i++) {
      if (current.data == data) {
        return current
      }
      current = current.next
    }
    throw new Error(green('Failure: non-existent node in this list. [from: searchByData()]'))
  }


  /* DONE */
  searchByPosition(position) {
    if (isUndefined(position)) throw new Error(green('No position was provided when searching for a node! [from: searchByPosition()]'))

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


  /* DONE, make more readable */
  add(data) {
    if (isUndefined(data)) throw new Error(green('No data provided when adding a new node! [from: add()]'))

    if (isArray(data)) {
      this.addAll(data)
    } else {
      this.addNode(data)
    }
  }


  /* DONE, make more readable */
  addAll(items) {
    if (items.length == 0) throw new Error(green('No data provided when adding a new node! [from: addAll()]'))

    for (let i = 0; i < items.length; i++) {
      this.addNode(items[i])
    }
  }


  /* DONE, make more readable */
  addNode(item) {
    if (isUndefined(item)) throw new Error(green('No data provided when adding a new node! [from: addNode())]'))

    let data = isPlainObject(item) ? item.data : item

    //create a new item object, place data in
    let node = new Node(data)
    let oldTail = this.tail

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // add new node after old tail
      oldTail.next = node
      // update node's previous node to be the old tail
      node.prev = oldTail
      // update the current tail with the new node
      this.tail = node
    }

    this.length++;

    return node;
  }


  /* works for some cases - see below examples */
  addRecursive(data, current = this.head) {
    if (isUndefined(data)) return null
    let currData
    if (isArray(data)) {
      currData = data.shift()
    } else {
      currData = data
      data = undefined
    }
    if (typeof currData == 'undefined') return null

    if (current == null) {
      current = this.head = this.tail = new Node(currData);
    } else if (current.next == null) {

      let node = new Node(currData);
      current.next = node;
      node.prev = current;
    }

    this.length++
    this.addRecursive(data, current);
  }


  /* Returns whether data is in the list starting at the current. */
  containsRecursive(data, current = this.head) {
    return current == null ? false
         : data == current.data ? true
         : this.containsRecursive(data, current.next);
  }


  get head() { return this._head }
  set head(data) { this._head = data }
  get tail() { return this._tail }
  set tail(data) { this._tail = data }
  get length() { return this._length }
  set length(newLength) { this._length = newLength }
}