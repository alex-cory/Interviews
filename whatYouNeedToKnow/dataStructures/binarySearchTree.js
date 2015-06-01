/*
 * Binary Search Tree
 *
 * VIDEOS:
 * -
 * -
 *
 * NOTES:
 * - Binary Trees:
 *      - No more than 2 children per node (binary search tree)
 *      - Traversal Functions:
 *          1. inorder
 *          2. preorder
 *          3. postorder
 *      - Searches:
 *          1. Search for specific value
 *          2. Search for minimum
 *          3. Search for maximum
 *      - Insertions:
 *          - complicated function
 *      - Removing Nodes:
 *          - most difficult
 *          - Removal Functions
 *              1. remove
 *              2. removeNode
 *      - Counting Occurrences:
 *          -
 *
 * RESOURCES:
 * -
 * -
 * -
 * -
 * -
 * ----------------------------------------------------------------------------------------------------------------
 */

/**
 * ----------------------------------------------------------------------------------------------------------------
 * BINARY SEARCH TREE IMPLEMENTATION:
 */

/**
 * Node Class
 * @param data
 * @param left
 * @param right
 * @constructor
 */
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
    this.count = 1;
}

/**
 * Show
 * @returns {node.data|*|List.makeNode.data|string|CanvasPixelArray|Object[]}
 */
function show() {
    return this.data;
}

/**
 * Binary Search Tree Constructor Class
 * @constructor
 */
function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.remove = remove;
    this.removeNode = removeNode;
}

/**
 * Insert Function
 * @param data The data to be inserted into the
 *      binary search tree.
 */
function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    } else {
        //Set the root node to be the current node.
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            /* If the data value in the inserted node is less than the data
             * value in the current node, set the new current node to be the
             * left child of the current node. If the data value in the inserted
             * node is greater than the data value in the current node, skip to step 4. */
                if (data < current.data) {
                current = current.left;
                /* If the value of the left child of the current node is null,
                 * insert the new node here and exit the loop. Otherwise,skip to the
                 * next iteration of the loop. */
                    if (current == null) {
                    parent.left = n;
                    break;
                }
            }
            else {
                //Set the current node to be the right child of the current node.
                current = current.right;
                /* If the value of the right child of the current node is null,
                 * insert the new node here and exit the loop. Otherwise, skip
                 * to the next iteration of the loop. */
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

/**
 * ----------------------------------------------------------------------------------------------------------------
 * TRAVERSING A BINARY SEARCH TREE:
 */

/**
 * Inorder Traversal Function
 * @param node
 */
function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}

/**
 * Preorder Traversal Function
 * @param node
 */
function preOrder(node) {
    if (!(node == null)) {
        console.log(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

/**
 * Postorder Traversal Function
 * @param node
 */
function postOrder(node) {
    if (!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + " ");
    }
}
/**
 * TESTING: Inorder/Preorder Traversal Function
 *
 * Inorder traversal:
 * 3 16 22 23 37 45 99
 *
 * Preorder traversal:
 * 23 16 3 22 45 37 99
 *
 * Postorder traversal:
 * 3 22 16 37 99 45 23”
 */
//var nums = new BST();
//nums.insert(23);
//nums.insert(45);
//nums.insert(16);
//nums.insert(37);
//nums.insert(3);
//nums.insert(99);
//nums.insert(22);
//console.log("Inorder traversal: ");
//inOrder(nums.root);
//console.log("Preorder traversal: ");
//preOrder(nums.root);
//console.log("Postorder traversal: ");
//postOrder(nums.root);


/**
 * ----------------------------------------------------------------------------------------------------------------
 * SEARCHING FOR THE MIN & MAX VALUE:
 */

/**
 * Binary Search: Minimum
 * @returns {*|string}
 */
function getMin() {
    var current = this.root;
    while (!(current.left == null)) {
        current = current.left;
    }
    return current.data;
}

/**
 * Binary Search: Maximum
 * @returns {*|string}
 */
function getMax() {
    var current = this.root;
    while (!(current.right == null)) {
        current = current.right;
    }
    return current.data;
}

/**
 * Binary Search: Specific Value
 * @param data
 * @returns {*}
 */
function find(data) {
    var current = this.root;
    while (current.data != data) {
        if (data < current.data) {
            current = current.left;
        }
        else {
            current = current.right;
        }
        if (current == null) {
            return null;
        }
    }
    return current;
}

/**
 * TESTING: Binary Searches
 */
//var nums = new BST();
//nums.insert(23);
//nums.insert(45);
//nums.insert(16);
//nums.insert(37);
//nums.insert(3);
//nums.insert(99);
//nums.insert(22);
//// MINIMUM:
//var min = nums.getMin();
//console.log("The minimum value of the BST is: " + min);
//console.log("\n");
//// MAXIMUM:
//var max = nums.getMax();
//console.log("The maximum value of the BST is: " + max);
//// SPECIFIC VALUE:
//console.log("Enter a value to search for: ");
//var value = 23;
//var found = nums.find(value);
//if (found != null) {
//    console.log("Found " + value + " in the BST.");
//}
//else {
//    console.log(value + " was not found in the BST.");
//}

/**
 * ----------------------------------------------------------------------------------------------------------------
 * REMOVING NODES FROM A BINARY SEARCH TREE:
 */

/**
 * Remove Function
 * @param data
 */
function remove(data) {
    root = removeNode(this.root, data);
}

/**
 * RemoveNode Function
 * @param node
 * @param data
 * @returns {*}
 */
function removeNode(node, data) {
    if (node == null) {
        return null;
    }
    if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
            return null;
        }
        // node has no left child
        if (node.left == null) {
            return node.right;
        }
        // node has no right child
        if (node.right == null) {
            return node.left;
        }
        // node has two children
        var tempNode = getSmallest(node.right); //var max_of_array = Math.max.apply(Math, array)
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    }
    else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    }
    else {
        node.right = removeNode(node.right, data);
        return node;
    }
}


/**
 * ----------------------------------------------------------------------------------------------------------------
 * COUNTING OCCURRENCES IN A BINARY SEARCH TREE:
 */

/**
 * Update Function
 * @param data
 * @returns {*}
 */
function update(data) {
    var grade = this.find(data);
    grade.count++;
    return grade;
}

/**
 * Generate a set of grades and display them.
 * @param arr
 */
function prArray(arr) {
    console.log(arr[0].toString() + ' ');
    for (var i = 1; i < arr.length; ++i) {
        console.log(arr[i].toString() + ' ');
        if (i % 10 == 0) {
            console.log("\n");
        }
    }
}

/**
 * Generates an array
 * @param length
 * @returns {Array}
 */
function genArray(length) {
    var arr = [];
    for (var i = 0; i < length; ++i) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}

/**
 * TESTING: Counting Occurrences
 */
//var grades = genArray(100);
//prArray(grades);
//var gradedistro = new BST();
//for (var i = 0; i < grades.length; ++i) {
//    var g = grades[i];
//    var grade = gradedistro.find(g);
//    if (grade == null) {
//        gradedistro.insert(g);
//    }
//    else {
//        gradedistro.update(g);
//    }
//}
//var cont = "y";
//
//while (cont == "y") {
//    console.log("\n\nEnter a grade: ");
//    //var g = parseInt(readline()); // TODO: FIXME can't us this since it's part of spiderMondkey.js
//    var aGrade = gradedistro.find(g);
//    if (aGrade == null) {
//        print("No occurrences of " + g);
//    }
//    else {
//        print("Occurrences of " + g + ": " + aGrade.count);
//    }
//    console.log("Look at another grade (y/n)? ");
//    //cont = readline(); // TODO: FIXME can't us this since it's part of spiderMondkey.js
//}


/**
 * EXERCISES:
 *      1. Add a function to the BST class that counts the number of nodes in a BST.
 *      2. Add a function to the BST class that counts the number of edges in a BST.
 *      3. Add a max() function to the BST class that finds the maximum value in a BST.Add a min() function to the BST class that finds the minimum value in a BST.
 *      4. Write a program that stores the words from a large text file in a BST and displays the number of times each word occurs in the text.
 */
