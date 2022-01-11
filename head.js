const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const head = function(array) {
  return array.shift(1);
}

assertEqual(head([5,6,7]), 5);
assertEqual(head([1, 2, 3]), 3);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
