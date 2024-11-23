// script.js
let serialNumber = 3; // Start from the last SL No in the table

document.getElementById('add-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get values from the form
  const name = document.getElementById('name').value.trim();
  const category = document.getElementById('category').value;
  const rating = document.getElementById('rating').value.trim();
  const rated = document.getElementById('rated').value;

  if (name && category && rating) {
    // Increment serial number
    serialNumber++;

    // Create new table row
    const tbody = document.getElementById('watchlist');
    const row = document.createElement('tr');

    // Add cells to the row
    row.innerHTML = `
      <td>${serialNumber}</td>
      <td>${name}</td>
      <td>${category}</td>
      <td>${rating}</td>
      <td>${rated}</td>
    `;

    // Append the row to the table
    tbody.appendChild(row);

    // Reset the form fields
    document.getElementById('add-form').reset();
  }
});
