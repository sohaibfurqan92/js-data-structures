class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  // add to end of queue
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  // remove from start of queue
  dequeue() {
    if (this.length === 0) {
      return undefined;
    }

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
  }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Samir');
myQueue.enqueue('Pavan');
myQueue.dequeue();
console.log(myQueue);
