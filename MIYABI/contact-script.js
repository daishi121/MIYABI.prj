// CHANGE: Contact Form Configuration
const contactConfig = {
    // CHANGE: Set your email service endpoint here
    // Options: EmailJS, Formspree, your own backend API, etc.
    formEndpoint: 'CHANGE_FORM_ENDPOINT_URL', // Example: 'https://formspree.io/f/YOUR_FORM_ID'
    
    // CHANGE: Email where you want to receive contact form submissions
    receiverEmail: 'CHANGE_YOUR_EMAIL@example.com',
    
    // CHANGE: Auto-reply settings
    autoReply: true,
    autoReplySubject: 'Merci de nous avoir contactés - MIYABI',
    autoReplyMessage: 'CHANGE_AUTO_REPLY_MESSAGE'
};

// Initialize contact page
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on contact page
    if (document.getElementById('contactForm')) {
        initializeContactPage();
    }
});

// Initialize contact page functionality
function initializeContactPage() {
    // Add form validation
    setupFormValidation();
    
    // Initialize FAQ accordions (they're already set up with onclick in HTML)
}

// Setup form validation
function setupFormValidation() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Remove error state on input
            this.classList.remove('error');
            const errorMsg = this.parentElement.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.remove();
            }
        });
    });
}

// Validate individual field
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Check if field is required
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Ce champ est requis';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Email invalide';
        }
    }
    
    // Phone validation (optional)
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[0-9+\-\s()]{10,}$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            errorMessage = 'Numéro de téléphone invalide';
        }
    }
    
    // Display error
    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        clearFieldError(field);
    }
    
    return isValid;
}

// Show field error
function showFieldError(field, message) {
    field.classList.add('error');
    
    // Remove existing error message
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = '#e74c3c';
    errorElement.style.fontSize = '12px';
    errorElement.style.marginTop = '5px';
    errorElement.style.display = 'block';
    
    field.parentElement.appendChild(errorElement);
}

// Clear field error
function clearFieldError(field) {
    field.classList.remove('error');
    const errorMsg = field.parentElement.querySelector('.error-message');
    if (errorMsg) {
        errorMsg.remove();
    }
}

// Handle contact form submission
function handleContactSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    
    // Validate all fields
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isFormValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isFormValid = false;
        }
    });
    
    if (!isFormValid) {
        showNotification('Veuillez corriger les erreurs dans le formulaire', 'error');
        return;
    }
    
    // Get form data
    const formData = {
        firstName: form.firstName.value.trim(),
        lastName: form.lastName.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        subject: form.subject.value,
        message: form.message.value.trim(),
        newsletter: form.newsletter.checked,
        timestamp: new Date().toISOString()
    };
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Envoi en cours...';
    submitBtn.disabled = true;
    
    // CHANGE: Send form data to your backend/email service
    // For now, we'll simulate a successful submission
    sendContactForm(formData)
        .then(() => {
            // Show success message
            showSuccessMessage();
            
            // Reset form
            form.reset();
            
            // Optional: Track submission (Google Analytics, etc.)
            // CHANGE: Add your analytics tracking code here
            // gtag('event', 'form_submit', { event_category: 'contact' });
        })
        .catch(error => {
            console.error('Form submission error:', error);
            showNotification('Une erreur est survenue. Veuillez réessayer.', 'error');
        })
        .finally(() => {
            // Restore button
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        });
}

// Send contact form (CHANGE this to use your actual backend)
function sendContactForm(formData) {
    return new Promise((resolve, reject) => {
        // OPTION 1: Use fetch to send to your backend
        // CHANGE: Replace with your actual endpoint
        /*
        fetch(contactConfig.formEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
        */
        
        // OPTION 2: Use EmailJS (if you set it up)
        // CHANGE: Add EmailJS code here
        
        // OPTION 3: For now, simulate success (REMOVE THIS in production)
        setTimeout(() => {
            console.log('Contact form data:', formData);
            resolve({ success: true });
        }, 1500);
    });
}

// Show success message
function showSuccessMessage() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    // Hide form
    form.style.display = 'none';
    
    // Show success message
    successMessage.style.display = 'block';
    
    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Optional: Reset after 5 seconds
    setTimeout(() => {
        form.style.display = 'block';
        successMessage.style.display = 'none';
    }, 5000);
}

// Toggle FAQ accordion
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const toggle = element.querySelector('.faq-toggle');
    
    // Close all other FAQs
    const allFaqs = document.querySelectorAll('.faq-item');
    allFaqs.forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
            const otherAnswer = item.querySelector('.faq-answer');
            const otherToggle = item.querySelector('.faq-toggle');
            if (otherAnswer) {
                otherAnswer.style.maxHeight = '0';
                otherAnswer.style.padding = '0';
            }
            if (otherToggle) {
                otherToggle.textContent = '+';
            }
        }
    });
    
    // Toggle current FAQ
    faqItem.classList.toggle('active');
    
    if (faqItem.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.padding = '15px 0';
        toggle.textContent = '-';
    } else {
        answer.style.maxHeight = '0';
        answer.style.padding = '0';
        toggle.textContent = '+';
    }
}

// Show notification (reuse from script.js or create simple version)
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    const bgColor = type === 'error' ? '#e74c3c' : '#000';
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: ${bgColor};
        color: #fff;
        padding: 15px 25px;
        border-radius: 4px;
        z-index: 3000;
        font-size: 14px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentElement) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Make functions available globally
window.handleContactSubmit = handleContactSubmit;
window.toggleFaq = toggleFaq;