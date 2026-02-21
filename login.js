document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message");

    
    let correctUsername = "admin";
    let correctPassword = "1234";

    if (username === "" || password === "") {
        message.textContent = "Please fill in all fields";
    }
    else if (username === correctUsername && password === correctPassword) {
        message.style.color = "green";
        message.textContent = "Login successful!";
        
        
        window.location.href = "prot2.html";
    }
    else {
        message.style.color = "red";
        message.textContent = "Invalid username or password";
    }
});