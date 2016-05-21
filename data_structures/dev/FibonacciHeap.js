import Node from './Node/FibonacciHeapNode'
import { cloneDeep, isArray, isPlainObject, isUndefined } from 'lodash'
import { green } from 'chalk'

 /**
  * Fibonacci Heap class
	*
  * @example in ./examples/fibonacci-heap.js
  */
class FibonacciHeap {
	constructor(data) {
		// the top node
		this._min = null
		this._size = 0

		if (data) {console.log('USING CONSTRUCTOR');}
		// if (data) this.add(data)
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
	clear() {
		this.min = null
		this.size = 0
	}
	isEmpty() { return this.min == null }

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
	insert(S, x) {
		var node = new Node(key, value);
		this.minNode = mergeLists(this.minNode, node, this.compare);
		this.nodeCount++;
		return node;
	}
	/** return element S with the largest key */
	max(S) {}
	/** remove it from S */
	extractMax(S) {}
	/** increase the value of x's key to new value k */
	increaseKey(S, x, k) {}

	add(data) {}
	/** Heapify */
	addAll(items) {}
	/** insert */
	addNode(item) {}
	remove(data) {}
	removeAll(items) {}
	removeNode(item) {}
	contains(data) {}
	containsAll(items) {}
	containsNode(item) {}


	/**
	 * Compares two nodes with each other.
	 *
	 * @private
	 * @param {Object} a The first key to compare.
	 * @param {Object} b The second key to compare.
	 * @return {number} -1, 0 or 1 if a < b, a == b or a > b respectively.
	 */
	compare(a, b) {
		if (a.key > b.key) {
		  return 1
		}
		if (a.key < b.key) {
		  return -1
		}
		return 0
	}

	get min() { return this._min }
	set min(data) { this._min = data }
	get size() { return this._size }
  set size(newSize) { this._size = newSize }
}

/*
let fh = new FibonacciHeap(0)

FibonacciHeapNode {
	_data: 0,
	_position: 0,
	_right: null,
	_left: null,
	_degree: 0,
	_parent: null,
	_isMarked: false
}

fh.add(2)
FibonacciHeapNode {
	_data: 0,
	_position: 0,
	_right: null,
	_left: FibonacciHeapNode {
		_data: 2,
		_position: 1,
		_right: null,
		_left: null,
		_degree: 0,
		_parent: [Circular],
		_isMarked: false
	},
	_degree: 1,
	_parent: null,
	_isMarked: false
}

fh.add(5)
FibonacciHeapNode {
	_data: 0,
	_position: 0,
	_right: null,
	_left: FibonacciHeapNode {
		_data: 2,
		_position: 1,
		_right: null,
		_left: null,
		_degree: 0,
		_parent: [Circular],
		_isMarked: false
	},
	_degree: 1,
	_parent: null,
	_isMarked: false
}
 */