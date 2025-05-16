// JavaScript for the blog.html page

// Sample data for blog posts
const blogPosts = [
    {
        title: "10 AI Tools That Can Help You Start Your Side Hustle Today",
        excerpt: "Discover the most powerful AI tools that can help you automate tasks, create content, and grow your side hustle faster than ever before.",
        author: "John Doe",
        date: "March 15, 2024",
        readTime: "8 min",
        image: "https://placehold.co/1200x800/6366f1/ffffff?text=AI+Tools+Guide",
        category: "tech",
        featured: true
    },
    {
        title: "How to Validate Your Business Idea in 24 Hours",
        excerpt: "Learn the quickest and most effective ways to test if your business idea has real potential before investing time and money.",
        author: "Jane Smith",
        date: "March 12, 2024",
        readTime: "5 min",
        image: "https://placehold.co/1200x800/6366f1/ffffff?text=Business+Validation",
        category: "business"
    },
    {
        title: "Digital Marketing Strategies for Side Hustles",
        excerpt: "Effective marketing strategies that won't break the bank but will help you reach your target audience.",
        author: "Mike Johnson",
        date: "March 10, 2024",
        readTime: "6 min",
        image: "https://placehold.co/1200x800/6366f1/ffffff?text=Digital+Marketing",
        category: "marketing"
    },
    {
        title: "Financial Planning for Your Side Hustle",
        excerpt: "Smart financial strategies to manage your side hustle income, minimize taxes, and maximize profits.",
        author: "Sarah Williams",
        date: "March 8, 2024",
        readTime: "7 min",
        image: "https://placehold.co/1200x800/6366f1/ffffff?text=Financial+Planning",
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

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    setupCategoryFiltering();
    setupNewsletterForm();
    setupReadMoreButtons();
});
