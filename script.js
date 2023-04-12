// Login form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Perform validation and login logic here
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });
  
  // Register form submission
  document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
  
    // Perform validation and registration logic here
    if (newUsername && newPassword) {
      alert('Registration successful!');
    } else {
      alert('Please fill in all the fields.');
    }
  });
  