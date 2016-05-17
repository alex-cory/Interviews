import Node from './_Node'

/**
 * Heap node.
 *
 * @public
 * @param {Object} data  Data of the node.
 * @param {Node}   next  Next node.
 * @param {Node}   prev  Previous node.
 */
export default class HeapNode extends Node {
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
		return this._next
	}

	set next(node) {
		this._next = node
	}

	get prev() {
		return this._prev
	}

	set prev(node) {
		this._prev = node
	}
}