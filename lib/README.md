/* 
 Returns true if the given tree is a binary search tree 
 (efficient version). 
*/ 
int isBST2(struct node* node) { 
  return(isBSTUtil(node, INT_MIN, INT_MAX)); 
}
/* 
 Returns true if the given tree is a BST and its 
 values are >= min and <= max. 
*/ 
int isBSTUtil(struct node* node, int min, int max) { 
  if (node==NULL) return(true);

  // false if this node violates the min/max constraint 
  if (node->data<min || node->data>max) return(false);

  // otherwise check the subtrees recursively, 
  // tightening the min or max constraint 
  return 
    isBSTUtil(node->left, min, node->data) && 
    isBSTUtil(node->right, node->data+1, max) 
  ); 
} # Python Concepts


Resources
=========
 - [Needle.js](https://github.com/nickzuber/needle)
