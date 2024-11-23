// Load the student data from popple.json
let studentData = [];

// Fetch the data from popple.json
fetch("popple.json")
  .then((response) => response.json())
  .then((data) => {
    studentData = data; // Store the data in the studentData array
  })
  .catch((error) => console.error("Error loading student data:", error));

// Function to search for a student by Serial Number and Phone Number
function searchStudent() {
  // Get values from the input fields
  const slNo = document.getElementById("Sl.No").value.trim();
  const studentNo = document.getElementById("Name").value.trim();

  // Check if data is loaded
  if (!studentData.length) {
    alert("Data not loaded. Please try again.");
    return;
  }

  // Find a matching student
  const student = studentData.find(
    (s) =>
      s["Sl.No"] == slNo &&
      s["Name"] === studentNo
  );

  // Display result in tabular format
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Clear previous results

  if (student) {
    resultDiv.innerHTML = `
      <table class="result-table">
          <tr>
              <th>Serial Number</th>
              <th>Name</th>
              <th>Age</th>
              <th>Occupation</th>
              <th>Relationship</th>
              <th>Phone Number</th>
          </tr>
          <tr>
              <td>${student["Sl.No"]}</td>
              <td>${student["Name"]}</td>
              <td>${student["Age"]}</td>
              <td>${student["Occupation"]}</td>
              <td>${student["Relationship"]}</td>
              <td>${student["PhoneNo"]}</td>
          </tr>
      </table>
    `;
  } else {
    resultDiv.innerHTML = "<p>No matching student found.</p>";
  }
}
