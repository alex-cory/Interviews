/* Chapter 2 | Linked Lists
 * 2.3
 *
 * Delete Node in Middle of Single Linked List
 *
 * QUESTION 1:
 * Implement an algorithm to delete a node in the middle of a single linked list, given only access to that node
 *
 * EXAMPLE:
 * Input: the node ‘c’ from the linked list a->b->c->d->e
 * Result: nothing is returned, but the new linked list looks like a->b->d->e
 *
 */


/* -------------------------------------------------------------------------------------------------------------
 * Algorithm:  Delete Node in Middle of Single Linked List
 *
 */
function searchAndRemove (item) {  // item = C
    var currNode = this.head;
    while (!(currNode.next == null) &&
           !(currNode.next.element == item)) {
        currNode = currNode.next; // stops on the node just before 'item' which in this case is 'B'
    }
    var prevNode = currNode; // node just before the one we want to remove
    currNode.next = currNode.next.next; // removing .next references to the node we want to remove
}


/* -------------------------------------------------------------------------------------------------------------
 * TESTING:    Delete Node in Middle of Single Linked List
 */
var cities = new LList();
cities.push("A");
cities.push("B");
cities.push("C");
cities.push("D");
cities.push("E");
cities.searchAndRemove('E');
console.log();
cities.display();













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
//    this.findNthToLast = findNthToLast;
    this.searchAndRemove = searchAndRemove;
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