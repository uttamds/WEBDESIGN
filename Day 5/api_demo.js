// Using fetch to call the dummyjson.com API and log the response

const apiUrl = 'https://dummyjson.com/users';

fetch(apiUrl)
  .then(response => response.json())  // Parse the response as JSON
  .then(data => {
    // Log user data
    console.log('User Data:', data);
    
    // Loop through and log individual user details
    data.users.forEach(user => {
      console.log(`Name: ${user.firstName} ${user.lastName}`);
      console.log(`Email: ${user.email}`);
      console.log('---');
    });
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
