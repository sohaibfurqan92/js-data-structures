class Stack {
  constructor() {
    this.array = [];
  }

  // see the top(last) element
  peek() {
    return this.array[this.array.length - 1];
  }

  // add to stack
  push(value) {
    this.array.push(value);
  }

  // remove last item from stack
  pop() {
    return this.array.pop();
  }
}

const myStack = new Stack();
myStack.push('Google');
myStack.push('Amazon');
myStack.push('Daraz');
myStack.pop();
console.log(myStack);
