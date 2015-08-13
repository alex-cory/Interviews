/* 
 * Second Largest in Binary Search Tree:
 *
 * Write a function to find the 2nd largest element in a binary search tree.
 */

// Good BST
var binary_search_tree = [100,[90,[80],[95]],
  [110,[105],
    [115]]];
// Bad BST
// var binary_search_tree = [100,[101,[80],[95]],[110,[105],[115]]];

function is_second_largest_in_tree(tree) {

  var lastvalue = 0;
  if (typeof tree[2] === 'undefined') {
    return 1;
  } else {
    lastvalue = is_second_largest_in_tree(tree[2]);
  }
  if (lastvalue === 1) {
    return tree[0];
  }
  return lastvalue;
}

console.log(is_second_largest_in_tree(binary_search_tree));
