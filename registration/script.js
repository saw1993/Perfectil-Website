document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

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
        console.log(response.status)
        alert('Form submitted successfully! Thank you');
    })
    .catch(error => {
        alert('Error submitting form! please retry');
        console.error('Error:', error);
    });
});
