// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.sticky-header');
    if (window.scrollY > 50) {
        header.style.padding = '15px 100px';
        if (window.innerWidth <= 768) {
            header.style.padding = '10px 20px';
        }
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    } else {
        header.style.padding = '20px 100px';
        if (window.innerWidth <= 768) {
            header.style.padding = '15px 20px';
        }
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Form Validation
document.querySelector('.lead-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    
    if (name && email) {
        // Form is valid - process submission
        alert('Thank you! Your guide will be sent shortly.');
        this.reset();
    } else {
        alert('Please fill in all required fields.');
    }
});

// WhatsApp Integration
document.querySelector('.whatsapp-btn').addEventListener('click', function() {
    window.open('https://wa.me/971556643426');
});

// Smooth Scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.diff-card, .testimonial-card, .blog-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animation
window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.diff-card, .testimonial-card, .blog-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Initialize header padding based on scroll position
    const header = document.querySelector('.sticky-header');
    if (window.scrollY > 50) {
        header.style.padding = '15px 100px';
        if (window.innerWidth <= 768) {
            header.style.padding = '10px 20px';
        }
    }
});

// Run animation check on scroll
window.addEventListener('scroll', animateOnScroll);