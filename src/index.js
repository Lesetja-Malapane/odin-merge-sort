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

// function mergeSort(array = []) {
//   if (array.length === 1) return array;

//   let array1 = array.slice(0, parseInt(array.length / 2));
//   let array2 = array.slice(parseInt(array.length / 2), parseInt(array.length));

//   console.log("first: " + array1);
//   console.log("Second: " + array2);

//   let newSortedArray = [];
//   while (true) {
//     let firstIndex = 0;
//     let secondIndex = 0;

//     if (mergeSort(array1)[firstIndex] < mergeSort(array2)[secondIndex]) {
//       newSortedArray.push(mergeSort(array1)[firstIndex]);
//       firstIndex += 1;
//     } else {
//       newSortedArray.push(mergeSort(array2)[secondIndex]);
//     }
//   }
// }

// function mergeSort(array) {
//   if (array.length === 1) return array;

//   // split array
//   let array1 = array.slice(0, parseInt(array.length / 2));
//   let array2 = array.slice(parseInt(array.length / 2), parseInt(array.length));

//   // merge array and sort algorithm

//   // return newArray;
// }

const array1 = [2, 3, 5, 7];
const array2 = [1, 4, 9, 11];
const ansd = array1.length + array2.length;

console.log(ansd);

let array3 = [];

while (array3.length < ansd) {
  if (array1.length === 0) {
    array3.concat(array2);
    break;
  } else if (array2.length === 0) {
    array3.concat(array1);
    break;
  }

  if (array1[0] < array2[0]) {
    console.log("Array1: " + array1[0] + "  Array2: " + array2[0]);
    array3.push(array1.shift());
  } else if (array2[0] < array1[0]) {
    console.log("Array1: " + array1[0] + "  Array2: " + array2[0]);
    array3.push(array2.shift());
  }

  console.log("Array3: " + array3);
}
