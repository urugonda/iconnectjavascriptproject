// Given input arrays
const List1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const List2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

// Arrays to store the output
const uniqueInList1 = [];
const uniqueInList2 = [];
const intersection = [];

// Function to find unique elements in an array
function getUnique(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Find unique names in List1 not in List2
for (const name of List1) {
  if (!List2.includes(name)) {
    uniqueInList1.push(name);
  }
}

// Find unique names in List2 not in List1
for (const name of List2) {
  if (!List1.includes(name)) {
    uniqueInList2.push(name);
  }
}

// Find intersection of List1 and List2
for (const name of getUnique(List1.concat(List2))) {
  if (List1.includes(name) && List2.includes(name)) {
    intersection.push(name);
  }
}

// Output the results
console.log("Unique names in List1 not in List2:", uniqueInList1);
console.log("Unique names in List2 not in List1:", uniqueInList2);
console.log("Intersection of List1 and List2:", intersection);