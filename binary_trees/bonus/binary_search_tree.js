class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const insert = (root, val) => {
  if (root === null) {
    return new Node(val);
  }
  if (val < root.val) {
    root.left = insert(root.left, val);
  } else {
    root.right = insert(root.right, val);
  }
  return root;
};

const find_lca_distance = (root, node1, node2) => {
  if (root === null) {
    return [null, -1];
  }
  if (root.val === node1) {
    return [node1, 0];
  }
  if (root.val === node2) {
    return [node2, 0];
  }
  const [left_lca, left_distance] = find_lca_distance(root.left, node1, node2);
  const [right_lca, right_distance] = find_lca_distance(root.right, node1, node2);
  if (left_lca !== null && right_lca !== null) {
    return [root.val, left_distance + right_distance + 2];
  }
  if (left_lca !== null) {
    return [left_lca, left_distance + 1];
  } else {
    return [right_lca, right_distance + 1];
  }
};

const find_distance = (values, n, node1, node2) => {
  let root = null;
  for (const val of values) {
    root = insert(root, val);
  }
  const [lca, distance] = find_lca_distance(root, node1, node2);
  if (lca !== null) {
    return distance;
  } else {
    return -1;
  }
};

// Usage example
const values = [5, 3, 6, 2, 4];
const node1 = 3;
const node2 = 7;
const distance = find_distance(values, values.length, node1, node2);
console.log(`Distance between ${node1} and ${node2}:`, distance);
