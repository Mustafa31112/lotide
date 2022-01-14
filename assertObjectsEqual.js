const eqObjects = function (object1, object2) {
  const keys = Object.keys(object1)
  
  if (keys.length !== Object.keys(object2).length) { 
    return false 
   
  }  
  for ( const key of keys ) {
   
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

      if (!eqArrays(object1[key], object2[key])) {
          
          return false
        } 
    } else if ((object1[key] !== object2[key])) {
      return false
    }
} 
return true;
};


const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; 
  // console.log(`Example label: ${eqObjects(actual, expected)}`);
Object.keys(actual).map(function(key, index) {
if (actual[key] !== expected[key]) {
  console.log(`🛑  Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
} else {
  console.log(`✅  Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
}
})



  
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(eqObjects(ab, abc), false); // => false
