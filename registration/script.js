document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const loadingBox = document.getElementById('loadingBox');
    loadingBox.style.display = 'block';

    const formData = {
        name: document.getElementById('name').value,
        hospital: document.getElementById('hospital').value,
        contact: document.getElementById('contact').value,
        email: document.getElementById('email').value
    };

    fetch('https://script.google.com/macros/s/AKfycbwkWDoz7A9XGUdtBoGhM1uCmqmScNlZBVxnoJWV6BXM9xQRiJTe2v6tyCyqxS3nKjMx/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        loadingBox.style.display = 'none';
        alert('Form submitted successfully!');
        document.getElementById('registrationForm').reset(); // Clear the form

        // Redirect to the new website
        window.location.href = 'https://wa.me/c/94705008444'; // Replace with your desired URL
    })
    .catch(error => {
        loadingBox.style.display = 'none';
        alert('Error submitting form!');
        console.error('Error:', error);
    });
});
