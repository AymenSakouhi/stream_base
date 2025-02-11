// create a prototypal func to
// have sums created without
// a reduce func
//
Array.prototype.sum = function () {
  let temp = this
  return temp.reduce((acc, curr) => acc + curr)
}
const arr = [1, 2, 3]
const sum = arr.reduce((acc, curr) => acc + curr)

console.log(`sum of the arr`, sum)
console.log(`proto sum of arr`, arr.sum())
