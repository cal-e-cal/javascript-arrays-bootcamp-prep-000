var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  bars = [element, ...array]
  return bars
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)  
  return array
}

function addElementToEndOfArray(array, element) {
  bars = [...array, element]
  return bars
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array 
}

function removeElementFromBeginningOfArray(array) {
  array.slice(0)
  return array 
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
}

function removeElementFromEndOfArray(array) {
  array.slice(array.length - 1)
  array 
}