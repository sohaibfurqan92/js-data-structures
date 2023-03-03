class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // see the top(last) element
  peek() {
    return this.top;
  }

  // add to stack
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
  }

  // remove last item from stack
  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.top = null;
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
  }
}

const myStack = new Stack();
myStack.push('Google');
myStack.push('Amazon');
myStack.push('Daraz');
myStack.pop();
console.log(myStack);
