// index.js

document.addEventListener('DOMContentLoaded', function() {
         // ... (previous code for smooth scrolling and form handling)
       
         const contactForm = document.getElementById('contact-form');
       
         contactForm.addEventListener('submit', function(e) {
           e.preventDefault();
       
           const formData = new FormData(this);
       
           fetch('https://example.com/submit', {
             method: 'POST',
             body: formData
           })
           .then(response => {
             if (!response.ok) {
               throw new Error('Network response was not ok.');
             }
             return response.text();
           })
           .then(data => {
             // Handle successful form submission
             console.log('Form submitted successfully:', data);
             // Optionally, display a success message to the user
           })
           .catch(error => {
             // Handle errors during form submission
             console.error('There was an error submitting the form:', error.message);
             // Optionally, display an error message to the user
           });
         });
       });
       