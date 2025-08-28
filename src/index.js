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

function mergeSort(array = []) {
  if (array.length === 1) return array;

  let array1 = array.slice(0, parseInt(array.length / 2));
  let array2 = array.slice(parseInt(array.length / 2), parseInt(array.length));

  console.log("first: " + array1);
  console.log("Second: " + array2);

  let newSortedArray = [];
  while (true) {
    let firstIndex = 0;
    let secondIndex = 0;

    if (mergeSort(array1)[firstIndex] < mergeSort(array2)[secondIndex]) {
      newSortedArray.push(mergeSort(array1)[firstIndex]);
      firstIndex += 1;
    } else {
      newSortedArray.push(mergeSort(array2)[secondIndex]);
    }
  }

  console.log("=========" + mergeSort(array1) + mergeSort(array2));
  return array;
}

let myArray = [3, 2, 1, 13, 8, 5, 0, 1];
// let myArray = [3, 2]
// console.log(mergeSort(myArray));

mergeSort(myArray);
