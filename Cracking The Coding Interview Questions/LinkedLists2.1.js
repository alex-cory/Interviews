/* Chapter 2 | Linked Lists
 * 2.1
 *
 * Remove Duplicates From an Unsorted Linked List
 *
 *
 * QUESTION 1:
 * Write code to remove duplicates from an unsorted linked list.
 *
 * QUESTION 2:
 * How would you solve this problem if a temporary buffer is not allowed?
 *
 */


/* -------------------------------------------------------------------------------------------------------------
 * ALGORITHM 1:  Remove Duplicates From an Unsorted Linked List
 *
 * Class definition is at the bottom.
 */

function removeDuplicates() {
    var currNode = this.head.next;
    var prevNode = this.head;
    var hash = {};
    
    while (!(currNode == null)) {
        if (!(hash[currNode.element])) {
            hash[currNode.element] = true;
        } else {
            prevNode.next = currNode.next;
        }
        prevNode = currNode;
        currNode = currNode.next;
    }
}

/* -------------------------------------------------------------------------------------------------------------
 * TESTING:   Remove Duplicates From an Unsorted Linked List
 */
//var cities = new LList();
//cities.insert("Conway", "head");
//cities.insert("Russellville", "Conway");
//cities.insert("Carlisle", "Russellville");
//cities.insert("Alma", "Carlisle");
//cities.insert("Carlisle", "Alma");
//cities.removeDuplicates();
////cities.remove('Carlisle');
//console.log();
//cities.display();



/* -------------------------------------------------------------------------------------------------------------
 * ALGORITHM 2:  Remove Duplicates From an Unsorted Linked List    WITHOUT TEMPORARY BUFFER
 *
 * Class definition is at the bottom.
 */

//function removeDuplicates() {
//    var currNode = this.head;
//    var runNode = null;
//    var prevNode = null;
//    var flag = false;
//
//    while (!(currNode == null)) {
//        runNode = this.head;
//        while (runNode != currNode) {
//            if (currNode.element != runNode.element) {
//                runNode = runNode.next;
//                flag = false;
//            } else {
//                prevNode.next = currNode.next;
//                currNode = prevNode.next;
//                flag = true;
//                break;
//            }
//        }
//        if (!flag) {
//            prevNode = currNode;
//            currNode = currNode.next;
//        }
//    }
//}


/* -------------------------------------------------------------------------------------------------------------
 * TESTING:   Remove Duplicates From an Unsorted Linked List       WITHOUT TEMPORARY BUFFER
 */
var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.insert("Carlisle", "Alma");
cities.removeDuplicates();
//cities.remove('Carlisle');
console.log();
cities.display();






/* -------------------------------------------------------------------------------------------------------------
 * CLASS DEFINITION:   Linked List Class
 */
/* Node Class */
function Node(element) {
    this.element = element;
    this.next = null;
}

/* Linked List Class */
function LList() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrev = findPrev;
    this.remove = remove;
    this.removeDuplicates = removeDuplicates;
}

/* Find */
function find(item) {
    var currNode = this.head;
    while (!(currNode.element == item)) {
        currNode = currNode.next;
    }
    return currNode;
}

/* Insert */
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
}

/* Display */
function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

/* Find Previous */
function findPrev(item) {
    var currNode = this.head;
    while (!(currNode.next == null) &&
        !(currNode.next.element == item)) {
        currNode = currNode.next;
    }
    return currNode;
}

/* Remove */
function remove(item) {
    var prevNode = this.findPrev(item);
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
    }
}