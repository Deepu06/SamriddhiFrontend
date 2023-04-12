// Add Member button click event handler
//document.getElementById("addMemberBtn").addEventListener("click", function() {
    // Show the registration form modal
   // $("#registerModal").modal("show");
  //});





//   // Array to store registered members
// let members = [];

// // Add Member button click event
// document.getElementById("addMemberBtn").addEventListener("click", function() {
//   // Show registration modal
//   $('#registerModal').modal('show');
// });

// // Member Details button click event
// document.getElementById("memberDetailsBtn").addEventListener("click", function() {
//   // Show member details modal
//   $('#memberDetailsModal').modal('show');

//   // Clear existing member details in the table
//   document.getElementById("memberDetailsTableBody").innerHTML = "";

//   // Populate member details in the table
//   for (let i = 0; i < members.length; i++) {
//     let member = members[i];
//     let newRow = document.createElement("tr");
//     newRow.innerHTML = `<td>${member.name}</td><td>${member.email}</td>`;
//     document.getElementById("memberDetailsTableBody").appendChild(newRow);
//   }
// });

// // Register form submit event
// document.getElementById("registerForm").addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent form submission

//   // Get form values
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;

//   // Validate form input
//   if (name === "" || email === "") {
//     alert("Please fill in all fields.");
//     return;
//   }

//   // Create member object and add to members array
//   let member = {
//     name: name,
//     email: email
//   };
//   members.push(member);

//   // Close registration modal
//   $('#registerModal').modal('hide');

//   // Reset form values
//   document.getElementById("name").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("password").value = "";

//   // Show success message
//   alert("Member registered successfully!");
// });

  
// //working for test4
// // JavaScript code
// // Store registered members data
// let members = [];

// // Add Member button click event
// document.getElementById('addMemberBtn').addEventListener('click', function () {
//   $('#registerModal').modal('show');
// });

// // Member Details button click event
// document.getElementById('memberDetailsBtn').addEventListener('click', function () {
//   // Clear previous data in the table
//   document.getElementById('memberDetailsTableBody').innerHTML = '';

//   // Append member details to the table
//   for (let i = 0; i < members.length; i++) {
//     let row = document.createElement('tr');
//     let nameCell = document.createElement('td');
//     nameCell.textContent = members[i].name;
//     let emailCell = document.createElement('td');
//     emailCell.textContent = members[i].email;
//     row.appendChild(nameCell);
//     row.appendChild(emailCell);
//     document.getElementById('memberDetailsTableBody').appendChild(row);
//   }

//   // Show the Member Details modal
//   $('#memberDetailsModal').modal('show');
// });

// // Register Form submit event
// document.getElementById('registerForm').addEventListener('submit', function (e) {
//   e.preventDefault();
//   let name = document.getElementById('name').value;
//   let email = document.getElementById('email').value;
//   members.push({ name: name, email: email });
//   $('#registerModal').modal('hide');
//   document.getElementById('name').value = '';
//   document.getElementById('email').value = '';
// });




// Add Member Function
function addMember() {
    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var pincode = document.getElementById('pincode').value;
    var community = document.getElementById('community').value;
    var area = document.getElementById('area').value;
  
    // Validate input values
    if (name === '' || email === '' || address === '' || city === '' || pincode === '') {
      alert('Please fill all required fields');
      return;
    }
  
    // Create new row in member details table
    var tableBody = document.getElementById('memberDetailsTableBody');
    var newRow = tableBody.insertRow(tableBody.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = name;
    cell2.innerHTML = email;
  
    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';
    document.getElementById('city').value = '';
    document.getElementById('pincode').value = '';
    document.getElementById('community').value = '';
    document.getElementById('area').value = '';
  
    // Close modal
    $('#registerModal').modal('hide');
  }
  
  // Member Details Function
  function showMemberDetails() {
    // Clear existing table rows
    var tableBody = document.getElementById('memberDetailsTableBody');
    tableBody.innerHTML = '';
  
    // Populate member details table from existing rows
    var mainContent = document.getElementsByClassName('main-content')[0];
    var rows = mainContent.getElementsByTagName('tr');
    for (var i = 1; i < rows.length; i++) { // Start from index 1 to skip table header row
      var name = rows[i].cells[0].innerText;
      var email = rows[i].cells[1].innerText;
  
      // Create new row in member details table
      var newRow = tableBody.insertRow(tableBody.rows.length);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      cell1.innerHTML = name;
      cell2.innerHTML = email;
    }
  
    // Show member details modal
    $('#memberDetailsModal').modal('show');
  }
  
  // Add Member Button Event Listener
  document.getElementById('addMemberBtn').addEventListener('click', function() {
    $('#registerModal').modal('show');
  });
  
  // Member Details Button Event Listener
  document.getElementById('memberDetailsBtn').addEventListener('click', showMemberDetails);
  
  // Add Member Form Submit Event Listener
  document.getElementById('registerModal').addEventListener('submit', function(event) {
    event.preventDefault();
    addMember();
  });
  