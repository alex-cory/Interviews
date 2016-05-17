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