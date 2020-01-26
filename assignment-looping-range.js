// Looping - Range : Assignment

let range = function(start, end, step) {
  let some_array = [];
  if (step <= 0 ){
    return some_array;
  }
  for (let value = start; value <= end; value += step){
    some_array.push(value);

  }
  return some_array;
}

console.log(range(0, 10, 2));     // Example range 
console.log(range(10, 30, 5));    // Example range 
console.log(range(-5, 2, 3));     // Example range 


// console.log(range());          // checking: undefined range
// console.log(range(10, 2, 3));  // checking: start > end
// console.log(range(-5, 2, -1)); // checking: step = 0
// console.log(range(-5, 2, 0));  // checking: step is -ve
