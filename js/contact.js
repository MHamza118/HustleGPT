// JavaScript for the contact.html page

// Function to handle contact form submission
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Simple validation
        if (name === '' || email === '' || subject === '' || message === '') {
            showFormError('Please fill in all fields.');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormError('Please enter a valid email address.');
            return;
        }
        
        // In a real app, this would send the form data to a server
        // For this demo, we'll just show a success message
        showFormSuccess();
    });
}

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to show form error
function showFormError(message) {
    const formContainer = document.querySelector('.form-container');
    
    // Remove any existing error message
    const existingError = formContainer.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Create and add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    
    formContainer.insertBefore(errorDiv, document.getElementById('contactForm'));
    
    // Scroll to error message
    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Function to show form success
function showFormSuccess() {
    const formContainer = document.querySelector('.form-container');
    
    // Replace form with success message
    formContainer.innerHTML = `
        <div class="success-message">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h2>Message Sent!</h2>
            <p>Thank you for contacting us. We'll get back to you as soon as possible.</p>
        </div>
    `;
    
    // Scroll to success message
    formContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Function to handle FAQ toggles
function setupFaqToggles() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
            
            const toggle = question.querySelector('.faq-toggle i');
            if (toggle) {
                toggle.classList.toggle('fa-plus');
                toggle.classList.toggle('fa-minus');
            }
            
            // Close other FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                    const otherToggle = item.querySelector('.faq-toggle i');
                    if (otherToggle) {
                        otherToggle.classList.remove('fa-minus');
                        otherToggle.classList.add('fa-plus');
                    }
                }
            });
        });
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    setupContactForm();
    setupFaqToggles();
});
