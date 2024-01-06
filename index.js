document.addEventListener('DOMContentLoaded', function() {
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
             console.log('Form submitted successfully:', data);
           })
           .catch(error => {
             console.error('There was an error submitting the form:', error.message);
           });
         });
});
       
