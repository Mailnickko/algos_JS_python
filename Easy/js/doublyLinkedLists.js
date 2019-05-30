class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getHead() {
    return this.head;
  }

  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  setTail(node) {
    if (this.tail === null) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }
    this.remove(nodeToInsert); // remove the node in the list first
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev === null) {
      // must be the head
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;

    if (node.next === null) {
      // must be the tail
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    let curr = this.head;
    let currPos = 1;

    while (curr !== null && currPos !== position) {
      curr = curr.next;
      currPos++;
    }

    // we're either at position, or at tail
    if (curr !== null) {
      this.insertBefore(curr, nodeToInsert);
    } else {
      // must be tail
      this.setTail(nodeToInsert);
    }
  }

  removeNodesWithValue(val) {
    let curr = this.head;
    while (curr !== null) {
      let nodeToRemove = curr;
      curr = curr.next;
      if (nodeToRemove.value === val) {
        this.remove(nodeToRemove);
      }
    }
  }

  remove(node) {
    if (node === this.head) {
      this.head = this.head.next;
    }
    if (node === this.tail) {
      this.tail = this.tail.prev;
    }
    this.removeNodeBindings(node);
  }

  containsNodeWithValue(value) {
    let curr = this.head;
    while (curr !== null && curr.value !== value) {
      curr = curr.next;
    }
    return !!curr;
  }

  removeNodeBindings(node) {
    if (node.prev !== null) {
      node.prev.next = node.next;
    }
    if (node.next !== null) {
      node.next.prev = node.prev;
    }
    node.next = null;
    node.prev = null;
  }
}

const myDDL = new DoublyLinkedList();
const first = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);

myDDL.setHead(first);
myDDL.insertAfter(first, second);
myDDL.insertAfter(second, third);
myDDL.insertAfter(third, fourth);
myDDL.insertAfter(fourth, fifth);

myDDL.insertAfter(third, fifth);

const getAllValues = node => {
  const vals = [];

  while (node) {
    vals.push(node.value);
    node = node.next;
  }
  return vals;
};

getAllValues(myDDL.getHead());

debugger;
myDDL.insertAfter(third, first);
