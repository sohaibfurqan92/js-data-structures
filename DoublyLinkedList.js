class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  // add a node to the end of the linked list
  append(value) {
    const newNode = {
      value,
      next: null,
      prev: null,
    };

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  // add a node to the beginning of the linked list
  prepend(value) {
    const newNode = {
      value,
      next: null,
      prev: null,
    };

    newNode.prev = null;
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  // add a node to the specified index
  insert(index, value) {
    const newNode = {
      value,
      next: null,
      prev: null,
    };

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;

    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = holdingPointer;
    holdingPointer.prev = newNode;
    this.length++;
  }

  // remove a node from the specified index
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next.next;

    leader.next = follower;
    follower.prev = leader;
    this.length--;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  printList() {
    let listArray = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      listArray.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(listArray);
  }
}

const myLinkedList = new DoublyLinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1); // [1,10,5,16]
myLinkedList.insert(2, 99); // [1,10,99,5,16]
myLinkedList.insert(3, 101); // [1,10,99,101,5,16]
myLinkedList.remove(2); // [1,10,101,5,16]

myLinkedList.printList();
