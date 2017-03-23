// Review the following code. Read over the code and write detailed comments for each line of code.

// a function that pushes data from data to accumulator
function modify (data, callback) {
  var accumulator = []

  data.forEach(function (item) {
    accumulator.push(callback(item))
  })

  return accumulator
}
// increment the number by 1
function increment (num) {
  return num + 1
}
// decrease the number by 1
function decrement (num) {
  return num - 1
}
// the variable of number
var numbers = [27, 68, 40, 3, 14, 74]
// modifying numbers with the increment function and storying it in a variable
var incremented = modify(numbers, increment)
// modifying numbers with the decrement function and storying it in a variable
var decremented = modify(numbers, decrement)
// printing out both variables for increment and decrement
console.log(incremented)

console.log(decremented)
