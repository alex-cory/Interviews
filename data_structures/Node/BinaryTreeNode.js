import Node from './_Node'

export default class BinaryTreeNode {
	constructor(data, left = null, right = null, parent = null) {
		this._data = data
		this._left = left
		this._right = right
		this._parent = parent
	}

	get data() { return this._data }
	set data(newData) { this._data = newData }
	get left() { return this._left }
	set left(newLeft) { this._left = newLeft }
	get right() { return this._right }
	set right(newRight) { this._right = newRight }
	get parent() { return this._parent }
	set parent(newParent) { this._parent = newParent }
}