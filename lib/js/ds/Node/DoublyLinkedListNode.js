import Node from '_Node.js'

/**
 * Doubly Linked List node.
 *
 * @public
 * @param {Object} data  Data of the node.
 * @param {Node}   next  Next node.
 * @param {Node}   prev  Previous node.
 */
export default class DoublyLinkedListNode extends Node {
	constructor(data = null, next = null, prev = null) {
		super(data)
		this._next = next
		this._prev = prev
	}

	get data() {
		return super.data
	}

	set data(data) {
		super.data = data
	}

	get next() {
		return this.next
	}

	set next(node) {
		this.next = node
	}

	get prev() {
		return this.prev
	}

	set prev(node) {
		this.prev = node
	}
}