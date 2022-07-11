console.log('Hello!');

const arr = [3, 8, 7, 6, 5, -4, 3, 2, 1];
const ascendingOrderSortedArr = arr.sort();
console.log(ascendingOrderSortedArr);

const doubleDigitNums = [24, 39, 12, -40, 97, -15];
console.log(doubleDigitNums.sort());

const descendingOrderSortedArr = arr.sort().reverse();
console.log(descendingOrderSortedArr);

console.log(arr);
const arr2 = [
  [1, 2, 1, 24],
  [8, [11, [9, [1, 7], 2], 4]],
  [7, [[0], 7, 27]],
  [7, [4, 28], 14],
  [[3], 10, 26, 7],
];
console.log(arr2.flat(4));

//using recursion
function flatten(arr2) {
  const newArr = arr2.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flatten(curr));
    }
    return acc.concat(curr);
  }, []);
  return newArr;
}

console.log(flatten(arr2));
