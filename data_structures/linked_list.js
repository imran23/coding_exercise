class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Add element at the end
    add(value) {
      let node = new Node(value);
  
      if (!this.head) {
        this.head = node;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
  
      this.size++;
    }
  
    // Remove element at the given index
    removeAt(index) {
      if (index < 0 || index >= this.size) {
        return null;
      }
  
      let current = this.head;
      let previous = null;
  
      if (index === 0) {
        this.head = current.next;
      } else {
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
  
      this.size--;
      return current.value;
    }
  
    // Get element at the given index
    get(index) {
      if (index < 0 || index >= this.size) {
        return null;
      }
  
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
  
      return current.value;
    }
  
    // Get size of the linked list
    getSize() {
      return this.size;
    }
  }

// assume we have received data from an API call
const apiData = [{id: 1, name: "John"}, {id: 2, name: "Jane"}, 
      {id: 3, name: "Bob"}];

// create a new linked list
const list = new LinkedList();

// add the data to the linked list
apiData.forEach(data => list.add(data));

// get the size of the linked list
console.log('list size: ', list.getSize()); // output: 3

// get the second element of the linked list
console.log('item at position 1 in the array: ', list.get(1)); // output: {id: 2, name: "Jane"}

// remove the first element of the linked list
list.removeAt(0);

// get the new size of the linked list
console.log('list size after removing iteam at positon 0 in the array: ', list.getSize()); // output: 2

// get the first element of the linked list
console.log('iteam at position 0 in the array: ', list.get(0)); // output: {id: 2, name: "Jane"}