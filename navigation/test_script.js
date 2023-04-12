// Array to store registered members
let members = [];

// Add Member button click event
document.getElementById("addMemberBtn").addEventListener("click", function() {
  // Show registration modal
  $('#registerModal').modal('show');
});

// Member Details button click event
document.getElementById("memberDetailsBtn").addEventListener("click", function() {
  // Show member details modal
  $('#memberDetailsModal').modal('show');

  // Clear existing member details in the table
  document.getElementById("memberDetailsTableBody").innerHTML = "";

  // Populate member details in the table
  for (let i = 0; i < members.length; i++) {
    let member = members[i];
    let newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${member.name}</td><td>${member.email}</td>`;
    document.getElementById("memberDetailsTableBody").appendChild(newRow);
  }
});

// Register form submit event
document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  // Validate form input
  if (name === "" || email === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Create member object and add to members array
  let member = {
    name: name,
    email: email
  };
  members.push(member);

  // Close registration modal
  $('#registerModal').modal('hide');

  // Reset form values
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";

  // Show success message
  alert("Member registered successfully!");
});
