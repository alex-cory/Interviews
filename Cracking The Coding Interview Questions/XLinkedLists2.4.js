/* Chapter 2 | Linked Lists
 * 2.4
 *
 * Add Two Numbers Return Sum as Single Linked List
 *
 * HELP:
 *    Leetcode – Add Two Numbers (Java): http://bit.ly/1FQcKxx
 *    Add two numbers represented by linked lists: http://bit.ly/1IIcLac
 *    JS: Interview Questions: http://bit.ly/1IIdurW
 *
 * QUESTION 1:
 * You have two numbers represented by a linked list, where each node contains a
 * single digit. The digits are stored in reverse order, such that the 1’s digit
 * is at the head of the list. Write a function that adds the two numbers and
 * returns the sum as a linked list.
 *
 * EXAMPLE:
 *   Input:
 *     First List:  (3 -> 1 -> 5)  //    513
 *     Second List: (5 -> 9 -> 2)  // +  295
 *   Result: 8 -> 0 -> 8           // =  808
 *
 *   Input:
 *     First List: 5->6->3      // represents number 365
 *     Second List: 8->4->2     //  represents number 248
 *   Output:
 *     Resultant list: 3->1->6  // represents number 613
 *
 *
 * TEST CASES:
 *     1. Two lists are of same length
 *     2. Two lists of different length
 *     3. One list being NULL
 *     4. Both lists are NULL
 *     5. Carry generated  (meaning some add up to more than 10)
 */


/* -------------------------------------------------------------------------------------------------------------
 * Algorithm:  Add Two Numbers Return Sum as Single Linked List
 *
 * Example: http://bit.ly/1H1E8Ky
 *
 */
function addTwoLists(currNode1, currNode2) {

    //    var currNode1 = l1; // p1
    //    var currNode2 = l2; // p2
    var currNode3 = new Node();
    var previous = null;
    //    console.log(currNode1.element);
//    while (!(currNode1 == null)) {
        //        // save next or you lose it!!!
        //        var save = currNode1.next;
        //        // reverse pointer
        //        currNode1.next = previous;
        //        // increment previous to current node
        //        previous = currNode1;
        //        // increment node to next node or null at end of list
        //        currNode1 = save;
//        currNode1.element.reverse();
//        console.log(previous.element);
//    }
    //    while (!(p1 == null && p2 == null)) {
    //
    //    }
}

// 
// 3->1->5
// 5->9->2
// 
// 1. reverse both linked lists
// 2. 
// 
// 
//function reverse() {
//    var currNode = this.head;
//    var prev = null;
////    var save;
//    while (!(currNode === null)) {
////        console.log('    while (currNode:' + currNode.element + ' != null) {');
//        var save = currNode.next;
////        console.log('        var save = currNode.next:' + currNode.next + ';');
//        currNode.next = prev;
////        console.log('        currNode.next = prev:' + prev + ';');
//        prev = currNode;
////        console.log('        prev = currNode:' + currNode.element + ';');
//        currNode = save;
////        console.log('        currNode = save:' + save + ';');
//        console.log(currNode);
//    }
////    console.log(prev.element);
////    console.log(currNode);
//    currNode = prev;
////    return currNode;
//}

/* -------------------------------------------------------------------------------------------------------------
 * TESTING:    Add Two Numbers Return Sum as Single Linked List
 */
var list1 = new LList();
list1.push("3");
list1.push("1");
list1.push("5");
//list1.display();

list1.reverse();

var list2 = new LList();
list2.push("5");
list2.push("9");
list2.push('2');
//console.log();

//addTwoLists(list1.head.next, list2.head.next);
//
//
///* -------------------------------------------------------------------------------------------------------------
// * Algorithm:  Add Two Numbers Return Sum as Single Linked List
// *
// * Example: http://bit.ly/1H1E8Ky
// * 
// * Doesn't work :/
// */
//function addTwoLists(l1, l2) {
//    var carry = 0;
//
//    var newHead = new Node(0);
//    var p1 = l1;
//    var p2 = l2;
//    var p3 = newHead;
//
//    while (p1 != null || p2 != null) {
//        if (p1 != null) {
//            carry += p1.element;
//            p1 = p1.next;
//        }
//
//        if (p2 != null) {
//            carry += p2.element;
//            p2 = p2.next;
//        }
//
//        p3.next = new Node(carry % 10);
//        p3 = p3.next;
//        carry /= 10;
//    }
//
//    if (carry == 1)
//        p3.next = new ListNode(1);
//
//    return newHead.next;
//
//}
//
//// 
//// 3->1->5
//// 5->9->2
//// 
//// 1. 
//// 
//
///* -------------------------------------------------------------------------------------------------------------
// * TESTING:    Add Two Numbers Return Sum as Single Linked List
// */
//var list1 = new LList();
//list1.push("3");
//list1.push("1");
//list1.push("5");
////console.log();
//
//var list2 = new LList();
//list2.push("5");
//list2.push("9");
//list2.push('2');
////console.log();
//
//addTwoLists(list1.head.next, list2.head.next);



/* -------------------------------------------------------------------------------------------------------------
 * Algorithm:  Add Two Numbers Return Sum as Single Linked List
 *
 * Example: http://bit.ly/1H1E8Ky
 *
 * Cracking the Coding Interview Approach... :/ didn't work
 */
//function addTwoLists(l1, l2, carry) {
//    
//    if (l1 == null && l2 == null) {
//        return null;
//    }
//    var currNode1 = l1;
//    var currNode2 = l2;
//    
//    var value = carry;
//    if (l1 != null) {
//        value += l1.element;
//    }
//    if (l2 != null) {
//        value += l2.element;
//    }
//    var newNode = new Node(value % 10);
//    var more = addTwoLists(l1 == null ? null : l1.next,
//                           l2 == null ? null : l1.next,
//                           value > 10 ? 1 : 1);
//    newNode.next = more;
//    console.log(newNode.element);
//    return newNode;
//}


/* -------------------------------------------------------------------------------------------------------------
 * TESTING:    Add Two Numbers Return Sum as Single Linked List
 */
//var list1 = new LList();
//list1.push("3");
//list1.push("1");
//list1.push("5");
////console.log();
//
//var list2 = new LList();
//list2.push("5");
//list2.push("9");
//list2.push('2');
////console.log();
//
//addTwoLists(list1.head.next, list2.head.next, 0);









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
    this.tail = this.head; // this.head << circly linked list, should be null?
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.findPrevious = findPrevious;
    this.display = display;
    //    this.findNthToLast = findNthToLast;
    //    this.searchAndRemove = searchAndRemove;
    this.push = push;
    this.getData = getData;
    this.setData = setData;
    this.reverse = reverse;
}

/* Get Data */
function getData() {
    return this.element;
}

/* Set Data */
function setData(newElement) {
    this.element = newElement;
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