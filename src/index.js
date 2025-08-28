console.log("Hello, world");

function fibs(n) {
  if (n == 1) return [0];

  if (n <= 0) return [];

  let array = [0, 1];
  while (array.length < n) {
    let newNumber = array[array.length - 1] + array[array.length - 2];
    array.push(newNumber);
  }
  return array;
}

console.log(fibs(8));

function fibsRec(n) {
  if (n <= 0) return [];
  if (n == 1) return [0];
  if (n == 2) return [0, 1];

  let array = fibsRec(n - 1);
  array.push(array[array.length - 1] + array[array.length - 2]);
  return array;
}

console.log(fibsRec(8));

function checkSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function mergeSort(array = []) {
  if (array.length === 1) return array;
  return array;
}

let myArray = [3, 2, 1, 13, 8, 5, 0, 1];
console.log(mergeSort(myArray));
