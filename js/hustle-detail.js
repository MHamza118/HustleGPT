// JavaScript for the hustle-detail.html page

// Sample data for all hustles (this would normally come from a database)
const allHustles = [
    // E-commerce Category
    {
        id: "dropshipping",
        title: "Dropshipping Business",
        description: "Start an e-commerce store without holding inventory. Work with suppliers who ship products directly to customers, allowing you to focus on marketing and customer service without the hassle of inventory management.",
        category: "ecommerce",
        image: "https://media.istockphoto.com/id/1296110644/photo/dropshipping-delivery-service-concept.jpg?s=612x612&w=0&k=20&c=s3sbhvlpMw6v5UxjJml8TbLcs1yBPq_v_OvkJxJyxzI=",
        earnings: "$1,000 - $10,000/month",
        difficulty: "Medium",
        growth: "25%",
        overview: "Dropshipping is a retail fulfillment method where a store doesn't keep the products it sells in stock. Instead, when a store sells a product, it purchases the item from a third party and has it shipped directly to the customer. This business model is attractive because it requires less capital, is easy to start, and has low overhead costs.",
        skills: ["Marketing skills", "Customer service", "Product research", "Basic web development"],
        tools: ["E-commerce platform (Shopify, WooCommerce)", "Product research tools", "Email marketing software", "Social media accounts"],
        investment: 40 // percentage for the meter
    },
    {
        id: "print-on-demand",
        title: "Print on Demand",
        description: "Sell custom-designed products with no upfront costs. Create designs that are printed on t-shirts, mugs, posters, and more only when a customer places an order.",
        category: "ecommerce",
        image: "https://media.istockphoto.com/id/1167883152/vector/merch-clothing-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=4g6M7hHe1Z3vQoco98vo_wfDQtFciG3lh1g2b5qNe5g=",
        earnings: "$500 - $3,000/month",
        difficulty: "Medium",
        growth: "20%",
        overview: "Print on Demand (POD) is a business model where you create custom designs and sell them on various products without holding inventory. When a customer makes a purchase, the product is printed and shipped directly to them by a third-party supplier. This is perfect for artists, designers, and entrepreneurs who want to sell custom merchandise without the hassle of production and fulfillment.",
        skills: ["Graphic design", "Marketing", "Trend research", "Niche identification"],
        tools: ["Design software (Canva, Adobe)", "POD platforms (Printful, Printify)", "E-commerce platform", "Social media accounts"],
        investment: 30 // percentage for the meter
    },
    {
        id: "niche-ecommerce",
        title: "Niche E-commerce Store",
        description: "Create a specialized online store for a specific market segment. Focus on a particular category of products to establish yourself as an expert in that niche.",
        category: "ecommerce",
        image: "https://img.freepik.com/free-photo/online-shopping-concept-shopping-cart-with-bags_23-2148839775.jpg",
        earnings: "$2,000 - $15,000/month",
        difficulty: "Hard",
        growth: "28%",
        overview: "A niche e-commerce store focuses on selling products within a specific category or to a particular audience. By specializing in a niche, you can establish yourself as an expert, build a loyal customer base, and potentially face less competition than general stores. This business model allows you to deeply understand your target market and tailor your offerings to meet their specific needs.",
        skills: ["Market research", "SEO knowledge", "Inventory management", "Customer relationship management"],
        tools: ["E-commerce platform", "Inventory management software", "SEO tools", "Email marketing platform"],
        investment: 60 // percentage for the meter
    },
    
    // Digital Products Category
    {
        id: "digital-templates",
        title: "Digital Templates",
        description: "Create and sell templates for planners, resumes, and social media. Help people save time and achieve professional results with your pre-designed templates.",
        category: "digital",
        image: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg",
        earnings: "$500 - $5,000/month",
        difficulty: "Easy",
        growth: "40%",
        overview: "Digital templates are pre-designed files that customers can purchase and customize for their own use. This includes planners, resumes, social media graphics, presentation slides, and more. This business has virtually no overhead costs after creation, and products can be sold repeatedly without additional work, making it an excellent passive income stream.",
        skills: ["Design skills", "Organization", "Understanding of user needs", "Basic marketing"],
        tools: ["Design software (Canva, Adobe)", "Digital marketplace or own website", "Email marketing software"],
        investment: 20 // percentage for the meter
    },
    {
        id: "online-courses",
        title: "Online Courses",
        description: "Create and sell educational courses in your area of expertise. Share your knowledge and skills with students around the world through video lessons, worksheets, and interactive content.",
        category: "digital",
        image: "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg",
        earnings: "$1,000 - $20,000/month",
        difficulty: "Medium",
        growth: "45%",
        overview: "Online courses allow you to package your expertise into a digital product that can be sold repeatedly. You can teach anything from technical skills to hobbies, business strategies to personal development. Once created, courses can generate passive income while providing genuine value to students who want to learn your skills.",
        skills: ["Expertise in your subject", "Teaching ability", "Content creation", "Video production (basic)"],
        tools: ["Video recording equipment", "Course platform (Teachable, Thinkific)", "Video editing software", "Marketing tools"],
        investment: 40 // percentage for the meter
    }
];

// Function to get URL parameters
function getUrlParams() {
    const params = {};
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    for (const [key, value] of urlParams.entries()) {
        params[key] = value;
    }
    
    return params;
}

// Function to load hustle details
function loadHustleDetails() {
    const params = getUrlParams();
    const hustleId = params.id;
    
    if (!hustleId) {
        showError("No hustle ID provided");
        return;
    }
    
    const hustle = allHustles.find(h => h.id === hustleId);
    
    if (!hustle) {
        showError("Hustle not found");
        return;
    }
    
    // Update page title
    document.title = `${hustle.title} - HustleGPT`;
    
    // Update breadcrumb
    document.getElementById('hustle-title-breadcrumb').textContent = hustle.title;
    
    // Update hero section
    document.getElementById('hustle-image').src = hustle.image;
    document.getElementById('hustle-image').alt = hustle.title;
    
    // Set badge class based on growth rate
    const hustleBadge = document.getElementById('hustle-badge');
    hustleBadge.textContent = parseFloat(hustle.growth) >= 40 ? 'Hot' : parseFloat(hustle.growth) >= 30 ? 'New' : 'Popular';
    hustleBadge.className = `hustle-badge ${parseFloat(hustle.growth) >= 40 ? 'hot' : parseFloat(hustle.growth) >= 30 ? 'new' : ''}`;
    
    document.getElementById('hustle-title').textContent = hustle.title;
    document.getElementById('hustle-growth').textContent = `${hustle.growth} Growth`;
    document.getElementById('hustle-earnings').textContent = hustle.earnings;
    
    // Set difficulty icon and text
    const difficultyIcon = document.getElementById('hustle-difficulty-icon');
    difficultyIcon.className = hustle.difficulty === 'Easy' ? 'fas fa-seedling' : 
                              hustle.difficulty === 'Medium' ? 'fas fa-leaf' : 'fas fa-tree';
    document.getElementById('hustle-difficulty').textContent = `${hustle.difficulty} Difficulty`;
    
    document.getElementById('hustle-category').textContent = hustle.category.charAt(0).toUpperCase() + hustle.category.slice(1);
    document.getElementById('hustle-description').textContent = hustle.description;
    
    // Update overview tab
    if (hustle.overview) {
        document.getElementById('hustle-overview').textContent = hustle.overview;
    }
    
    // Update requirements tab
    if (hustle.skills && hustle.skills.length > 0) {
        const skillsList = document.getElementById('skills-list');
        skillsList.innerHTML = '';
        hustle.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });
    }
    
    if (hustle.tools && hustle.tools.length > 0) {
        const toolsList = document.getElementById('tools-list');
        toolsList.innerHTML = '';
        hustle.tools.forEach(tool => {
            const li = document.createElement('li');
            li.textContent = tool;
            toolsList.appendChild(li);
        });
    }
    
    if (hustle.investment) {
        document.getElementById('investment-meter').style.width = `${hustle.investment}%`;
        
        let investmentText = "Low investment required to get started.";
        if (hustle.investment > 70) {
            investmentText = "High initial investment required.";
        } else if (hustle.investment > 30) {
            investmentText = "Moderate investment required to get started.";
        }
        document.getElementById('investment-description').textContent = investmentText;
    }
    
    // Load related hustles
    loadRelatedHustles(hustle);
}

// Function to show error message
function showError(message) {
    const mainContent = document.querySelector('.hustle-detail-content');
    mainContent.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-circle"></i>
            <h2>Oops! Something went wrong</h2>
            <p>${message}</p>
            <a href="trending.html" class="btn btn-primary">Back to Trending Hustles</a>
        </div>
    `;
}

// Function to load related hustles
function loadRelatedHustles(currentHustle) {
    const relatedHustlesContainer = document.getElementById('related-hustles');
    
    // Find hustles in the same category
    const relatedHustles = allHustles.filter(hustle => 
        hustle.category === currentHustle.category && hustle.id !== currentHustle.id
    ).slice(0, 3); // Limit to 3 related hustles
    
    relatedHustlesContainer.innerHTML = '';
    
    relatedHustles.forEach(hustle => {
        const hustleCard = document.createElement('div');
        hustleCard.className = 'trending-item reveal fade-bottom';
        
        hustleCard.innerHTML = `
            <div class="trending-badge ${parseFloat(hustle.growth) >= 40 ? 'hot' : parseFloat(hustle.growth) >= 30 ? 'new' : ''}">${parseFloat(hustle.growth) >= 40 ? 'Hot' : parseFloat(hustle.growth) >= 30 ? 'New' : 'Popular'}</div>
            <img src="${hustle.image}" alt="${hustle.title}">
            <div class="trending-item-content">
                <h3>${hustle.title}</h3>
                <p>${hustle.description}</p>
                <div class="trending-metrics">
                    <span><i class="fas fa-chart-line"></i> ${hustle.growth} Growth</span>
                    <span><i class="fas fa-dollar-sign"></i> ${hustle.earnings}</span>
                </div>
                <a href="hustle-detail.html?id=${hustle.id}" class="btn btn-primary">Learn More</a>
            </div>
        `;
        
        relatedHustlesContainer.appendChild(hustleCard);
    });
}

// Function to handle tab switching
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadHustleDetails();
    setupTabs();
});
