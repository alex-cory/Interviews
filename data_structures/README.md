Data Structures
===============

Linked Lists
------------

Doubly Linked Lists
-------------------

Binary Trees
------------

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
 - [CoffeScript Implementation](https://github.com/qiao/heap.js)

#### [Binomial Heaps](https://www.wikiwand.com/en/Binomial_heap)
 - [Example 1](https://github.com/Tyriar/js-binomial-heap/blob/master/index.js)
 - 

#### [Fibonacci Heaps](https://www.wikiwand.com/en/Fibonacci_heap)
 - [Example 1](https://github.com/Tyriar/js-fibonacci-heap/blob/master/index.js)
 - 

|                          | Binary Heap <br> **(worst case)**  | Binomial Heap <br> **(worst case)** | Fibonacci Heap <br> **(amortized)** |
| ------------------------ | ------------------- | ------------------------ | ------------------- |
| Make-Heap                | Θ(1)                | Θ(1)                     | Θ(1)                |
| Minimum                  | Θ(1)                | Θ(log(n))                | Θ(1)                |
| Extract-Min <br> (Union) | Θ(log(n)) <br> Θ(n) | Θ(log(n)) <br> Θ(log(n)) | Θ(log(n)) <br> Θ(1) |
| Decrease-Key             | Θ(log(n))           | Θ(log(n))                | Θ(1)                |
| Delete                   | Θ(log(n))           | Θ(log(n))                | Θ(log(n))           |
| Insert                   | Θ(log(n))           | Θ(log(n))                | Θ(1)                |
