export default class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    this.head = Node(value, this.head);
  }

  append(value) {
    if (this.head == null) this.prepend(value);
    else {
      let current = this.head;
      while (current.nextNode) current = current.nextNode;

      current.nextNode = Node(value);
    }
  }

  size() {
    let counter = 0;
    let current = this.head;

    while (current) {
      current = current.nextNode;
      ++counter;
    }

    return counter;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let tail = this.head;
    while (tail) tail = tail.nextNode;
    return tail;
  }

  at(index) {
    if (index > this.size()) return null;
    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.nextNode;
      ++counter;
    }
    return current;
  }

  pop() {
    let current = this.head;

    if (!current) return;

    if (!current.nextNode) {
      this.head = null;
      return;
    }

    while (current.nextNode.nextNode) current = current.nextNode;

    current.nextNode = null;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value == value) return true;
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this.head;
    let counter = 1;

    while (current) {
      if (current.value == value) return counter;
      ++counter;
      current = current.nextNode;
    }

    return null;
  }

  toString() {
    let current = this.head;
    let string = '';

    while (current) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    if (!current) string += 'null';

    console.log(string);
  }

  insertAt(value, index) {
    if (index < 1 || index > this.size()) return;
    if (index == 1) {
      this.prepend(value);
      return;
    }

    let counter = 2;
    let current = this.head;

    while (counter < index) {
      current = current.nextNode;
      ++counter;
    }

    current.nextNode = Node(value, current.nextNode);
  }

  removeAt(index) {
    if (index < 1 || index > this.size()) return;
    let current = this.head;

    if (index == 1) {
      this.head = current.nextNode;
    }

    let counter = 2;
    while (counter < index) {
      current = current.nextNode;
      ++counter;
    }
    current.nextNode = current.nextNode.nextNode;
  }
}

const Node = (value = null, nextNode = null) => {
  return { value, nextNode };
};
