function sendMail(e) {
    e.preventDefault()
    let parameters = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const sendBtn = document.getElementById("send-btn");
    sendBtn.innerHTML = "Sending...";
    sendBtn.disabled = true;
    emailjs.send("service_4wt6kty", "template_hhh9i7a", parameters)
        .then(function (res) {
            sendBtn.innerHTML = "Sent ✔"; // SUCCESS FEEDBACK
            sendBtn.style.background = "#4CAF50"; // optional: green success color
        })
        .catch(function (err) {
            console.error("Failed to send email. Error:", err);
            sendBtn.innerHTML = "Try Again";
            sendBtn.disabled = false; 
        });
}

