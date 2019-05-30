// singly-linked

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    this.head = node;
  }

  setTail(node) {
    this.tail = node;
  }

  addToHead(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.setHead(newNode);
      this.setTail(newNode);
      return;
    }
    newNode.next = this.head;
    this.setHead(newNode);
  }

  addToTail(val) {
    const newNode = new Node(val);
    if (!this.tail) {
      // must also means no head
      this.addToHead(newNode);
      this.setTail(newNode);
      return;
    }
    this.tail.next = newNode;
    this.setTail(newNode);
  }

  indexOf(val) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    let count = 0;
    while (current) {
      if (current.value === val) {
        return count;
      }
      count++;
      current = current.next;
    }
    return -1;
  }

  insertBefore(val, node) {
    const newNode = new Node(val);
    let current = this.head;
    let prev = null;

    while (current) {
      if (current.value === node.value) {
        if (current === this.head) {
          this.addToHead(val);
          return;
        }
        newNode.next = prev.next;
        prev.next = newNode;
        return;
      }
      prev = current;
      current = current.next;
    }
    return new Error("Node does not exist");
  }

  insertAfter(val, node) {
    const newNode = new Node(val);
    let current = this.head;

    while (current) {
      if (current.value === node.value) {
        newNode.next = current.next;
        current.next = newNode;
        if (current === this.tail) {
          this.setTail(newNode);
        }
        return;
      }
      current = current.next;
    }
    return new Error("Node does not exist");
  }

  removeBefore(node) {
    let current = this.head;
    let prev = null;
    while (current) {
      if (current.value === node.value) {
        if (current === this.head) {
          return new Error("Cannot remove before head");
        }
        prev.next = current.next;
        if (current === this.tail) {
          this.setTail(prev);
        }
        return;
      }
      prev = current;
      current = current.next;
    }
    return new Error("Node does not exist");
  }

  removeAfter(node) {
    let current = this.head;
    while (current) {
      if (current === this.tail) {
        return;
      } else if (current.value === node.value) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
    return new Error("Node does not exist");
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;

    while (current) {
      if (!prev) {
        this.tail = current;
      }
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}
