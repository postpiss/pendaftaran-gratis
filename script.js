document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        
        // Send email using FormSubmit.co (FREE service)
        fetch('https://formsubmit.co/ajax/tasyaolshp@gmail.com', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                phone: phone,
                _subject: 'New Contact Form Submission',
                _template: 'table'
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            form.reset();
            form.classList.add('hidden');
            successMessage.classList.remove('hidden');
            
            // Reset form after 5 seconds
            setTimeout(() => {
                form.classList.remove('hidden');
                successMessage.classList.add('hidden');
            }, 5000);
        })
        .catch(error => console.log(error));
    });
});
