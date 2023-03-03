const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function BubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        // swap items
        const temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
}

BubbleSort(numbers);
console.log(numbers);
