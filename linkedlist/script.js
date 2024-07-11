class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  getHead() {
    return this.head;
  }
  addNode(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }
  prepend(val) {
    const newNode = new Node(val);
    newNode.nextNode = this.head;
    this.head = newNode; // Update the head to the new node
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.nextNode;
    }
    return count;
  }
  tail() {
    let node = this.head;
    while (node.nextNode !== null) {
      node = node.nextNode;
    }
    return node;
  }

  at(index) {
    let count = 0;
    let node = this.head;
    while (node) {
      if (count === index) {
        return node;
      }
      count++;
      node = node.nextNode;
    }
  }
  pop() {
    let node = this.head;
    while (node.nextNode.nextNode != null) {
      node = node.nextNode;
    }
    node.nextNode = null;
  }
  contains(value) {
    let node = this.head;
    while (node) {
      if (node.val === value) return true;
      node = node.nextNode;
    }
    return false;
  }
  find(value) {
    let count = 0;
    let node = this.head;
    while (node) {
      if (node.val === value) return count;
      node = node.nextNode;
      count++;
    }
  }
  toString() {
    let node = this.head;
    let str = "";
    while (node.nextNode != null) {
      str += node.val + "->";
      node = node.nextNode;
    }
    str += node.val;
    return str;
  }
  insertAt(value, index) {
    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }
    let newNode = new Node(value);
    let node = this.head;
    let count = 0;
    while (node) {
      if (count == index - 1) {
        newNode.nextNode = node.nextNode; // Link the new node to the next node
        node.nextNode = newNode;
      }
      count++;
      node = node.nextNode;
    }
  }
  removeAt(index) {
    let count = 0;
    let node = this.head;
    while (node) {
      if (count == index - 1) {
        node.nextNode = node.nextNode.nextNode;
      }
      count++;
      node = node.nextNode;
    }
  }
}
class Node {
  constructor(val) {
    this.val = val;
    this.nextNode = null;
  }
}
const node1 = new Node(2);
const node2 = new Node(5);
node1.nextNode = node2;
let list = new LinkedList(node1);
list.addNode(7);
list.prepend(1);
list.pop();
console.log(list);
console.log(list.tail());
console.log(list.getHead());
console.log(list.at(0));
console.log(list.contains(10));
console.log(list.find(5));
console.log(list.toString());
list.insertAt(3, 1);
console.log(list.toString());
list.removeAt(1);
console.log(list.toString());
