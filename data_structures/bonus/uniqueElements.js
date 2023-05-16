function countUniqueElements(array) {
    // Create an empty object to store unique elements as keys
    const uniqueElements = {};
  
    // Loop through the array
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      // Store each element as a key in the object
      uniqueElements[element] = true;
    }
  
    // Return the count of unique elements by getting the number of keys in the object
    return Object.keys(uniqueElements).length;
  }
  
  // Test the function with example inputs
  console.log(countUniqueElements([1, 2, 3, 4, 4, 5, 5, 6, 6, 6]));
  // Output: 6
  
  console.log(countUniqueElements([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
  // Output: 4
  
  console.log(countUniqueElements([5, 5, 5, 5, 5]));
  // Output: 1
  