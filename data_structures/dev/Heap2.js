import Node from './Node/HeapNode'
import { cloneDeep, isArray, isPlainObject, isUndefined } from 'lodash'
import { green } from 'chalk'

 /**
  * Heap class
	*
  * @example in ./examples/heap.js
  */
class Heap {
	constructor(data) {
		this._length = 0
		this._head = null
		this._tail = null

		if (data) this.add(data)
	}

	isHeap() {}
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

	/** NOT WORKING */
	/** Produces a max heap from an unordered array. */
	buildMaxHeap() {}
	/** NOT WORKING */
	/**
	 * Correct a single violation of the heap property in a subtree's root.
	 *
	 * Time Complexity: O(log(n))
	 *
	 * @param  {[type]} array [description]
	 * @param  {[type]} i     [description]
	 * @return {[type]}       [description]
	 */
	maxHeapify(array, i) {}
	/** insert element x into set S */
	insert(S, x) {}
	/** return element S with the largest key */
	max(S) {}
	/** remove it from S */
	extractMax(S) {}
	/** increase the value of x's key to new value k */
	increaseKey(S, x, k) {}


	/** NOT WORKING */
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

	/** NOT WORKING */
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

	  // set the 2nd node's previous node to be the current head
	  oldHead.prev = this.head

	  // set our new head's next node to the old head node
	  this.head.next = oldHead

	  // increment length
	  this.length++
	}

	/** NOT WORKING */
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

	/** NOT WORKING */
	removeByPosition(position) {
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
		throw new Error(green('Failure: non-existent node in this list.'))
	}

	/** NOT WORKING */
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

	/** NOT WORKING */
	searchByData(data) {
    let current = this.head

    for (var i = 0; i < this.length; i++) {
    	if (current.data == data) {
    		return current
    	}
    	current = current.next
    }
    return null
	}

	/** NOT WORKING */
	searchByPosition(position) {
		//check for out-of-bounds values
		if (position > -1 && position < this.length){
	    let current = this.head

	    for (var i = 0; i < position; i++) {
	    	current = current.next
	    }

	    return current
		}
		throw new Error(green('Failure: non-existent node in this list.'))
	}

	/** NOT WORKING */
	add(data) {
		if (isUndefined(data)) throw new Error(green('No data provided when adding a new node! [from inside add()]'))
		if (isArray(data)) {
			this.addAll(data)
		} else {
			this.addNode(data)
		}
	}

	/** NOT WORKING */
	addAll(items) {
		if (items.length == 0) throw new Error(green('No data provided when adding a new node! [from inside addAll()]'))

		for (let i = 0; i < items.length; i++) {
			this.addNode(items[i])
		}
	}

	/** NOT WORKING */
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

	/** NOT WORKING */
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

	/** NOT WORKING */
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