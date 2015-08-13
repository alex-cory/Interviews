/* ## Recursion on Linked Lists
 *
 * Resource: http://bit.ly/1aoMf6T
 *
 */


/* -------------------------------------------------------------------------------------------------------------
 * Length of Linked List         RECURSIVE ACCESSOR METHOD
 */
function length(currNode) {
    if (currNode == null) {
        return 0;
    } else {
        return 1 + length(currNode.next);
    }
}

//var letters = new LList();
//letters.push('A');
//letters.push('B');
//letters.push('C');
//letters.push('E');
//letters.push('F');
//console.log(length(letters.head.next));


/* -------------------------------------------------------------------------------------------------------------
 * Sum of All Values in Linked List         RECURSIVE ACCESSOR METHOD
 */
function sum(currNode) {
    if (currNode.next == null) {
        return 0;
    } else {
        return parseInt(currNode.next.element) + sum(currNode.next);
    }
}
//var letters = new LList();
//letters.push('1');
//letters.push('2');
//letters.push('3');
//console.log(sum(letters.head));
 

/* -------------------------------------------------------------------------------------------------------------
 * Print the Values in Linked List         RECURSIVE ACCESSOR METHOD
 */
function print(currNode) {
    if (currNode == null) {
        return;
    } else {
        console.log(currNode.element);
        print(currNode.next);
    }
}
//var letters = new LList();
//letters.push('A');
//letters.push('B');
//letters.push('C');
//print(letters.head.next);

/* -------------------------------------------------------------------------------------------------------------
 * Print in Reverse the Values in Linked List         RECURSIVE ACCESSOR METHOD
 *
 * 2 represented below
 */
// longer version
function reversePrint(currNode) {
    if (currNode == null) {
        return;
    } else {
        reversePrint(currNode.next);
        console.log(currNode.element);
    }
}

// more elegant and cut down
function reversePrint(currNode) {
    if(currNode != null) {
        reversePrint(currNode.next);
        console.log(currNode.element);
    }
}
//var letters = new LList();
//letters.push('A');
//letters.push('B');
//letters.push('C');
//letters.push('D');
//letters.push('E');
//reversePrint(letters.head.next);

/* -------------------------------------------------------------------------------------------------------------
 * Linear Search         RECURSIVE ACCESSOR METHOD
 *
 * 2 represented below
 */
function search(currNode, item) {
    if (currNode == null) {
        return null;
    } else {
        if (currNode.element == item) {
            console.log(currNode.element);
            return currNode;
        } else {
            return search(currNode.next, item);
        }
    }
}

function search(currNode, item) {
    if (currNode == null || currNode.element == item) {
        console.log(currNode.element);
        return currNode;
    } else {
        return search(currNode.next, item);
    }
}
//var letters = new LList();
//letters.push('A');
//letters.push('B');
//letters.push('C');
//letters.push('D');
//letters.push('E');
//search(letters.head.next, 'C');

/* -------------------------------------------------------------------------------------------------------------
 * Copy Linked List         RECURSIVE ACCESSOR METHOD
 */
function copy(currNode) {
    if (currNode == null) {
        return null;
    } else {
        var newNode = new Node(currNode.element + ' copy');
        newNode.next = copy(currNode.next);
        console.log(newNode.element);
        return newNode;
    }
}

//var letters = new LList();
//letters.push('A');
//letters.push('B');
//letters.push('C');
//letters.push('D');
//letters.push('E');
//copy(letters.head.next);


/* -------------------------------------------------------------------------------------------------------------
 * Insert on Rear        RECURSIVE MUTATOR METHOD
 */
// Method 1: not as pretty
function insertRear(currNode, newElement) {
    if (currNode == null) {
        return new Node(newElement);;
    } else {
        currNode.next = insertRear(currNode.next, newElement);
        return currNode;
    }
}
// Method 2: much prettier because it has 1 less return
function insertRear(currNode, newElement) {
    if (currNode == null) {
        currNode = new Node(newElement);
    } else {
        currNode.next = insertRear(currNode.next, newElement);
    }
    return currNode;
}
//var letters = new LList();
//letters.push('A');
//letters.push('=');
//letters.push('Z');
//letters.push('D');
//letters.push('1');
//insertRear(letters.head.next, 'F');
//letters.display();


/* -------------------------------------------------------------------------------------------------------------
 * Insert into Ordered List Linked List         RECURSIVE MUTATOR METHOD
 */
// Method 1: 2 return statements
function insertOrdered(currNode, newElement) {
    if (currNode == null || newElement < currNode.element) {
        return new Node(newElement);
    } else {
        currNode.next = insertOrdered(currNode.next, newElement);
        return currNode;
    }
}
// Method 2: 1 return statement
function insertOrdered(currNode, newElement) {
    if (currNode == null || newElement < currNode.element) {
        currNode = new Node(newElement);
    } else {
        currNode.next = insertOrdered(currNode.next, newElement);
    }
    return currNode;
}
//var letters = new LList();
//letters.push('A');
//letters.push('B');
//letters.push('Z');
//letters.push('D');
//letters.push('R');
//insertOrdered(letters.head.next, 'coo');
//letters.display();



/* -------------------------------------------------------------------------------------------------------------
 * Remove Values From a Linked List         RECURSIVE MUTATOR METHOD
 */
// Remove 1st
function removeFirst(currNode, item) {
    if (currNode != null) {
        if (currNode.element == item) {
            currNode = currNode.next;
        } else {
            currNode.next = removeFirst(currNode.next, item);
        }
    }
    return currNode;
}
// Remove All
function removeAll(currNode, item) {
    if (currNode != null) {
        if (currNode.element == item) {
            currNode = removeAll(currNode.next, item);
        } else {
            currNode.next = removeAll(currNode.next, item);
        }
    }
    return currNode;
}
//var letters = new LList();
//letters.push('A');
//letters.push('B');
//letters.push('Z');
//letters.push('B');
//letters.push('R');
////removeFirst(letters.head.next, 'B');
//removeAll(letters.head.next, 'B');
//letters.display();














/* -------------------------------------------------------------------------------------------------------------
 * Linked List Class 1
 * (http://bit.ly/1GylgEb)
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
    var currNode = this.head;
    while (!(currNode.next === null) &&
        (currNode.next.element !== item)) {
        currNode = currNode.next;
    }
    return currNode;
}

/* Display Function */
function display() {
    var currNode = this.head;
    while (!(currNode.next === null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

/* Push Function */
function push(newElement) {
    var tailNode = this.tail; // last node on linked list
    tailNode.next = new Node(newElement); // adding new node after tail node
    this.tail = tailNode.next; // updating the tail of the list to the newly created node

}

/* -------------------------------------------------------------------------------------------------------------
 * TESTING:    Add Two Numbers Return Sum as Single Linked List
 */
//var letters = new LList();
//letters.push("A");
//letters.push("B");
//letters.push("C");
//letters.push("D");
//letters.push("E");
//letters.searchAndRemove('E');
console.log();
//letters.display();