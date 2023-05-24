// Define a node class
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Define a binary tree class
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Function to find the Lowest Common Ancestor of two nodes in a binary tree
    findLowestCommonAncestor(node, value1, value2) {
      if (!node) {
        return null; // If the current node is null, return null
      }
  
      if (node.value === value1 || node.value === value2) {
        return node.value; // If either value1 or value2 matches the current node's value, return the value
      }
  
      // Recursively find the LCA in the left and right subtrees
      const leftLCA = this.findLowestCommonAncestor(node.left, value1, value2);
      const rightLCA = this.findLowestCommonAncestor(node.right, value1, value2);
  
      if (leftLCA && rightLCA) {
        return node.value; // If both leftLCA and rightLCA are not null, the current node is the LCA
      }
  
      return leftLCA || rightLCA; // Return the non-null value among leftLCA and rightLCA
    }
  }
  
  // Create a binary tree
  let tree = new BinaryTree();
  tree.root = new Node(3);
  tree.root.left = new Node(6);
  tree.root.right = new Node(8);
  tree.root.left.left = new Node(2);
  tree.root.left.right = new Node(11);
  tree.root.left.right.left = new Node(9);
  tree.root.left.right.right = new Node(5);
  tree.root.right.right = new Node(13);
  tree.root.right.right.left = new Node(7);
  
  // Find the lowest common ancestor of two nodes
  const value1 = 9;
  const value2 = 5;
  const lowestCommonAncestor = tree.findLowestCommonAncestor(tree.root, value1, value2);
  
  // Print the lowest common ancestor
  console.log('Lowest Common Ancestor:', lowestCommonAncestor);
  