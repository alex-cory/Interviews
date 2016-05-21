Data Structures
===============

Linked Lists
------------

Doubly Linked Lists
-------------------

Binary Trees
------------
 - [How to Pretty Print a Binary Tree](http://articles.leetcode.com/how-to-pretty-print-binary-tree/)

Binary Search Trees
-------------------

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
