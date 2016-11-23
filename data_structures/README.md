Data Structures
===============

Linked Lists
------------
- [JavaScript Implementation](./LinkedList.js)
```
import LinkedList from '../LinkedList'

let ll = new LinkedList([0, 2, 4, 6, 8])
// let ll = new LinkedList()
// ll.addAll([0, 1, 2])
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
// console.log(ll.head);
console.log(ll);
```

Doubly Linked Lists
-------------------
- [JavaScript Implementation](./DoublyLinkedList.js)
```
Examples
import DoublyLinkedList from '../DoublyLinkedList'
let dll = new DoublyLinkedList([0, 2, 4, 6, 8])
// let dll = new DoublyLinkedList()
// dll.addNode(4)
// dll.addNode()
// dll.addAll([0, 1, 2])
/* ------------------------- */
// dll.addRecursive(0)
// dll.addRecursive(1)
// dll.addRecursive([0, 1])
/* doesn't work */
// dll.addRecursive(0)
// dll.addRecursive([0, 1])
/* ------------------------- */
// console.log(dll.containsRecursive(4));
/* ------------------------- */
// dll.addAll() // should return null
/* ------------------------- */
// dll.add([0, 1, 2, 3, 4])
// dll.add([0])
// dll.add([])
// dll.add(1)
// dll.add()
/* ------------------------- */
// dll.removeByPosition(dll.length - 1)
/* ------------------------- */
// dll.removeByData(0)
/* ------------------------- */
// console.log(dll.searchByPosition(4))
/* ------------------------- */
// console.log(dll.searchByData(8))
/* ------------------------- */

// dll.remove(8)
/* ------------------------- */
// dll.addFirst(9)
/* ------------------------- */
// dll.shift()
// console.log(dll.shift())
// console.log(dll.removeByData(8))
console.log(dll)

```

Stacks
------
 - [JavaScript Implementation](./Stack.js)
 - Code Example (from [examples/stack.js](./examples/stack.js))
```
Examples
import Stack from '../Stack'
let s = new Stack([0, 2, 4, 6])
s.push(8)
// console.log(s.pop());
// console.log(s.search(4))
// console.log(s.peek());

console.log(s);
```

Queues
------
 - [JavaScript Implementation](./Queue.js)
 - Code Example (from [examples/queue.js](./examples/queue.js))
```
Examples

import Queue from '../Queue'
let q = new Queue([0, 2, 4, 6, 8])

/* cases: add() */
// q.add() 																// throw error
// q.add(0)
// q.add(0, 1)
// q.add([])															// throw error
// q.add([0, 0])
// q.add({_data: 0})
// q.add([{_data: 0}, {_data: 1}])

/* cases: remove() */
// q.remove() 														// should remove the first item in the queue

/* cases: search() */
// console.log(q.search(0))								// 0
// console.log(q.search())							 	// throw error
// console.log(q.search({_data: 2})) 			// 1

/* cases: contains() */
// console.log(q.contains(4)) 						// true
// console.log(q.contains()) 							// throw error
// console.log(q.contains({_data: 3})); 	// false
// console.log(q.contains({_data: 's'})); // false

/* cases: peek() */
// console.log(q.peek()); 								// {_data: 0}

// console.log('head: ', q.head);
// console.log('tail: ', q.tail);
// console.log('length: ', q.length);
console.log(q)
```

Binary Trees
------------
 - [Wiki](https://www.wikiwand.com/en/Binary_tree)
 - [How to Pretty Print a Binary Tree](http://articles.leetcode.com/how-to-pretty-print-binary-tree/)
 

Binary Search Trees
-------------------
 - [Wiki](https://www.wikiwand.com/en/Binary_search_tree)
 - [A simple binary search tree in JavaScript](https://gist.github.com/trevmex/821973)
 - [Gist Example](https://gist.github.com/TheIronDeveloper/6604713)
 - [Computer science in JavaScript: Binary search tree, Part 1](https://www.nczonline.net/blog/2009/06/09/computer-science-in-javascript-binary-search-tree-part-1/)


Heaps
-----
 - [Wiki](https://www.wikiwand.com/en/Heap_(data_structure))
 - [Youtube Video](https://www.youtube.com/watch?v=q7R_upR81FU)
 - [heapq.py (python's implementation of a heap)](https://docs.python.org/2/library/heapq.html#heapq.heappush)


#### [Binary Heaps](https://www.wikiwand.com/en/Binary_heap)
 - [Example 1](https://github.com/Tyriar/js-binary-heap/blob/master/index.js)
 - [Example 2](https://codetype.wordpress.com/2012/08/29/cracking-the-coding-interview-javascript-minmax-binary-heap/)
 - [Example 3](http://eloquentjavascript.net/1st_edition/appendix2.html)
 - [Java Program to Implement Binary Heap](http://www.sanfoundry.com/java-program-implement-binary-heap/)
 - [CoffeScript Implementation](https://github.com/qiao/heap.js)
 - [Cracking the Coding Interview – JavaScript Min/Max Binary Heap](https://codetype.wordpress.com/2012/08/29/cracking-the-coding-interview-javascript-minmax-binary-heap/)
 - [js-algorithms binary heap class](https://github.com/duereg/js-algorithms/blob/master/lib/dataStructures/binaryHeap.js)
 - [jsfiddle binary heap](http://jsfiddle.net/DerekL/v4yLwfkp/)
 - [JavaScript Implementation](./MinBinaryHeap.js)
```
Examples
import MinBinaryHeap from '../MinBinaryHeap'
let mnbh = new MinBinaryHeap()
mnbh.add([59, 21, 12, 41, 1, 0, 17, 99, 101, 13, 18, 66, 77, 69, 81, 43, 78, 90])
// mnbh.add(1)
// mnbh.add(5)
// mnbh.add(10)
// mnbh.add(8)
// mnbh.add(13)
// mnbh.add(0)
// mnbh.add(38)
// mnbh.add(13)
// mnbh.add(10)
// mnbh.add(8)
// mnbh.add(13)
// mnbh.add(0)
// mnbh.add(38)
// mnbh.add(13)
// mnbh.add(10)
// mnbh.add(8)
// mnbh.add(13)
// mnbh.add(0)
// mnbh.add(38)
// mnbh.add(13)
// mnbh.add(10)
// mnbh.add(8)
// mnbh.add(13)
// mnbh.add(0)
// mnbh.add(38)
// mnbh.add(13)
mnbh.display()
// console.log(mnbh.heap);
```
 - Output from [min-binary-heap.js](./examples/min-binary-heap.js):
 
 ![alt text](./assets/MinBinaryHeap.gif "Title")

#### [Binomial Heaps](https://www.wikiwand.com/en/Binomial_heap)
 - [Example 1](https://github.com/Tyriar/js-binomial-heap/blob/master/index.js)
 - 

#### [Fibonacci Heaps](https://www.wikiwand.com/en/Fibonacci_heap)
 - [Example 1](https://github.com/Tyriar/js-fibonacci-heap/blob/master/index.js)
 - [jgrapht Fibonacci Heap Docs](http://jgrapht.org/javadoc/org/jgrapht/util/FibonacciHeap.html)

|                          | Binary Heap <br> **(worst case)**  | Binomial Heap <br> **(worst case)** | Fibonacci Heap <br> **(amortized)** |
| ------------------------ | ------------------- | ------------------------ | ------------------- |
| Make-Heap                | Θ(1)                | Θ(1)                     | Θ(1)                |
| Minimum                  | Θ(1)                | Θ(log(n))                | Θ(1)                |
| Extract-Min <br> (Union) | Θ(log(n)) <br> Θ(n) | Θ(log(n)) <br> Θ(log(n)) | Θ(log(n)) <br> Θ(1) |
| Decrease-Key             | Θ(log(n))           | Θ(log(n))                | Θ(1)                |
| Delete                   | Θ(log(n))           | Θ(log(n))                | Θ(log(n))           |
| Insert                   | Θ(log(n))           | Θ(log(n))                | Θ(1)                |
