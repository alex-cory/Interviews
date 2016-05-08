import List from './List'
import * as Node from './Node/DoublyLinkedListNode'
/**
 *https://github.com/pasangsherpa/doubly-linked-list-adt
 */


 /**
  * Doubly Linked list class
  *
  * @example in ./examples/doubly-linked-list.js
  */
 export default class DoublyLinkedList extends List {
   constructor(list) {
     super(list)
     this._first = list[0] // || null
     this._last  = list[list.length - 1] || null
   }

   isDoublyLinkedList() {
   }

   convertToLinkedList() {

   }

   convertToBinaryTree() {

   }

   convertToBinarySearchTree() {

   }

   /**
    * Set current position on step left/back in the list
    * if not at the first node
    * @method prev
    */
   prev() {
     if (super.position !== 0) {
       --super.position
     }
   }

   /**
    * Set current position on step right in the list
    * if not at the end/tail node
    * @method next
    */
   next() {
     if (super.position !== (super.size - 1)) {
       ++super.position
     }
   }

   /**
    * Add data to the end of linked list.
    *
    * @public
    * @method
    * @param {Object} data Data which should be added.
    */
   push(data) {
     let node = new Node(data)
     if (this.first === null) this.first = this.last = node

     let temp = this.last
     this.last = node
     node.prev = temp
     temp.next = node
   }

   /**
    * Return last node from the linked list and removes it from the list.
    *
    * @public
    * @method
    * @return {Node} Last node.
    */
   pop() {
     if (this.last === null) return null

     let temp = this.last
     this.last = this.last.prev
     return temp
   }

   /**
    * Return first node from the linked list and removes it from the list.
    *
    * @public
    * @method
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
    *
    * @public
    * @method
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
    *
    * @public
    * @method
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
    *
    * @public
    * @method
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
    *
    * @public
    * @method
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
    *
    * @public
    * @method
    */
   recursiveReverse() {
     function inverse(current, next) {
       if (!next) return

       inverse(next, next.next)
       next.next = current
     }
     if (!this.first) return

     inverse(this.first, this.first.next)
     this.first.next = null
     let temp = this.first
     this.first = this.last
     this.last = temp
   }

   /**
    * Reverses the linked list iteratively
    *
    * @public
    * @method
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

   get last() {
     return this._last
   }

   get position() {
     return super.position
   }

   get list() {
     return super.list
   }

   get size() {
     return super.size
   }
 }