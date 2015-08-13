/**
 * Balanced Binary Tree
 */

// Balanced Tree
// var binary_tree = [ 1, [ 2, [ 3, [ 4, [ 5 ], [ 5 ] ], [ 4 ] ] , [ 3, [ 4 ], [ 4 ] ] ], [ 2, [ 3, [ 4 ], [ 4 ] ], [ 3, [ 4 ], [ 4 ] ] ] ];
// Unbalanced tree
var binary_tree = [ 1, [ 2, [ 3, [ 4, [ 5 ], [ 5 ] ], [ 4 ] ] ], [ 2, [ 3, [ 4 ], [ 4 ] ], [ 3, [ 4 ], [ 4 ] ] ] ];

function super_balance(tree, is_sub_node) {
  var left = tree[1],
      right = tree[2],
      left_depth = left ? super_balance(left, true) : 0,
      right_depth = right ? super_balance(right, true) : 0;

  if (Math.abs(left_depth - right_depth) >= 2 
      || left_depth === false 
      || right_depth === false) 
      return false;

  return !is_sub_node ? 
    true : 
    ++(Math.max(left_depth, right_depth) || 0);
}

console.log(super_balance(binary_tree));
