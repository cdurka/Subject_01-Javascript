const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

// Function to calculate union of two arrays
function arrayUnion(arr1, arr2) {
  const unionSet = new Set([...arr1, ...arr2]);
  return [...unionSet];
}

// Function to calculate intersection of two arrays
function arrayIntersection(arr1, arr2) {
  return arr1.filter(element => arr2.includes(element));
}

// Function to find elements in arr1 that are not in arr2
function elementsInAWithoutB(arr1, arr2) {
  return arr1.filter(element => !arr2.includes(element));
}

// Calculate union
const union = arrayUnion(a, b);
console.log("Union of a and b:", union);

// Calculate intersection
const intersection = arrayIntersection(a, b);
console.log("Intersection of a and b:", intersection);

// Calculate elements in a that are not in b
const aWithoutB = elementsInAWithoutB(a, b);
console.log("Elements in a that are not in b:", aWithoutB);
