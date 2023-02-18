const current_users= ['John', 'Eric', 'Sarah', 'Mark', 'David'];
const new_users= ['Mike', 'Sarah', 'Amy', 'John', 'Lily'];

for (const new_username of new_users) {
  const username_exists = current_users.some(
    (current_username) => current_username.toLowerCase() === new_username.toLowerCase()
  );

  if (username_exists) {
    console.log(`Sorry, the username "${new_username}" is already taken. Please enter a new username.`);
  } else {
    console.log(`The username "${new_username}" is available.`);
    current_users.push(new_username);
  }
}
