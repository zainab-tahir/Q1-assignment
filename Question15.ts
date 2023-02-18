// Define an array of guest names
let dinnerGuests= ["Faiz Ahamd Faiz", "Doctor Qadir Khan", "Edhi Sahab"];

for (let i = 0; i < dinnerGuests.length; i++) {
  console.log(`Dear ${dinnerGuests[i]},

Sociability has invited you to a dinner party. We'd be honoured to have you as a visitor.

Sincerely,
Your Host:Zainab Tahir\t`);
}


// Define the name of the guest who can't make it and the name of the new guest to invite
let unavailableGuest= "Edhi Sahab";
let newGuest= "Quaid e Azam";

// Print the name of the unavailable guest
console.log(unavailableGuest + " can't make it to the dinner.");

// Replace the unavailable guest with the new guest
let index = dinnerGuests.indexOf(unavailableGuest);
dinnerGuests[index] = newGuest;

// Print the second set of invitation messages
dinnerGuests.forEach(guest => {
  console.log("Respected Guest " + guest + ", please come to my dinner party!");
});