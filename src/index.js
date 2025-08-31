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

function mergeSort(array) {
  if (array.length === 1) return array;
  let newArray = [];

  // split array
  let array1 = mergeSort(array.slice(0, parseInt(array.length / 2)));
  let array2 = mergeSort(
    array.slice(parseInt(array.length / 2), parseInt(array.length)),
  );

  // merge array and sort algorithm
  const ansd = array1.length + array2.length;

  while (newArray.length < ansd) {
    if (array1.length === 0) {
      newArray = newArray.concat(array2);
      array2 = [];
      break;
    } else if (array2.length === 0) {
      newArray = newArray.concat(array1);
      array1 = [];
      break;
    }

    if (array1[0] <= array2[0]) {
      newArray.push(array1.shift());
    } else if (array2[0] <= array1[0]) {
      newArray.push(array2.shift());
    }
    console.log(newArray);
  }
  return newArray;
}

// let myArray = [3, 2, 1, 13, 8, 5, 0, 1];
let myArray = [3, 2];
console.log(mergeSort(myArray));
