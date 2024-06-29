document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;

    // Simple validation
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (!terms) {
        alert('You must agree to the terms and conditions.');
        return;
    }

    try {
        // Mock API call for demonstration purposes
        const response = await mockApiCall(username, email, password);

        if (response.success) {
            alert('Registration successful');
            // Redirect to a different page or update the UI as needed
        } else {
            alert('Registration failed: ' + response.message);
        }
    } catch (error) {
        alert('An error occurred: ' + error.message);
    }
});

// Mock API call function
function mockApiCall(username, email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'newuser' && email === 'newuser@example.com' && password === 'password') {
                resolve({ success: true });
            } else {
                resolve({ success: false, message: 'Registration failed. Try different credentials.' });
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

// Password strength checker
document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strength = checkPasswordStrength(password);
    document.getElementById('passwordStrength').textContent = strength;
});

function checkPasswordStrength(password) {
    if (password.length < 6) {
        return 'Weak';
    } else if (password.length >= 6 && password.length < 10) {
        return 'Medium';
    } else {
        return 'Strong';
    }
}

// Initialize CAPTCHA (use any CAPTCHA library or service you prefer)
// Example: Google reCAPTCHA v2
function loadCaptcha() {
    const captchaContainer = document.getElementById('captchaContainer');
    captchaContainer.innerHTML = '<div class="g-recaptcha" data-sitekey="your-site-key"></div>';
    // Ensure you include the reCAPTCHA script in your HTML
}
loadCaptcha();
