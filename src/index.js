import mergeSort from "./mergeSort";
import { fibs, fibsRec } from "./fibs";

console.log("Hello, world");

console.log(fibs(10));
console.log(fibsRec(8));

// let myArray = [3, 2];
let myArray = [3, 2, 1, 13, 8, 5, 0, 1];
console.log(mergeSort(myArray));
