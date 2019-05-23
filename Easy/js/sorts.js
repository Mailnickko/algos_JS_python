const array = [8, 5, 2, 9, 5, 6, 3];

// helper
const swap = (i, j, arr) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

// bubble sort
let arr = array.slice();
const bubbleSort = arr => {
  let swapped = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(i, i + 1, arr);
      swapped = true;
    }
  }
  return swapped ? bubbleSort(arr) : arr;
};
console.log("bubble", bubbleSort(arr));

// insertion sort
arr = array.slice();
const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      swap(j, j - 1, arr);
      j--;
    }
  }
  return arr;
};

arr = array.slice();
const insertionSort2 = arr => {
  for (let i = 1; i < arr.length; i++) {
    let val = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > val; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = val;
  }
  return arr;
};

console.log("insertion", insertionSort(arr));
console.log("insertion2", insertionSort2(arr));

// selection sort
arr = array.slice();
const selectionSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    swap(i, minIdx, arr);
  }
  return arr;
};

console.log("selectionSort", selectionSort(arr));
