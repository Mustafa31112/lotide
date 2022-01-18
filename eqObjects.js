const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



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

const eqArrays = function (a, b) {
  if (a.length !== b.length) {
    return false 
  }
  for (let i = 0; i < a.length; i++) {
   if (a[i] !== b[i]) {
     return false
   }

  }
return true;
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual((eqObjects(ab, ba)), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = {  d: ["2", 3], c: "1"};
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
