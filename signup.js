document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (username && email && password) {
      alert(`Welcome, ${username}! Your account has been created 🎉`);
    } else {
      alert("Please fill in all fields!");
    }
  });
  