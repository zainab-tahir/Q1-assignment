// Define an array of guest names
let guestList= ["Allama Iqbal", "Faiz Ahamd Faiz", "Doctor Qadir Khan", "Liaqat Ali Khan", "Quaid E Azam", "Sir Sayyed Ahmad"];

// Define the name of the guests who can't make it
let unavailableGuests = ["Faiz Ahamd Faiz", "Liaqat Ali Khan"];

// Print the name of the unavailable guests
unavailableGuests.forEach(guest => {
  console.log(guest + " can't make it to the dinner.");
});

// Inform people that we can invite only two people for dinner
console.log("Sorry, we can invite only two people for dinner.");

// Remove guests until only two names remain
while (guestList.length > 2) {
  let removedGuest = guestList.pop();
  console.log("Sorry, " + removedGuest + ", you're no longer invited to dinner.");
}

// Print a message to each of the two remaining guests
guestList.forEach(guest => {
  console.log("Dear " + guest + ", you're still invited to my dinner party!");
});

// Remove the last two names from the list
guestList.pop();
guestList.pop();

// Print the final guest list (should be empty)
console.log(guestList);
