class MyArray{
  constructor(){
    this.data={};
    this.length=0;
  }

  // add an item to the end of array
  push(item){
    this.data[this.length]= item;
    this.length++;
  }

    // remove from the end of array
  pop(){
    const item = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return item;
  }

  deleteAtIndex(index){
    let item = null;

    // if index > than the last index, delete the last item
    if(index>this.length-1){
      item= this.data[this.length-1];
      delete this.data[this.length-1];
    } else{
      // delete the item and shift remaining elements left
     item = this.data[index];
    delete this.data[index];
    for(let i=index;i<this.length;i++){
      this.data[i]=this.data[i+1]
    }
    delete this.data[this.length-1];
    }

    
    this.length--;
    return item;
  }



    insertAtIndex(index,value){
    let item = null;

    // if index > than the last index, insert at the last index
    if(index>this.length-1){
      this.data[this.length]= item;
    } else{
      // catch a reference to the value at index
      // shift other elements right by 1
         // delete the old value at index
      // insert the new value at index
      for(let i=this.length; i>index;i--){
        this.data[i] = this.data[i-1];
      }
      delete this.data[index];
      this.data[index] = value;
    }

    
    this.length++;
  }
}

const newArray = new MyArray();
newArray.push(2);
newArray.push(4);
newArray.push(6);
newArray.push(8); // [2,4,6,8]
newArray.deleteAtIndex(1); //[2,6,8]
newArray.insertAtIndex(1,200); //[2,200,6,8]
newArray.insertAtIndex(3,100); //[2,200,6,100,8]
// newArray.deleteAtIndex(0); //[6,8]
// newArray.deleteAtIndex(23); //[6,]


console.log(newArray);
