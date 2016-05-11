import Node from './Node/DoublyLinkedListNode'


class DoublyLinkedList {
	constructor(data) {
		this._length = 0
		this._head = null

		if (data) this.add(data)
	}

	isDoublyLinkedList() {}
	convertToLinkedList() {}
	convertToBinaryTree() {}
	convertToBinarySearchTree() {}

	/**
	 * Return first node from the linked list and removes it from the list.
	 * @return {Node} First node.
	 */
	shift() {
	  if (!this.head) return null
	  let oldHead = this.head
		// set the new head to be the next node in the list
	  this.head = this.head.next
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
	  let oldHead = this.head || node

	  // set the new head to our new node
	  this.head = node

	  // set our new head's next node to the old head node
	  this.head.next = oldHead
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

	removeByIndex(index) {
		//check for out-of-bounds values
		if (index > -1 && index < this.length){

	    let current = this.head
	    let previous

	    //special case: removing head item
	    if (index === 0){
	        this.head = current.next;
	    } else {

        //find the right location
        for (var i = 0; i < index; i++) {
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
		//check for out-of-bounds values
		// if (index > -1 && index < this.length){
	    let current = this.head

	    for (var i = 0; i < this.length; i++) {
	    	if (current.data == data) {
	    		return current
	    	}
	    	current = current.next
	    }
		// }
    return null
	}

	searchByIndex(index) {
		//check for out-of-bounds values
		if (index > -1 && index < this.length){
	    let current = this.head

	    for (var i = 0; i < index; i++) {
	    	current = current.next
	    }

	    return current.data
		}
    return null
	}

	add(data) {
		if (!data) return null
		if (Object.prototype.toString.call(data) === '[object Array]') {
			this.addAll(data)
		} else {
			this.addNode(data)
		}
	}

	addAll(data) {
		if (!data || data.length == 0) return null
		let current

		if (!this.head) {
			this.head = new Node(data[0])
			this.length++
		}
		current = this.head

		while(current.next) {
			current = current.next
		}

		for (let i = 1; i < data.length; i++) {
			current.next = new Node(data[i])
			current = current.next
			this.length++
		}
	}

	addNode(data) {
		if (!data || typeof data == 'undefined') return null

	  //create a new item object, place data in
	  let node = new Node(data)

    //used to traverse the structure
	  let current

	  //special case: no items in the list yet
	  if (this.head == null){
      this.head = node;
	  } else {
      current = this.head;

      while(current.next){
        current = current.next;
      }

      current.next = node;
      this.length++
	  }
	}


	get head() { return this._head }
	set head(data) { this._head = data }
	get length() { return this._length }
  set length(newLength) { this._length = newLength }
}

let ll = new DoublyLinkedList([0, 2, 4, 6, 8])
// let ll = new DoublyLinkedList()
// ll.add([0, 1, 2, 3, 4])
// ll.add([0])
// ll.add([])
// ll.add(1)
// ll.add()
// ll.removeByIndex(0)
// ll.removeByData(0)
// console.log(ll.searchByIndex(2));
// console.log(ll.searchByData(8));
// ll.remove(8)
// console.log(ll.hasCycle());
// ll.addFirst(9)
// ll.shift()
console.log(ll.head);