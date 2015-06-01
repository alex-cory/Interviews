/*
Intersection of Two Linked Lists

Question: http://bit.ly/1CCjpqp
Answer:   http://bit.ly/1FLed8f
 
Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b

begin to intersect at node c1.

Notes:
    - If the two linked lists have no intersection at all, return null.
    - The linked lists must retain their original structure after the function returns.
    - You may assume there are no cycles anywhere in the entire linked structure.
    - Your code should preferably run in O(n) time and use only O(1) memory.
*/


function LinkedList() {
    this.head = null;
}

LinkedList.prototype.add = function (value) {
    var node = {
        value: value,
        next: null
    };
    var current;

    if (this.head === null) {
        this.head = node;
    } else {
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    return node;
};

LinkedList.prototype.remove = function (node) {
    var current; 
    var value = node.value;
    if (this.head !== null) {
        if (this.head === node) {
            this.head = this.head.next;
            node.next = null;
            return value;
        }
        current = this.head;
        while (current.next) {
            if (current.next === node) {
                current.next = node.next;
                return value;
            }
            current = current.next;
        }
    }
};

var a = new LinkedList();
for (var i=1; i<3; i++) {
   a.add("a"+i);
};
var b = new LinkedList();
for (var i=1; i<4; i++) {
   b.add("b"+i);
};


list.add(4);
var obj = list.add(5);
list.remove(obj);

list.add(6);
console.log(list);
console.log(obj);
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // take headA
    // take headB

    // Brute Force:
    // traverse 1 down headA
    // traverse the whole side for headB, 
    // if none match traverse down 1 more headA
    // traverse the whole side for headB,
    // if none match traverse down 1 more headA
    // traverse the whole side for headB
    // if none match traverse down 1 more headA
    // repeat until there is a match
};