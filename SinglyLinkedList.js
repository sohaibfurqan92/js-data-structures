// 10 ->5 -> 16

// class Node{
//   constructor(value){
//     this.value=value,
//     this.next = null;
//   }
// }

class SinglyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // add a node to the end of the linked list
  append(value) {
    const newNode = {
      value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // add a node to the beginning of the linked list
  prepend(value) {
    const newNode = {
      value,
      next: null,
    };

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  // add a node to the specified index
  insert(index, value) {
    const newNode = {
      value,
      next: null,
    };

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;

    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }

  // remove a node from the specified index
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const nodeToRemove = leader.next;

    leader.next = nodeToRemove.next;
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

const myLinkedList = new SinglyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(20);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2, 99); // 1,10,99,5,20
myLinkedList.remove(3); //1,10,99,20
myLinkedList.printList();
myLinkedList.remove(2); //1,10,20
myLinkedList.printList();
