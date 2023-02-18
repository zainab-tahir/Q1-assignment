let z = "Zainab";

// Lowercase
console.log(z.toLowerCase());

// Uppercase
console.log(z.toUpperCase());

// Titlecase
console.log(z.replace(/\b\w/g, (l) => l.toUpperCase()));