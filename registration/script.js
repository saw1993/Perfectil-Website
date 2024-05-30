document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        hospital: document.getElementById('hospital').value,
        contact: document.getElementById('contact').value,
        email: document.getElementById('email').value
    };

    fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        alert('Form submitted successfully!');
    })
    .catch(error => {
        alert('Error submitting form! please retry');
        console.error('Error:', error);
    });
});
