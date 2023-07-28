// JavaScript Array Methods: push(), pop(), shift(), unshift(), slice(), splice()

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to demonstrate using .pop() method
const demonstratePop = (arr) => {
    const removedElement = arr.pop();
    console.log("Using .pop() Function");
    console.log("Removed: " + removedElement);
    console.log("Result: " + arr + "\n");
}

// Function to demonstrate using .push() method
const demonstratePush = (arr) => {
    const addedElement = "Added by push()";
    arr.push(addedElement);
    console.log("Using .push() Function");
    console.log("Added: " + addedElement);
    console.log("Result: " + arr + "\n");
}

// Function to demonstrate using .shift() method
const demonstrateShift = (arr) => {
    const removedElement = arr.shift();
    console.log("Using .shift() Function");
    console.log("Removed: " + removedElement);
    console.log("Result: " + arr + "\n");
}

// Function to demonstrate using .unshift() method
const demonstrateUnshift = (arr) => {
    const addedElement = "Added by unshift()";
    arr.unshift(addedElement);
    console.log("Using .unshift() Function");
    console.log("Added: " + addedElement);
    console.log("Result: " + arr + "\n");
}

// Function to demonstrate using .splice() method
const demonstrateSplice = (arr) => {
    console.log("Using .splice() Function");
    console.log("From: " + arr);
    const removedElements = arr.splice(2, 3, "Added");
    console.log("Removed: " + removedElements);
    console.log("Result: " + arr + "\n");
}

// Function to demonstrate using .slice() method
const demonstrateSlice = (arr) => {
    console.log("Using .slice() Function");
    console.log("From: " + arr);
    const removedElements = arr.slice(3, 6);
    console.log("Removed: " + removedElements + "\n");
}

console.log("Original Array: " + array + "\n");

demonstratePop([...array]);
demonstratePush([...array]);
demonstrateShift([...array]);
demonstrateUnshift([...array]);
demonstrateSplice([...array]);
demonstrateSlice([...array]);
