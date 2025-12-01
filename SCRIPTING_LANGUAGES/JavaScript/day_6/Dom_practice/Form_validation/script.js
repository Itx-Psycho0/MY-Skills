/* 2. Create a form with input fields for name and email. Validate the inputs to ensure they are not empty before submission. */
const containDiv = document.createElement('div');
const form = document.createElement('form');
const nameInput = document.createElement('input');
const emailInput = document.createElement('input');
const submitBtn = document.createElement('button');
const messageDiv = document.createElement('div');

containDiv.classList.add('container');
submitBtn.classList.add('submit-btn');
nameInput.type = 'text';
nameInput.placeholder = 'Enter your name';
emailInput.type = 'email';
emailInput.placeholder = 'Enter your email';
submitBtn.textContent = 'Submit';
messageDiv.classList.add('message');

form.appendChild(nameInput);
form.appendChild(emailInput);
form.appendChild(submitBtn);
containDiv.appendChild(form);
containDiv.appendChild(messageDiv);
document.body.appendChild(containDiv);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    

    if (name === '' || email === '') {
        messageDiv.textContent = 'Please fill in all fields.';
        messageDiv.style.color = 'red';
    } else {
        messageDiv.textContent = 'Form submitted successfully!';
        messageDiv.style.color = 'green';
        nameInput.value = '';
        emailInput.value = '';
        console.log(name, email);
    }
});

