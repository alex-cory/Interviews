/* Chapter 2 | Linked Lists
 * 2.2
 *
 * Nth to Last Element in Singly Linked List
 *
 * Example: http://bit.ly/1I6W3Oo
 *
 *
 *
 * QUESTION 1:
 * Implement an algorithm to find the nth to last element of a singly linked list
 *
 */


/* -------------------------------------------------------------------------------------------------------------
 * Algorithm:  Nth to Last Element in Singly Linked List
 *
 */
function findNthToLast(n) {
    if (n < 1 || n == null) {
        console.log('Huston, we have a problem.  Must be at least 1 element passed in.');
        return;
    }
    var currNode = this.head;
    var nthNode = this.head; // this will stay 'n' spaces behind currNode

    // get runner node (currNode) n-1 steps in front of the nth node (nthNode)
    for (var i = 0; i < n - 1; i++) {
        if (currNode == null) {
            return 'the list size is smaller than the position you want to get the node at.';
        }
        currNode = currNode.next;
    }
    // increment both until currNode reaches the end. At which point, nthNode will land on the right node.
    while (!(currNode.next == null)) {
        nthNode = nthNode.next;
        currNode = currNode.next;
    }
    console.log('value: ' + nthNode.element + ', next: ' + nthNode.next);
    return nthNode;
}


/* -------------------------------------------------------------------------------------------------------------
 * TESTING:    Nth to Last Element in Singly Linked List
 */
var cities = new LList();
cities.push("Conway");
cities.push("Russellville");
cities.push("Carlisle");
cities.push("Alma");
cities.findNthToLast(1);
console.log();
cities.display();



/* -------------------------------------------------------------------------------------------------------------
 * Algorithm:  Nth to Last Element in Singly Linked List     RECURSIVE
 *
 * Help: http://bit.ly/1I6W3Oo
 *
 * TODO: NOT DONE
 */
//function findNthToLast(currNode, n, i) {
//    if (currNode == null) {
//        return;
//    }
//    findNthToLast(currNode.next, n, ++i);
//    console.log('findNthToLast(' + currNode.element + ', ' + n + ', ' + i + ');');
//    if (i == n) {
//        console.log(i + ', ' + currNode.element);
//    }
//}



/* -------------------------------------------------------------------------------------------------------------
 * TESTING:    Nth to Last Element in Singly Linked List
 */

//var cities = new LList();
//cities.push("Conway");
//cities.push("Russellville");
//cities.push("Carlisle");
//cities.push("Alma");
//findNthToLast(cities.head, 2, 0);
//console.log();
//cities.display();









/* -------------------------------------------------------------------------------------------------------------
 * CLASS:    Linked List
 */

/* Node Class */
function Node(element) {
    this.element = element;
    this.next = null;
}

/* Constructor Function || Linked List Class */
function LList() {
    this.head = new Node('head');
    this.tail = this.head;
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.findPrevious = findPrevious;
    this.display = display;
    this.findNthToLast = findNthToLast;
    this.push = push;
}

/* Find Function */
function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

/* Insert Function */
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
    if (newNode.next == null) {
        this.tail = newNode;
    }
}

/* Remove Function */
function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next === null)) {
        prevNode.next = prevNode.next.next;
    }
}

/* Find Previous Function */
function findPrevious(item) {
    var currNode = this.head; // first node on linked list
    while (!(currNode.next === null) &&
        !(currNode.next.element == item)) {
        currNode = currNode.next;
    }
    return currNode;
}

/* Display Function */
function display() {
    var currNode = this.head; // first node on linked list
    while (!(currNode.next === null)) {
        console.log(currNode.next.element);
        currNode = currNode.next; // iterate over the next node
    }
}

/* Push Function */
function push(newElement) {
    var tailNode = this.tail; // last node on linked list
    tailNode.next = new Node(newElement); // adding new node after tail node
    this.tail = tailNode.next; // updating the tail of the list to the newly created node

}

//var cities = new LList();
//cities.push("Conway");
//cities.push("Russellville");
//cities.push("Carlisle");
//cities.push("Alma");
////cities.push("Carlisle");
//console.log('Display All');
//cities.display();
//console.log();
//
//console.log('Insert Indianapolis at End:');
//cities.insert('Indianapolis', 'Alma');
//cities.display();
//
//console.log();
//console.log('Display Tail:');
//console.log('cities.tail.element: ' + cities.tail.element + ', cities.tail.next: ' +cities.tail.next);