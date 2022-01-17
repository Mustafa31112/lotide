const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const tail = function(array) {
  let  output = [];
  for (let i = 1; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}



module.exports = tail;