class LinkedList {
  constructor() {
    this.value = null;
    this.head = null;
  }

  prepend(value) {
    if (!this.value) this.value = value;
    else this.head = Node(value, this.head);
  }

  append(value) {
    if (this.head == null) this.prepend(value);
    else {
      let tmp = this.head;
      while (tmp.nextNode) tmp = tmp.nextNode;

      tmp.nextNode = Node(value);
    }
  }

  size() {
    let counter = 1;
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

  toString() {
    let current = this.head;
    let string = `( ${this.value} ) -> `;

    while (current) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    if (!current) string += 'null';

    console.log(string);
  }
}

const Node = (value = null, nextNode = null) => {
  return { value, nextNode };
};

const list = new LinkedList();

list.append('hooray');
list.append('for');
list.append('boobies');

list.toString();
list.size();

console.log(list.at(1));
