/**
 * Binary Heap node.
 *
 * @private
 * @param {Object} key   Key of the node.
 * @param {Object} value Value of the node.
 */
export default class BinaryHeapNode {
	constructor(data = null, position = null) {
		this._data = data
		this._position = position
		this._right = null
		this._left = null
		// contains the number of children of this node
		this._degree = 0

		this._parent = null
		// is true if the node has lost a child since the node became a child of another node
		this._isMarked = false
	}

	get position() { return this._position }
	set position(data) { this._position = data }

	get data() { return this._data }
	set data(newData) { this._data = newData }

	get left() { return this._left }
	set left(node) {
		this._left = node
		// if (node) {
		// 	this.degree++
		// } else if (!node && !this._right) {
		// 	this.degree = 0
		// } else {
		// 	this.degree--
		// }
	}

	get right() { return this._right }
	set right(node) {
		this._right = node
		// if (node) {
		// 	this.degree++
		// } else if (!node && this._left) {
		// 	this.degree--
		// }
	}

	get numDigits() {
		return this._data.toString().length
	}

	get degree() { return this._degree }
	set degree(data) { this._degree = data }

	get parent() { return this._parent }
	set parent(data) { this._parent = data }

	get isMarked() { return this._isMarked }
	set isMarked(data) { this._isMarked = data }
}