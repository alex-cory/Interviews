Data Structures
===============

Heaps
-----

#### Binary Heaps

#### Binomial Heaps

#### Fibonacci Heaps

|                          | Binary Heap <br> **(worst case)**  | Binomial Heap <br> **(worst case)** | Fibonacci Heap <br> **(amortized)** |
| ------------------------ | ------------------- | ------------------------ | ------------------- |
| Make-Heap                | Θ(1)                | Θ(1)                     | Θ(1)                |
| Minimum                  | Θ(1)                | Θ(log(n))                | Θ(1)                |
| Extract-Min <br> (Union) | Θ(log(n)) <br> Θ(n) | Θ(log(n)) <br> Θ(log(n)) | Θ(log(n)) <br> Θ(1) |
| Decrease-Key             | Θ(log(n))           | Θ(log(n))                | Θ(1)                |
| Delete                   | Θ(log(n))           | Θ(log(n))                | Θ(log(n))           |
| Insert                   | Θ(log(n))           | Θ(log(n))                | Θ(1)                |
