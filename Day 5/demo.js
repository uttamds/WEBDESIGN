// Function to fetch users and populate the table
async function fetchAndPopulateUsers() {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();

    const users = data.users; // Assuming the API returns a `users` array
    const tableBody = document.querySelector('#usersTable tbody');

    // Clear any existing table rows
    tableBody.innerHTML = '';

    // Loop through users and create a new row for each user
    users.forEach(user => {
        const row = document.createElement('tr');
        
        // Create table cells for each user's data
        const idCell = document.createElement('td');
        idCell.textContent = user.id;
        row.appendChild(idCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = `${user.firstName} ${user.lastName}`;
        row.appendChild(nameCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = user.email;
        row.appendChild(emailCell);

        const phoneCell = document.createElement('td');
        phoneCell.textContent = user.phone;
        row.appendChild(phoneCell);

        const usernameCell = document.createElement('td');
        usernameCell.textContent = user.username;
        row.appendChild(usernameCell);

        // Append the row to the table body
        tableBody.appendChild(row);
    });
}

// Call the function to populate the table when the page loads
fetchAndPopulateUsers();
