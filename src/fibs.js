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

function fibsRec(n) {
  if (n <= 0) return [];
  if (n == 1) return [0];
  if (n == 2) return [0, 1];

  let array = fibsRec(n - 1);
  array.push(array[array.length - 1] + array[array.length - 2]);
  return array;
}

export { fibs, fibsRec };
