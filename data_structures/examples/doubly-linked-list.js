import DoublyLinkedList from '../DoublyLinkedList'
let dll = new DoublyLinkedList([0, 2, 4, 6, 8])
// let dll = new DoublyLinkedList()
// dll.addNode(4)
// dll.addNode()
// dll.addAll([0, 1, 2])
/* ------------------------- */
/* works */
// dll.addRecursive(0)
// dll.addRecursive(1)
/* works */
// dll.addRecursive([0, 1])
/* doesn't work */
// dll.addRecursive(0)
// dll.addRecursive([0, 1])
/* ------------------------- */
/* works */
// console.log(dll.containsRecursive(4));
/* ------------------------- */
/* works */
// dll.addAll() // should return null
/* ------------------------- */
/* works */
// dll.add([0, 1, 2, 3, 4])
// dll.add([0])
// dll.add([])
// dll.add(1)
// dll.add()
/* ------------------------- */
/* works */
// dll.removeByPosition(dll.length - 1)
/* ------------------------- */
/* works */
// dll.removeByData(0)
/* ------------------------- */
/* works */
// console.log(dll.searchByPosition(4))
// /* ------------------------- */
/* works */
// console.log(dll.searchByData(8))
/* ------------------------- */

// dll.remove(8)
/* ------------------------- */
/* works */
// dll.addFirst(9)
/* ------------------------- */
/* works */
// dll.shift()
// console.log(dll.shift())
// console.log(dll.removeByData(8))
console.log(dll)