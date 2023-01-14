// custom array

class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // push to the end of array
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  // remove the last element from the array

  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  // insert item at index
  insertItemAtIndex(index, item) {
    // assign each item to the next index to make space for insertion
    for (let i = index; i < this.length; i++) {
      this.data[i + 1] = this.data[i];
    }
    this.data[index] = item;
    this.length++;
  }

  // remove item from index
  removeItemFromIndex(index) {
    // assign each item to the next index to make space for insertion
    delete this.data[this.index];
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new Array();
myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.push(4); // [1,2,3,4]
myArray.pop(); // [1,2,3]
myArray.insertItemAtIndex(2, 99); // [1,2,99,3]
myArray.removeItemFromIndex(1); //1,99,3
console.log(myArray);
