export default function mergeSort(array) {
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
  }
  return newArray;
}
