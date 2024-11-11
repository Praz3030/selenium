function authenticateUser() {
  // Predefined credentials for demo
  const validUsername = "IceSphinx124";
  const validPassword = "BEProj@1234";

  // Get input values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if credentials match
  if (username === validUsername && password === validPassword) {
    window.location.href = "hello.html"; // Redirect to Hello World page
  } else {
    document.getElementById("error-message").textContent =
      "Invalid username or password!";
  }
}
