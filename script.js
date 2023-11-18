async function submitForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    if (response.ok) {
        console.log("Successful login");
    } else {
        alert("Invalid email or password");
    }

    document.getElementById("authForm").reset();
}

document.getElementById("submitButton").addEventListener("click", submitForm);