// https://www.youtube.com/watch?v=8mJ-OhcfpYg

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    temp = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > temp) {
      // move elements to the right
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
}

insertionSort(numbers);
console.log(numbers);
