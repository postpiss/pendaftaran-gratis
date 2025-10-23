document.getElementById('messageForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i data-feather="loader" class="w-5 h-5 animate-spin"></i> Sending...`;
    feather.replace();
    
    try {
        // Simulate sending to email (in a real app, you would use EmailJS or server-side code)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        const successDiv = document.createElement('div');
        successDiv.className = 'mt-4 p-4 bg-green-50 text-green-700 rounded-lg fade-in';
        successDiv.innerHTML = `
            <div class="flex items-center gap-2">
                <i data-feather="check-circle" class="text-green-600"></i>
                <span>Message sent successfully to tasyaolshp@gmail.com</span>
            </div>
        `;
        form.appendChild(successDiv);
        feather.replace();
        
        // Reset form
        form.reset();
    } catch (error) {
        // Show error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'mt-4 p-4 bg-red-50 text-red-700 rounded-lg fade-in';
        errorDiv.innerHTML = `
            <div class="flex items-center gap-2">
                <i data-feather="alert-circle" class="text-red-600"></i>
                <span>Failed to send message. Please try again.</span>
            </div>
        `;
        form.appendChild(errorDiv);
        feather.replace();
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i data-feather="send" class="w-5 h-5"></i> Send Message`;
        feather.replace();
    }
});

// Add floating animation to the mail icon
document.addEventListener('DOMContentLoaded', () => {
    const mailIcon = document.querySelector('[data-feather="mail"]');
    if (mailIcon) {
        mailIcon.style.animation = 'float 3s ease-in-out infinite';
        
        // Add keyframes dynamically
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);
    }
});
