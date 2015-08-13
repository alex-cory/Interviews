/*
* Linked List Class
 *
 * VIDEOS:
 * - http://bit.ly/1GylkDP
 * - http://bit.ly/1GyllHU
 *
 * NOTES:
 * -  two properties - data and successor
 * - pointer - was a machine address that gave the exact location of the next node in the list
 *
 * RESOURCES:
 * - Simple Javascript Linked List: http://bit.ly/1FQ8XQJ
 * - JS Linked List JSFiddle: http://jsfiddle.net/adrienne/dQEh9/
 * - Reverse Linked List: http://bit.ly/1IIaRGN
 * - Reverse Linked List 2: http://bit.ly/1IIb0Kq
 * - Algorithms & Data Structures in Javascript: https://github.com/nzakas/computer-science-in-javascript
 *
 */


/* -------------------------------------------------------------------------------------------------------------
 * Linked List Class 1
 * (http://bit.ly/1GylgEb)
 */

/* Node Class */
function Node (element) {
    this.element = element;
    this.next = null;
}

/* Constructor Function || Linked List Class */
function LList () {
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
function find (item) {
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
function remove (item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next === null)) {
        prevNode.next = prevNode.next.next;
    }
}

/* Find Previous Function */
function findPrevious (item) {
    var currNode = this.head;
    while (!(currNode.next === null) &&
            (currNode.next.element !== item)) {
        currNode = currNode.next;
    }
    return currNode;
}

/* Display Function */
function display () {
    var currNode = this.head;
    while (!(currNode.next === null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

/* Push Function */
function push (newElement) {
    var tailNode = this.tail; // last node on linked list
    tailNode.next = new Node(newElement); // adding new node after tail node
    this.tail = tailNode.next; // updating the tail of the list to the newly created node

}
/* -------------------------------------------------------------------------------------------------------------
 * Playing Around with Linked List 1
 */
var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russville", "Conway");
cities.insert("Carlisle", "Russville");
cities.insert("Alma", "Carlisle");
cities.display();
cities.remove("Alma");
cities.display();


/* -------------------------------------------------------------------------------------------------------------
 * Linked List Class 2
 * (http://bit.ly/1O0Ail4)
 */
function List() {
    List.makeNode = function () {
        return {
            data: null,
            next: null
        };
    };

    this.start = null;
    this.end = null;

    /*
     * method for adding new nodes to the linked list
     */
    this.add = function (data) {
        // if their isn't a head/start node
        if (this.start === null) {
            // make a start node
            this.start = List.makeNode();
            // since there's only 1 node, set it to also be the last one
            this.end = this.start;
            // otherwise if their is a head/start node
        } else {
            // make a new end node and set it's next to null   
            this.end.next = List.makeNode(); // <=CONFUSING
            // 
            this.end = this.end.next; // <=CONFUSING
        };
        // set the last node's data to be the data passed in via the argument
        this.end.data = data;
    };


    /*
     * method for deleting nodes from the linked list
     */
    this.delete = function (data) {
        // current node
        var current = this.start;
        var previous = this.start;
        while (current != null) {
            if (data === current.data) {
                if (current === this.start) {
                    this.start = current.next;
                    return;
                }
                if (current === this.end) {
                    this.end = previous;
                    previous.next = current.next;
                    return;
                }
            }
            previous = current;
            current = current.next;
        }
    };

    this.insertAsFirst = function (d) {
        var temp = List.makeNode();
        temp.next = this.start;
        this.start = temp;
        temp.data = d;
    };

    this.insertAfter = function (t, d) {
        var current = this.start;
        while (current !== null) {
            if (current.data === t) {
                var temp = List.makeNode();
                temp.data = d;
                temp.next = current.next;
                if (current === this.end) this.end = temp;
                current.next = temp;
                return;
            }
            current = current.next;
        }
    };

    this.item = function (i) {
        var current = this.start;
        while (current !== null) {
            i--;
            if (i === 0) return current;
            current = current.next;
        }
        return null;
    };

    this.each = function (f) {
        var current = this.start;
        while (current !== null) {
            f(current);
            current = current.next;
        }
    };
}
/* -------------------------------------------------------------------------------------------------------------
 * Playing Around with Linked List 2
 */
//var list = new List();
//for (var i = 1; i <= 4; i++) {
//    list.add(i);
//};
////list.delete(1);
////console.log(list);
//list.each(function (item) {
//    console.log(item.data);
//});