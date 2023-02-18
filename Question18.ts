
const places= ["S.Korea", "SaudiaArabia", "New Zealand", "Egypt", "Greece"];

//original order
console.log("Original order:", places);

// alphabetical order
console.log("Alphabetical order:", [...places].sort());

// original order
console.log("Original order:", places);

// reverse alphabetical order
console.log("Reverse alphabetical order:", [...places].sort().reverse());

// original order
console.log("Original order:", places);

// Reverse the order of the list
places.reverse();

// changed order
console.log("Reversed order:", places);

// Reverse the order of the list again
places.reverse();

// back to its original order
console.log("Original order:", places);

// alphabetical order
places.sort();

// changed order
console.log("Alphabetical order:", places);

// reverse alphabetical order
places.sort((a, b) => b.localeCompare(a));

// changed order
console.log("Reverse alphabetical order:", places);