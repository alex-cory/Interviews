/**
 * Good Resource: http://bit.ly/1f4yHQd
 * @class List
 */
export default class List {
  constructor(data) {
    this._list = data || []
    this._position = 0
    this._size = data.length || 0
  }



  /**
   * Return current position in the list
   * @return {[number]} list current position
   * @method position
   */
  get position() {
    return this._position
  }

  set position(newPosition) {
    this._position = newPosition
  }

  get list() {
    return this._list
  }

  /**
   * Responsible to return the number of
   * nodes in the list
   * @return {[number]} number of nodes in the list
   * @method
   */
  get size() {
    return this._size
  }

  set size(newSize) {
    this._size = newSize
  }

  /**
   * Insert node after specified target node in the list
   * @method insertAfter
   */
  insertAfter(after, node) {
    let target = this.find(after)
    if (target > -1) {
      this.list.splice(target + 1, 0, node)
      ++this.size
      return true
    }
  }

  /**
   * Insert node before specified target node in the list
   * @method insertBefore
   */
  insertBefore(before, node) {
    let target = this.find(before)
    if (target > 0) {
      this.list.splice(target, 0, node)
      ++this.size
      return true
    }
  }

  /**
   * Remove specified node in the list
   * @param  node [specified node in the list to be removed]
   * @method remove
   */
  remove(node) {
    let target = this.find(node)
    if (target > -1) {
      this.list.splice(target, 1)
      --this.size
      return true
    }
  }

  /**
   * Add node at the next available position
   * which is equal to the size
   * also increment the size by 1 when
   * adding a new node
   * @method add
   */
  push(node) {
    this.list[this.size++] = node
  }

  /**
   * Responsible to check if node list is empty
   * @return {Boolean}
   * @method isEmpty
   */
  isEmpty() {
    return this.size < 1
  }

  /**
   * Clear all nodes in the list
   * @method clear
   */
  clear() {
    this.list.length = this.position = 0
  }

  /**
   * Move current position to the front/first in the list
   * @method head
   */
  head() {
    this.position = 0
  }

  /**
   * Move current position to the end in the list
   * @method tail
   */
  tail() {
    this.position = this.size
  }

  /**
   * Return string representation of the list
   * @return {[string]} list as string
   * @method toString
   */
  toString() {
    return this.list.toString()
  }

  /**
   * Find an node in the list
   * and returns true if exist or false if not
   * @param  node [node to be added in the list]
   * @return {[boolean]}
   * @method contains
   */
  contains(node) {
    for (let i = 0; i < this.list.length; ++i) {
      if (this.list[i] == node) {
        return true
      }
    }
    return false
  }

  /**
   * Move current to specified position
   * @param  {[number]} position
   * @return {[type]}          [description]
   */
  moveTo(position) {
    if (position >= 0 || position <= (this.size - 1)) {
      this.position = position
    }
  }

  /**
   * Return current node in list
   * @method getnode
   */
  get node() {
    return this.list[this.position]
  }

  /**
   * Find node and return it's position
   * @param  {[type]} node [node to be search]
   * @return {[number]} node position
   * @method find
   */
  find(node) {
    for (let i = 0; i < this.list.length; ++i) {
      if (this.list[i] == node) {
        return i
      }
    }
    return -1
  }

  /**
   * This method was created to log/debug the list
   * @debug
   */
  debug(options) {
    var options = options || {}
        options.list = options.list || false
        options.position = options.position || false
        options.toString = options.toString || false
        options.getnode = options.getnode || false
        options.size = options.size || false
        options.contains = options.contains || false
        options.isEmpty = options.isEmpty || false

    if (options.list) {
        console.log('list >>', this.list)
    }
    if (options.position) {
        console.log('position >>', this.position)
    }
    if (options.toString) {
        console.log('string >>', this.toString())
    }
    if (options.getnode) {
        console.log('Current node >>', this.getnode())
    }
    if (options.size) {
        console.log('List size >>', this.size)
    }
    if (options.contains) {
        console.log('Contains node >>', this.contains(options.contains))
    }
    if (options.isEmpty) {
        console.log('is empty >>', this.isEmpty())
    }
  }
}
























/**
 * TESTING -----------------------------------------------
 */
/**
* Movie list
*/
// let movies = new List()

// // add action
// movies.add('Matrix')
// movies.add('Inception')
// movies.add('The Wolf of Wall Street')
// movies.add('Batman')
// movies.add('G.I Joe')
// movies.add('Interstellar')

// // move action
// movies.tail()
// movies.prev()
// movies.moveTo(4)
// movies.head()

// // delete action
// movies.remove('G.I Joe')

// // add at specified position
// movies.insertAfter('Matrix', 'G.I Joe')
// movies.insertBefore('G.I Joe', 'The theory of everything')

// // Debug list
// movies.debug({
//     list: true,
//     position: true,
//     toString: true,
//     getnode: true,
//     size: true,
//     contains: 'Batman',
//     isEmpty: true
// })

