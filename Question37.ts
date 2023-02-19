function makeShirt(size= "large", message= "I love TypeScript"){
    console.log(`Making a ${size} shirt with the message '${message}'.`);
  }
  
  // Making a large shirt with the default message
  makeShirt();
  
  // Making a medium shirt with the default message
  makeShirt("medium");
  
  // Making a custom-sized shirt with a different message
  makeShirt("small", "TypeScript is awesome!");
  