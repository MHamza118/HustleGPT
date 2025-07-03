// JavaScript for the blog.html page

// Sample data for blog posts
const blogPosts = [
    {
        title: "10 AI Tools That Can Help You Start Your Side Hustle Today",
        excerpt: "Discover the most powerful AI tools that can help you automate tasks, create content, and grow your side hustle faster than ever before.",
        author: "John Doe",
        date: "March 15, 2024",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", // AI/tech
        category: "tech",
        featured: true
    },
    {
        title: "How to Validate Your Business Idea in 24 Hours",
        excerpt: "Learn the quickest and most effective ways to test if your business idea has real potential before investing time and money.",
        author: "Jane Smith",
        date: "March 12, 2024",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80", // Business
        category: "business"
    },
    {
        title: "Digital Marketing Strategies for Side Hustles",
        excerpt: "Effective marketing strategies that won't break the bank but will help you reach your target audience.",
        author: "Mike Johnson",
        date: "March 10, 2024",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // Marketing
        category: "marketing"
    },
    {
        title: "Financial Planning for Your Side Hustle",
        excerpt: "Smart financial strategies to manage your side hustle income, minimize taxes, and maximize profits.",
        author: "Sarah Williams",
        date: "March 8, 2024",
        readTime: "7 min",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80", // Finance
        category: "finance"
    }
];

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
            
            const category = button.getAttribute('data-category');
            filterPosts(category);
        });
    });
}

// Function to filter posts by category
function filterPosts(category) {
    const postCards = document.querySelectorAll('.post-card');
    
    postCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to handle newsletter subscription
function setupNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (email === '') {
            alert('Please enter your email address.');
            return;
        }
        
        // In a real app, this would send the email to a server
        // For this demo, we'll just show a success message
        newsletterForm.innerHTML = `
            <div class="success-message">
                <i class="fas fa-check-circle"></i>
                <p>Thank you for subscribing! Check your email for confirmation.</p>
            </div>
        `;
    });
}

// Function to handle "Read More" buttons
function setupReadMoreButtons() {
    const readMoreButtons = document.querySelectorAll('.read-more');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // In a real app, this would navigate to the blog post page
            // For this demo, we'll just show an alert
            alert('This would navigate to the full blog post in a real application.');
        });
    });
}

// Function to render blog posts dynamically
function renderBlogPosts() {
    const featuredSection = document.querySelector('.featured-post');
    const blogGrid = document.querySelector('.blog-grid');
    if (!featuredSection || !blogGrid) return;

    // Clear existing content
    featuredSection.innerHTML = '';
    blogGrid.innerHTML = '';

    // Render featured post
    const featured = blogPosts.find(post => post.featured);
    if (featured) {
        featuredSection.innerHTML = `
            <article class="post-card" data-category="${featured.category}">
                <div class="post-image">
                    <img src="${featured.image}" alt="${featured.title}">
                    <div class="post-date">
                        <span class="day">${new Date(featured.date).getDate()}</span>
                        <span class="month">${new Date(featured.date).toLocaleString('default', { month: 'short' })}</span>
                    </div>
                </div>
                <div class="post-content">
                    <div class="post-tags">
                        <span class="post-tag">Featured</span>
                        <span class="post-tag">${capitalize(featured.category)}</span>
                    </div>
                    <h2>${featured.title}</h2>
                    <p class="post-meta"><i class="fas fa-user"></i> By ${featured.author} | <i class="fas fa-clock"></i> ${featured.readTime} read</p>
                    <p class="post-excerpt">${featured.excerpt}</p>
                    <a href="#" class="read-more btn btn-primary">Read More</a>
                </div>
            </article>
        `;
    }

    // Render other posts
    blogPosts.filter(post => !post.featured).forEach((post, idx) => {
        blogGrid.innerHTML += `
            <article class="post-card reveal fade-bottom" style="--delay: 0.${idx + 1}s" data-category="${post.category}">
                <div class="post-image">
                    <img src="${post.image}" alt="${post.title}">
                    <div class="post-date">
                        <span class="day">${new Date(post.date).getDate()}</span>
                        <span class="month">${new Date(post.date).toLocaleString('default', { month: 'short' })}</span>
                    </div>
                </div>
                <div class="post-content">
                    <div class="post-tags">
                        <span class="post-tag">${capitalize(post.category)}</span>
                    </div>
                    <h3>${post.title}</h3>
                    <p class="post-meta"><i class="fas fa-user"></i> By ${post.author} | <i class="fas fa-clock"></i> ${post.readTime} read</p>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <a href="#" class="read-more btn btn-primary">Read More</a>
                </div>
            </article>
        `;
    });
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts();
    setupCategoryFiltering();
    setupNewsletterForm();
    setupReadMoreButtons();
});
