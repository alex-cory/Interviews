import Node from './Node/BinaryHeapNode'
import { cloneDeep, isArray, isPlainObject, isUndefined, isInteger, isNull } from 'lodash'
import { green, blue } from 'chalk'

 /**
  * Binary Heap class
    *
  * @example in ./examples/min-binary-heap.js
  */
export default class MinBinaryHeap {
  constructor(data) {
    this._heap = []
    this._size = 0

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
  remove(data) {}
  removeAll(items) {}
  removeNode(item) {}
  contains(data) {}
  containsAll(items) {}
  containsNode(item) {}
  /** remove it from S */
  extractMin() {}
  /** increase the value of x's key to new value k */
  increaseKey(S, x, k) {}


  add(data, position = this.size) {
    if (isUndefined(data)) throw new Error(green('No data provided when adding a new node! [from: add()]'))

    if (isArray(data)) {
      this.addAll(data)
    } else {
      this.addNode(data, position)
    }
  }


  addAll(items) {
    if (items.length == 0) throw new Error(green('No data provided when adding a new node! [from: addAll()]'))

    for (let i = 0; i < items.length; i++) {
      this.addNode(items[i])
    }
  }


  addNode(data, position = this.size) {
    if (isUndefined(data)) throw new Error(green('No data provided when adding a new node! [from: insert()]'))

    let node = data instanceof Node ? data : new Node(data)
    this.heap[this.size] = node
    this.heapify(node)
    this.size++
    return node;
  }


  /**
   * Correct a single violation of the heap property in a subtree's root.
   *
   * Time Complexity: O(log(n))
   *
   * @param  {Node} current The current node we want to check.
   */
  heapify(current) {
    if (current.position > 0) {
      let parent = current.parent = this.getParent(current.position)
      let child = current

      parent.left = this.getLeft(parent.position)
      parent.right = this.getRight(parent.position)
      child.left = this.getLeft(child.position)
      child.right = this.getRight(child.position)

      if (child.data < parent.data) {
          this.swap(child, parent)
          this.heapify(parent)
      }
    }
  }


  /**
   * Swaps the data of a parent and child node
   *
   * @param {number} child  The child element.
   * @param {number} parent The parent element.
   */
  swap(child, parent) {
    var oldParent = cloneDeep(this.heap[parent.position])
    this.heap[parent.position].data = this.heap[child.position].data
    this.heap[child.position].data = oldParent.data
  }


  /**
   * Gets the parent of the node at the specified position.
   *
   * @private
   * @param  {number} position The index of the node to get the parent of.
   * @return {Node}   The parent of the node at the specified position.
   */
  getParent(position) {
    if (isUndefined(position) || !isInteger(position)) throw new Error(green('You need to use a position with the getParent() function!'))

    if (position > 0) {
      let parentPosition = Math.floor((position - 1) / 2)
      return this.heap[parentPosition]
    }
    return null
  }


  /**
   * Gets the left child of the node at the specified position.
   *
   * @private
   * @param  {number} position The index of the node to get the left child of.
   * @return {Node}   The left child of the node at the specified position.
   */
  getLeft(position) {
    let leftChildPosition = 2 * position + 1;
    return this.heap[leftChildPosition] || null
  }


  /**
   * Gets the right child of the node at the specified position.
   *
   * @private
   * @param  {number} position The index of the node to get the right child of.
   * @return {Node}   The right child of the node at the specified position.
   */
  getRight(position) {
    let rightChildPosition = 2 * position + 2;
    return this.heap[rightChildPosition] || null
  }

  /**
   * Displays the heap in the console in a visually appealing way.
   */
  display() {
    let lines = []
    let level = []
    let next = []
    let output = ''

    level.push(this.heap[0])
    // number of children
    let degree = 1

    let widest = 0

    while (degree != 0) {
      var line = []

      degree = 0

      for (let node of level) {
        if (node == null) {
          line.push(null)

          next.push(null)
          next.push(null)
        } else {

          line.push(node.data)
          if (node.numDigits > widest) widest = node.numDigits

          next.push(node.left)
          next.push(node.right)

          if (node.left !== null) degree++
          if (node.right !== null) degree++
        }
      }

      if (widest % 2 == 1) widest++

      lines.push(line)

      level = next
      next = []
    }

    let perpiece = lines[lines.length - 1].length * (widest + 4)
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i]
      var hpw = Math.floor(perpiece / 2) - 1

      if (i > 0) {
        for (var j = 0; j < line.length; j++) {

          // split node
          var c = ' '
          if (j % 2 == 1) {
            if (line[j - 1] != null) {
              c = (line[j] != null) ? blue('┴') : blue('┘')
            } else {
              if (j < line.length && line[j] != null) c = blue('└')
            }
          }
          output += c

          // lines and spaces
          if (line[j] == null) {
            for (var k = 0; k < perpiece - 1; k++) {
              output += ' '
            }
          } else {

            // right horizontal lines
            for (let k = 0; k < hpw; k++) {
              output += j % 2 == 0 ? " " : blue("─")
            }

            // left + right corners
            output += j % 2 == 0 ? blue('┌') : blue('┐')

            // left horizontal lines
            for (let k = 0; k < hpw; k++) {
              output += j % 2 == 0 ? blue('─') : " "
            }
          }
        }
        output += '\n'
      }

      // print line of numbers
      for (let j = 0; j < line.length; j++) {

        let num = (line[j] == null) ? '' : line[j]
        let numDigits = num.toString().length
        let leftGap = Math.ceil(perpiece / 2 - numDigits / 2)
        let rightGap = Math.floor(perpiece / 2 - numDigits / 2)

        // a number
        for (let k = 0; k < leftGap; k++) {
          output += ' '
        }
        output += green(num)

        for (let k = 0; k < rightGap; k++) {
          output += ' '
        }
      }
      // go to the next line
      output += '\n'

      perpiece /= 2
    }
    console.log(output)
  }

  /** return element S with the smallest key */
  min() {
    return this.heap[0]
  }
  clear() {
    this.heap = []
    this.size = 0
  }
  isEmpty() { return this.heap.size == 0 }
  get heap() { return this._heap }
  set heap(data) { this._heap[this.size] = data }
  get size() { return this._size }
  set size(newSize) { this._size = newSize }
}
