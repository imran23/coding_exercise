// Define a node class
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Create a binary tree
let root = new Node(1);
console.log('Root:', root); // Expected output: Root: Node { value: 1, left: null, right: null }

root.left = new Node(2);
console.log('Left Child of Root:', root.left); // Expected output: Left Child of Root: Node { value: 2, left: null, right: null }

root.right = new Node(3);
console.log('Right Child of Root:', root.right); // Expected output: Right Child of Root: Node { value: 3, left: null, right: null }

root.left.left = new Node(4);
console.log('Left Child of Left Child of Root:', root.left.left); // Expected output: Left Child of Left Child of Root: Node { value: 4, left: null, right: null }

root.left.right = new Node(5);
console.log('Right Child of Left Child of Root:', root.left.right); // Expected output: Right Child of Left Child of Root: Node { value: 5, left: null, right: null }