function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform client-side validation (you can add more advanced validation)
    if (email.trim() === '' || password.trim() === '') {
        alert('Please enter both email and password.');
        return;
    }

    // Simulate login process (replace with actual backend implementation)
    alert(`Login with email: ${email} and password: ${password}`);
}

function handleSignup() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform client-side validation (you can add more advanced validation)
    if (fullName.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate signup process (replace with actual backend implementation)
    alert(`Sign up with name: ${fullName}, email: ${email}, and password: ${password}`);
}
