document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (!username || !password) {
        alert('Please fill in both fields.');
        return;
    }

    try {
        // Mock API call for demonstration purposes
        const response = await mockApiCall(username, password);

        if (response.success) {
            alert('Login successful');
            // Redirect to a different page or update the UI as needed
        } else {
            alert('Login failed: ' + response.message);
        }
    } catch (error) {
        alert('An error occurred: ' + error.message);
    }
});

function mockApiCall(username, password) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (username === 'admin' && password === 'password') {
                resolve({ success: true });
            } else {
                resolve({ success: false, message: 'Invalid username or password' });
            }
        }, 1000); // Simulate network delay
    });
}

// Toggle password visibility
document.querySelectorAll('.toggle-password').forEach(item => {
    item.addEventListener('click', function() {
        const input = document.getElementById(this.dataset.target);
        if (input.type === 'password') {
            input.type = 'text';
            this.classList.remove('bx-show');
            this.classList.add('bx-hide');
        } else {
            input.type = 'password';
            this.classList.remove('bx-hide');
            this.classList.add('bx-show');
        }
    });
});
