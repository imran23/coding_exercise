// Define the TreeNode class
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Define the BinaryTree class
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Method to insert a value into the binary tree
    insert(value) {
      let node = new TreeNode(value);
  
      if (!this.root) {
        this.root = node;
        return;
      }
  
      let current = this.root;
  
      while (current) {
        if (value < current.value) {
          if (!current.left) {
            current.left = node;
            return;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = node;
            return;
          }
          current = current.right;
        }
      }
    }
  }
  
  // Create an instance of BinaryTree
  let tree = new BinaryTree();
  
  // Insert values into the binary tree
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  
  console.log('Binary Tree:', tree); // Print the binary tree object
  console.log('Root value:', tree.root.value); //  Print the root value

  // Print the left and right child values of the root
  console.log('Left child value of root:', tree.root.left.value); 
  console.log('Right child value of root:', tree.root.right.value);
  
  //Traverse the binary tree and print all values:
  const inorderTraversal = (node) => {
    if (node) {
      inorderTraversal(node.left);
      console.log('Node value:', node.value);
      inorderTraversal(node.right);
    }
  }
  
  inorderTraversal(tree.root);
  