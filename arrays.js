var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(element) {
  chocolateBars.unshift = ["new candy1"]
}

function destructivelyAddElementToBeginningOfArray(element) {
  chocolateBars[0] = "new candy2"
}

function addElementToEndOfArray() {
  chocolateBars.push = ["new candy3"]
}

function destructivelyAddElementToEndOfArray() {
  chocolateBars[4] = "new candy4"
}

function accessElementInArray(array, index) {
  return array[index]
}

function destrutivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  array 
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1)
  array 
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
}

function removeElementFromEndOfArray(array) {
  array.slice(array.length - 1)
  array 
}