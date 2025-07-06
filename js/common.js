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

// === Chatbot Widget ===
(function() {
    // Only show chatbot on blog.html and success-stories.html
    const path = window.location.pathname;
    if (!/blog\.html$|success-stories\.html$/.test(path)) return;
    // Create chatbot UI
    const chatbot = document.createElement('div');
    chatbot.id = 'chatbot-widget';
    chatbot.innerHTML = `
        <div id="chatbot-toggle">💬</div>
        <div id="chatbot-window" style="display:none;">
            <div id="chatbot-header">Ask HustleGPT</div>
            <form id="chatbot-form">
                <input type="text" id="chatbot-input" placeholder="Ask about blogs or stories..." autocomplete="off" />
                <button type="submit">Send</button>
            </form>
            <div id="chatbot-messages"></div>
        </div>
    `;
    document.body.appendChild(chatbot);

    // Toggle chat window
    const toggle = chatbot.querySelector('#chatbot-toggle');
    const windowEl = chatbot.querySelector('#chatbot-window');
    toggle.addEventListener('click', () => {
        windowEl.style.display = windowEl.style.display === 'none' ? 'block' : 'none';
    });
    // Close chatbot when clicking outside
    document.addEventListener('mousedown', function(e) {
        if (windowEl.style.display !== 'none' && !chatbot.contains(e.target) && e.target !== toggle) {
            windowEl.style.display = 'none';
        }
    });

    // Message rendering
    function addMessage(text, from, isHtml = false) {
        const msg = document.createElement('div');
        msg.className = 'chatbot-msg ' + (from === 'user' ? 'user' : 'bot');
        if (isHtml) {
            msg.innerHTML = text;
        } else {
            msg.textContent = text;
        }
        chatbot.querySelector('#chatbot-messages').appendChild(msg);
        chatbot.querySelector('#chatbot-messages').scrollTop = chatbot.querySelector('#chatbot-messages').scrollHeight;
    }

    // Suggestion dropdown
    const suggestionBox = document.createElement('div');
    suggestionBox.id = 'chatbot-suggestions';
    suggestionBox.style.display = 'none';
    suggestionBox.style.position = 'absolute';
    suggestionBox.style.left = '0';
    suggestionBox.style.right = '0';
    suggestionBox.style.background = '#fff';
    suggestionBox.style.border = '1px solid #eee';
    suggestionBox.style.zIndex = '10000';
    suggestionBox.style.maxHeight = '180px';
    suggestionBox.style.overflowY = 'auto';
    suggestionBox.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
    suggestionBox.style.fontSize = '1rem';
    suggestionBox.style.padding = '0.2rem 0';
    chatbot.querySelector('#chatbot-form').style.position = 'relative';
    chatbot.querySelector('#chatbot-form').appendChild(suggestionBox);

    // Update suggestions as user types
    chatbot.querySelector('#chatbot-input').addEventListener('input', function(e) {
        const val = e.target.value.trim();
        if (!val) {
            suggestionBox.style.display = 'none';
            suggestionBox.innerHTML = '';
            return;
        }
        const results = smartSearch(val);
        if (results.length) {
            suggestionBox.innerHTML = results.map(r => `<div class="chatbot-suggestion"><a href="#" class="chatbot-link" data-type="${r.type}" data-title="${r.title}">${r.title}</a></div>`).join('');
            suggestionBox.style.display = 'block';
        } else {
            suggestionBox.innerHTML = '<div class="chatbot-suggestion">No matches found.</div>';
            suggestionBox.style.display = 'block';
        }
    });

    // Hide suggestions on blur or submit
    chatbot.querySelector('#chatbot-input').addEventListener('blur', function() {
        setTimeout(() => { suggestionBox.style.display = 'none'; }, 200);
    });
    chatbot.querySelector('#chatbot-form').addEventListener('submit', function(e) {
        suggestionBox.style.display = 'none';
    });

    // Handle suggestion click
    suggestionBox.addEventListener('mousedown', function(e) {
        if (e.target.classList.contains('chatbot-link')) {
            e.preventDefault();
            const title = e.target.getAttribute('data-title');
            chatbot.querySelector('#chatbot-input').value = '';
            suggestionBox.style.display = 'none';
            // Scroll to card
            const card = Array.from(document.querySelectorAll('.post-card, .story-card')).find(c => {
                const h = c.querySelector('h2, h3');
                return h && h.textContent.trim() === title;
            });
            if (card) {
                card.scrollIntoView({behavior: 'smooth', block: 'center'});
                card.classList.add('chatbot-highlight');
                setTimeout(() => card.classList.remove('chatbot-highlight'), 2000);
            }
        }
    });

    // Smart search logic (replaceable with API call in future)
    function smartSearch(query) {
        // Split query into words
        const words = query.toLowerCase().split(/\s+/).filter(Boolean);
        let results = [];
        // Search blogs
        if (window.blogPosts) {
            window.blogPosts.forEach(post => {
                const fields = [post.title, post.excerpt, post.category].join(' ').toLowerCase();
                if (words.some(word => fields.includes(word))) {
                    results.push({
                        type: 'blog',
                        title: post.title,
                        anchor: post.title.replace(/\s+/g, '-').toLowerCase(),
                        category: post.category
                    });
                }
            });
        }
        // Search stories
        if (window.successStories) {
            window.successStories.forEach(story => {
                const fields = [story.title, story.excerpt, story.category].join(' ').toLowerCase();
                if (words.some(word => fields.includes(word))) {
                    results.push({
                        type: 'story',
                        title: story.title,
                        anchor: story.title.replace(/\s+/g, '-').toLowerCase(),
                        category: story.category
                    });
                }
            });
        }
        return results;
    }

    // Handle form submit
    chatbot.querySelector('#chatbot-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const input = chatbot.querySelector('#chatbot-input');
        const question = input.value.trim();
        if (!question) return;
        addMessage(question, 'user');
        input.value = '';
        suggestionBox.style.display = 'none';
        // --- This is the only part to swap for API integration in the future ---
        const results = smartSearch(question);
        if (results.length) {
            let msg = 'Here are some relevant results:';
            results.forEach(r => {
                msg += `<br>- <a href="#" class="chatbot-link" data-type="${r.type}" data-title="${r.title}">${r.title}</a>`;
            });
            addMessage(msg, 'bot', true);
        } else {
            addMessage('Sorry, I could not find any relevant blogs or stories.', 'bot');
        }
    });

    // Handle link clicks
    chatbot.addEventListener('click', function(e) {
        if (e.target.classList.contains('chatbot-link')) {
            e.preventDefault();
            const title = e.target.getAttribute('data-title');
            const type = e.target.getAttribute('data-type');
            if (type === 'blog' && window.showBlogModal) {
                window.showBlogModal(title);
            } else {
                // Try to scroll to the card with matching title
                const card = Array.from(document.querySelectorAll('.post-card, .story-card')).find(c => {
                    const h = c.querySelector('h2, h3');
                    return h && h.textContent.trim() === title;
                });
                if (card) {
                    card.scrollIntoView({behavior: 'smooth', block: 'center'});
                    card.classList.add('chatbot-highlight');
                    setTimeout(() => card.classList.remove('chatbot-highlight'), 2000);
                }
            }
        }
    });
})();

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
