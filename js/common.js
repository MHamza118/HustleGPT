// Common JavaScript functionality for all pages

// Function to handle mobile menu toggle
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!menuToggle || !navLinks) return;

    // Ensure the menu toggle is clickable
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');

        // Prevent body scrolling when menu is open
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking on a link
    const navLinksItems = navLinks.querySelectorAll('a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') &&
            !navLinks.contains(e.target) &&
            e.target !== menuToggle &&
            !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Function to handle header scroll effect
function setupHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Function to animate number counting
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(number => {
        const target = parseInt(number.getAttribute('data-count'));
        if (!target) return;

        const duration = 2000; // 2 seconds
        const step = target / (duration / 20); // Update every 20ms
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            number.textContent = Math.floor(current).toLocaleString();
        }, 20);
    });
}

// Function to handle scroll reveal animations
function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        revealElements.forEach(element => {
            const revealTop = element.getBoundingClientRect().top;

            if (revealTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    // Initial check
    checkReveal();
}

// Function to animate elements with class 'animated'
function animateElements(selector) {
    const elements = document.querySelectorAll(selector);

    function checkElements() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('animated');
            }
        });
    }

    window.addEventListener('scroll', checkElements);
    // Initial check
    checkElements();
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
        });
    });
}

// Function to handle category filtering
function setupCategoryFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    if (!filterButtons.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            const items = document.querySelectorAll('[data-category]');

            items.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Hide header on scroll down, show on scroll up
let lastScrollY = window.scrollY;
let ticking = false;
const header = document.querySelector('.header');

function handleHeaderScrollHide() {
    if (!header) return;
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 60) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = '';
    }
    lastScrollY = currentScrollY;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(handleHeaderScrollHide);
        ticking = true;
    }
});

// Auto-highlight current page in navigation
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Remove all active classes first
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current page
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop() || 
            (currentPath === '/' && link.getAttribute('href') === 'index.html') ||
            (currentPath.includes(link.getAttribute('href').replace('.html', '')))) {
            link.classList.add('active');
        }
    });
}

// Initialize all common functionality when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    setupHeaderScroll();
    setupScrollReveal();
    setTimeout(animateNumbers, 1000); // Delay to ensure visibility
    animateElements('.step');
    animateElements('.testimonial-card');
    animateElements('.story-card');
    animateElements('.post-card');
    animateElements('.footer-section');
    setupFaqToggles();
    setupCategoryFilters();
    highlightCurrentPage();
});
