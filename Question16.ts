// Define an array of guest names
let guestList= ["Faiz Ahamd Faiz", "Doctor Qadir Khan", "Edhi Sahab"];


for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]},

Sociability has invited you to a dinner party. We'd be honoured to have you as a visitor.

Sincerely,
Your Host:Zainab Tahir\t`);
}

// Define the name of the guest who can't make it and the name of the new guest to invite
let unavailableGuest= "Edhi Sahab";
let newGuest= "Quaid E Azam";

// Print the name of the unavailable guest
console.log(unavailableGuest + " can't make it to the dinner.");

// Replace the unavailable guest with the new guest
let index = guestList.indexOf(unavailableGuest);
guestList[index] = newGuest;

// Inform people about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");

// Add three new guests to the list
guestList.unshift("Allama Iqbal"); // add to beginning
guestList.splice(3, 0, "Liaqat Ali Khan"); // add to middle
guestList.push("Sir Sayyed Ahmad "); // add to end using append()

// Print the second set of invitation messages
guestList.forEach(guest => {
  console.log("Respectable Guest " + guest + ", please come to my dinner party!");
});
