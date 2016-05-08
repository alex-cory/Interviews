import List from './List'
import * as Node from './Node/LinkedListNode'

/**
 *
 *
 * Implementations:
 * - Data Structures JS: http://bit.ly/1DIMDuW
 * - Github: http://bit.ly/1guGQi1
 * - BucketJS: http://bit.ly/1guIGiO
 * - Syncano: http://bit.ly/1DIThBF
 * - Visualize: http://bit.ly/1guLvk4
 */

/**
 * Linked list class
 *
 * @example in ./examples/linked-list.js
 */
export default class LinkedList extends List {
  constructor(data) {
    super(prepare(data))
    this._first = list[0] // || null  // why does this not work??
    this._last  = list[list.length - 1] || null
  }

  prepare(data) {
    let list = []
    if (data.length >= 1) {
      for (var i = 0; i < data.length; i++) {
        list.push(
          new Node(data[i], data[i + 1])
        )
      }
    }
    return list
  }

  isLinkedList() {
  }

  convertToDoublyLinkedList() {

  }

  convertToBinaryTree() {

  }

  convertToBinarySearchTree() {

  }

  /**
   * Set current position on step right in the list if not at the end/tail node
   */
  next() {
    if (super.position !== (super.size - 1)) {
      ++super.position
    }
  }

  /**
   * Add data to the end of linked list.
   * @param {Object} data Data which should be added.
   */
  push(data) {
    let node = new Node(data)
    if (this.first === null) this.first = this.last = node

    let temp = this.last
    this.last = node
    temp.next = node
  }

  /**
   * Return last node from the linked list and removes it from the list.
   * @return {Node} Last node.
   */
  // pop() {
  //   if (this.last === null) return null


  //   let temp = this.last
  //   // this.last = this.last.prev
  //   this.last = this.size > 1 ? this.list[this.size -2] :
  //   return temp

  //   var currentNode = this.head,
  //       count = 0,
  //       message = {failure: 'Failure: non-existent node in this list.'},
  //       beforeNodeToDelete = null,
  //       nodeToDelete = null,
  //       deletedNode = null;

  //   // 1st use-case: an invalid position
  //   if (position < 0 || position > length) {
  //       throw new Error(message.failure);
  //   }

  //   // 2nd use-case: the first node is removed
  //   if (position === 1) {
  //       this.head = currentNode.next;
  //       deletedNode = currentNode;
  //       currentNode = null;
  //       this.size--;

  //       return deletedNode;
  //   }

  //   // 3rd use-case: any other node is removed
  //   while (count < position) {
  //       beforeNodeToDelete = currentNode;
  //       nodeToDelete = currentNode.next;
  //       count++;
  //   }

  //   beforeNodeToDelete.next = nodeToDelete.next;
  //   deletedNode = nodeToDelete;
  //   nodeToDelete = null;
  //   this.size--;

  //   return deletedNode;
  // }

  /**
   * Return first node from the linked list and removes it from the list.
   * @return {Node} First node.
   */
  shift() {
    if (this.first === null) return null

    let temp = this.first
    this.first = this.first.next
    return temp
  }

  /**
   * Add data to the beginning of linked list.
   * @param {Object} data Data which should be added.
   */
  addFirst(data) {
    let node = new Node(data)
    if (this.first === null) this.first = this.last = node

    let temp = this.first
    this.first = node
    node.next = temp
    temp.prev = node
  }

  /**
   * In order traversal of the linked list.
   * @param {Function} cb Callback which should be executed on each node.
   */
  inorder(cb) {
    let temp = this.first
    while (temp) {
      cb(temp)
      temp = temp.next
    }
  }

  /**
   * Remove data from the linked list.
   * @param  {Object}  data Data which should be removed.
   * @return {Boolean}      Returns true if data has been removed.
   */
  remove(data) {
    if (this.first == null) return false

    let temp = this.first
    let next
    let prev
    while (temp) {
      if (temp.data === data) {
        next = temp.next
        prev = temp.prev
        if (next) {
          next.prev = prev
        }
        if (prev) {
          prev.next = next
        }
        if (temp === this.first) {
          this.first = next
        }
        if (temp === this.last) {
          this.last = prev
        }
        return true
      }
      temp = temp.next
    }
    return false
  }

  /**
   * Check if linked list contains cycle.
   * Don't know what this is? See here: http://bit.ly/1QUpa9U
   * @return {Boolean} Returns true if linked list contains cycle.
   */
  hasCycle() {
    let fast = this.first
    let slow = this.first
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

  /**
   * Reverses the linked list recursively
   */
  recursiveReverse() {
    console.log(this.first);
    // function inverse(current, next) {
    //   if (!next) return

    //   inverse(next, next.next)
    //   next.next = current
    // }
    // if (!this.first) return

    // inverse(this.first, this.first.next)
    // this.first.next = null
    // let temp = this.first
    // this.first = this.last
    // this.last = temp
  }

  /**
   * Reverses the linked list iteratively
   */
  reverse() {
    if (!this.first || !this.first.next) return

    let current = this.first.next
    let prev = this.first
    let temp
    while (current) {
      temp = current.next
      current.next = prev
      prev.prev = current
      prev = current
      current = temp
    }
    this.first.next = null
    this.last.prev = null
    temp = this.first
    this.first = prev
    this.last = temp
  }

  get first() {
    return this._first
  }

  set first(node) {
    this._first = node
  }

  get last() {
    return this._last
  }

  set last(node) {
    this._last = node
  }

  get position() {
    return super.position
  }

  set position(newPosition) {
    super.position = newPosition
  }

  get list() {
    return super.list
  }

  get size() {
    return super.size
  }

  get node() {
    return super.node
  }

  get next() {
    return this.node.next
  }
}