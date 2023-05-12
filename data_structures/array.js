// Initialize an array of names
let names = ["Alice", "Bob", "Charlie", "David"];

// Print out the first name in the array
console.log(names[0]); // output: Alice

// Add a new name to the end of the array
names.push("Eve");

// Remove the last name from the array
names.pop();

// Print out all the names in the array
for (let i = 0; i < names.length; i++) {
    console.log('in the loop: ', names[i]);
}