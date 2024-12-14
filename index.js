const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const formData = {
        name: name,
        email: email,
        phone: phone
    };

    console.log(formData);

    form.style.display = 'none';
    document.getElementById('thank-you-message').style.display = 'block';
});

