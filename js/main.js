// Sample data for trending hustles
const trendingHustles = [
    {
        title: "Dropshipping Business",
        description: "Start an e-commerce store without holding inventory",
        category: "E-commerce",
        image: "https://media.istockphoto.com/id/1296110644/photo/dropshipping-delivery-service-concept.jpg?s=612x612&w=0&k=20&c=s3sbhvlpMw6v5UxjJml8TbLcs1yBPq_v_OvkJxJyxzI=",
        earnings: "$1,000 - $10,000/month",
        difficulty: "Medium"
    },
    {
        title: "Freelance Writing",
        description: "Write content for blogs, websites, and businesses",
        category: "Digital Services",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKonw4f6SUyFED7nTHzxn8-6vNBnK6mMcQQ&s",
        earnings: "$500 - $5,000/month",
        difficulty: "Easy"
    },
    {
        title: "Print on Demand",
        description: "Sell custom-designed products with no upfront costs",
        category: "E-commerce",
        image: "https://media.istockphoto.com/id/1167883152/vector/merch-clothing-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=4g6M7hHe1Z3vQoco98vo_wfDQtFciG3lh1g2b5qNe5g=",
        earnings: "$500 - $3,000/month",
        difficulty: "Medium"
    },
    {
        title: "Online Tutoring",
        description: "Teach subjects you're passionate about",
        category: "Digital Services",
        image: "https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg",
        earnings: "$1,000 - $4,000/month",
        difficulty: "Medium"
    },
    {
        title: "Stock Photography",
        description: "Sell your photos on stock photography websites",
        category: "Passive Income",
        image: "https://img.freepik.com/free-photo/photographer-taking-photos-outdoors_23-2149020423.jpg",
        earnings: "$300 - $2,000/month",
        difficulty: "Medium"
    },
    {
        title: "Dividend Investing",
        description: "Build a portfolio of dividend-paying stocks for passive income",
        category: "Passive Income",
        image: "https://img.freepik.com/free-photo/business-concept-with-graphic-holography_23-2149160929.jpg",
        earnings: "$500 - $5,000/month",
        difficulty: "Hard"
    },
    {
        title: "Mobile Car Wash",
        description: "Offer convenient car washing services at customers' locations",
        category: "Local Businesses",
        image: "https://img.freepik.com/free-photo/man-washing-his-car-car-wash_1157-26068.jpg",
        earnings: "$1,500 - $6,000/month",
        difficulty: "Easy"
    },
    {
        title: "Home Cleaning Service",
        description: "Provide professional cleaning services for homes and apartments",
        category: "Local Businesses",
        image: "https://img.freepik.com/free-photo/woman-with-cleaning-gloves-cleaning-house_23-2148684861.jpg",
        earnings: "$2,000 - $8,000/month",
        difficulty: "Medium"
    }
];

// Sample data for testimonials
const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Freelance Writer",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwDOtTr2Rnr-yrwJh6f6tvMQ5Q1KYBkweI6A&s",
        content: "HustleGPT helped me find my perfect side hustle. I'm now making $3,000/month writing content for businesses!",
        rating: "★★★★★"
    },
    {
        name: "Mike Chen",
        role: "Dropshipping Entrepreneur",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSscoRE-kU64oghY201_0j_CL-7oXWmzpKbVw&s",
        content: "The AI recommendations were spot on. My dropshipping store is now generating $8,000 in monthly revenue.",
        rating: "★★★★★"
    },
    {
        name: "Emily Rodriguez",
        role: "Online Tutor",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkU-zLQYM0oPaT0dv_SYK78rl7oZGK1Kkl0Q&s",
        content: "Thanks to HustleGPT, I found a profitable tutoring niche. I'm making $2,500/month teaching Spanish online.",
        rating: "★★★★★"
    }
];

// Function to populate trending hustles
function populateTrendingHustles() {
    const trendingGrid = document.getElementById('trendingGrid');
    if (!trendingGrid) return;

    trendingGrid.innerHTML = trendingHustles.map(hustle => `
        <div class="trending-item">
            <img src="${hustle.image}" alt="${hustle.title}">
            <div class="trending-item-content">
                <h3>${hustle.title}</h3>
                <p>${hustle.description}</p>
                <div class="meta">
                    <span>${hustle.earnings}</span>
                    <span>${hustle.difficulty}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Function to populate testimonials
function populateTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    if (!testimonialsGrid) return;

    testimonialsGrid.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-header">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
            <div class="testimonial-content">
                <p>${testimonial.content}</p>
            </div>
            <div class="testimonial-rating">
                ${testimonial.rating}
            </div>
        </div>
    `).join('');
}

// Function to handle category filtering
function setupCategoryFiltering() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    if (!categoryButtons.length) return;

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Filter trending hustles based on category
            const categoryText = button.textContent;
            let filteredHustles;

            if (categoryText === 'All') {
                filteredHustles = trendingHustles;
            } else {
                filteredHustles = trendingHustles.filter(hustle => {
                    // Handle exact match or partial match for flexibility
                    return hustle.category === categoryText ||
                        hustle.category.includes(categoryText) ||
                        categoryText.includes(hustle.category);
                });
            }

            // Update the grid
            const trendingGrid = document.getElementById('trendingGrid');
            if (trendingGrid) {
                trendingGrid.innerHTML = filteredHustles.map(hustle => `
                    <div class="trending-item">
                        <img src="${hustle.image}" alt="${hustle.title}">
                        <div class="trending-item-content">
                            <h3>${hustle.title}</h3>
                            <p>${hustle.description}</p>
                            <div class="meta">
                                <span>${hustle.earnings}</span>
                                <span>${hustle.difficulty}</span>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
        });
    });
}

// Function to handle search functionality
function setupSearch() {
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');

    if (!searchInput || !searchButton) return;

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm.trim() === '') return;

        // Filter hustles based on search term
        const filteredHustles = trendingHustles.filter(hustle =>
            hustle.title.toLowerCase().includes(searchTerm) ||
            hustle.description.toLowerCase().includes(searchTerm) ||
            hustle.category.toLowerCase().includes(searchTerm)
        );

        // Update the grid
        const trendingGrid = document.getElementById('trendingGrid');
        if (trendingGrid) {
            trendingGrid.innerHTML = filteredHustles.map(hustle => `
                <div class="trending-item">
                    <img src="${hustle.image}" alt="${hustle.title}">
                    <div class="trending-item-content">
                        <h3>${hustle.title}</h3>
                        <p>${hustle.description}</p>
                        <div class="meta">
                            <span>${hustle.earnings}</span>
                            <span>${hustle.difficulty}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    });

    // Add event listener for Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
}

// Function to handle mobile menu toggle
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
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

// Function to animate steps in How It Works section
function animateSteps() {
    const steps = document.querySelectorAll('.step');

    function checkSteps() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        steps.forEach(step => {
            const stepTop = step.getBoundingClientRect().top;

            if (stepTop < windowHeight - revealPoint) {
                step.classList.add('animated');
            }
        });
    }

    window.addEventListener('scroll', checkSteps);
    // Initial check
    checkSteps();
}

// Function to animate testimonial cards
function animateTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial-card');

    function checkTestimonials() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        testimonials.forEach(testimonial => {
            const testimonialTop = testimonial.getBoundingClientRect().top;

            if (testimonialTop < windowHeight - revealPoint) {
                testimonial.classList.add('animated');
            }
        });
    }

    window.addEventListener('scroll', checkTestimonials);
    // Initial check
    checkTestimonials();
}

// Function to animate footer sections
function animateFooter() {
    const footerSections = document.querySelectorAll('.footer-section');

    function checkFooterSections() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        footerSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < windowHeight - revealPoint) {
                section.classList.add('animated');
            }
        });
    }

    window.addEventListener('scroll', checkFooterSections);
    // Initial check
    checkFooterSections();
}

// Initialize all functionality when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateTrendingHustles();
    populateTestimonials();
    setupCategoryFiltering();
    setupSearch();
    setupMobileMenu();
    setupHeaderScroll();
    setTimeout(animateNumbers, 1000); // Delay to ensure visibility
    setupScrollReveal();
    animateSteps();
    animateTestimonials();
    animateFooter();
});