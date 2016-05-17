import Node from './_Node'

/**
 * Linked List node.
 *
 * @public
 * @param {Object} data  Data of the node.
 * @param {Node}   next  Next node.
 */
export default class QueueNode extends Node {
	constructor(data = null, next = null) {
		super(data)
		this._next = next
	}

	get data() {
		return super.data
	}

	set data(data) {
		super.data = data
	}

	get next() {
		return this._next
	}

	set next(node) {
		this._next = node
	}
}