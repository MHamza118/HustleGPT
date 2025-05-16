// JavaScript for the trending.html page

// Sample data for trending hustles
const trendingHustles = [
    // E-commerce Category
    {
        id: "dropshipping",
        title: "Dropshipping Business",
        description: "Start an e-commerce store without holding inventory",
        category: "ecommerce",
        image: "https://media.istockphoto.com/id/1296110644/photo/dropshipping-delivery-service-concept.jpg?s=612x612&w=0&k=20&c=s3sbhvlpMw6v5UxjJml8TbLcs1yBPq_v_OvkJxJyxzI=",
        earnings: "$1,000 - $10,000/month",
        difficulty: "Medium",
        growth: "25%"
    },
    {
        id: "print-on-demand",
        title: "Print on Demand",
        description: "Sell custom-designed products with no upfront costs",
        category: "ecommerce",
        image: "https://media.istockphoto.com/id/1167883152/vector/merch-clothing-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=4g6M7hHe1Z3vQoco98vo_wfDQtFciG3lh1g2b5qNe5g=",
        earnings: "$500 - $3,000/month",
        difficulty: "Medium",
        growth: "20%"
    },
    {
        id: "niche-ecommerce",
        title: "Niche E-commerce Store",
        description: "Create a specialized online store for a specific market segment",
        category: "ecommerce",
        image: "https://img.freepik.com/free-photo/online-shopping-concept-shopping-cart-with-bags_23-2148839775.jpg",
        earnings: "$2,000 - $15,000/month",
        difficulty: "Hard",
        growth: "28%"
    },

    // Digital Products Category
    {
        id: "digital-templates",
        title: "Digital Templates",
        description: "Create and sell templates for planners, resumes, and social media",
        category: "digital",
        image: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg",
        earnings: "$500 - $5,000/month",
        difficulty: "Easy",
        growth: "40%"
    },
    {
        id: "online-courses",
        title: "Online Courses",
        description: "Create and sell educational courses in your area of expertise",
        category: "digital",
        image: "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg",
        earnings: "$1,000 - $20,000/month",
        difficulty: "Medium",
        growth: "45%"
    },
    {
        id: "stock-photography",
        title: "Stock Photography",
        description: "Sell your photos on stock photography platforms",
        category: "digital",
        image: "https://img.freepik.com/free-photo/photographer-taking-photos-outdoors_23-2149020423.jpg",
        earnings: "$300 - $3,000/month",
        difficulty: "Medium",
        growth: "15%"
    },

    // Services Category
    {
        id: "freelance-writing",
        title: "Freelance Writing",
        description: "Write content for blogs, websites, and businesses",
        category: "services",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKonw4f6SUyFED7nTHzxn8-6vNBnK6mMcQQ&s",
        earnings: "$500 - $5,000/month",
        difficulty: "Easy",
        growth: "30%"
    },
    {
        id: "online-tutoring",
        title: "Online Tutoring",
        description: "Teach subjects you're passionate about",
        category: "services",
        image: "https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg",
        earnings: "$1,000 - $4,000/month",
        difficulty: "Medium",
        growth: "35%"
    },
    {
        id: "virtual-assistant",
        title: "Virtual Assistant",
        description: "Provide administrative support to businesses remotely",
        category: "services",
        image: "https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg",
        earnings: "$1,500 - $5,000/month",
        difficulty: "Easy",
        growth: "38%"
    },

    // Content Creation Category
    {
        id: "youtube-channel",
        title: "YouTube Channel",
        description: "Create video content and monetize through ads and sponsorships",
        category: "content",
        image: "https://img.freepik.com/free-photo/young-woman-recording-video-vlog-home_23-2149019578.jpg",
        earnings: "$500 - $50,000/month",
        difficulty: "Hard",
        growth: "32%"
    },
    {
        id: "podcast-production",
        title: "Podcast Production",
        description: "Start a podcast on topics you're passionate about",
        category: "content",
        image: "https://img.freepik.com/free-photo/close-up-recording-studio-equipment_23-2149048234.jpg",
        earnings: "$300 - $10,000/month",
        difficulty: "Medium",
        growth: "50%"
    },
    {
        id: "social-media-management",
        title: "Social Media Management",
        description: "Manage social media accounts for businesses and influencers",
        category: "content",
        image: "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063136.jpg",
        earnings: "$1,000 - $7,000/month",
        difficulty: "Medium",
        growth: "42%"
    }
];

// Function to handle category filtering
function setupCategoryFiltering() {
    const categorySelect = document.getElementById('category');
    const investmentSelect = document.getElementById('investment');

    if (!categorySelect || !investmentSelect) return;

    // Initialize the grid with all hustles on page load
    updateTrendingGrid(trendingHustles);

    function filterHustles() {
        const categoryValue = categorySelect.value;
        const investmentValue = investmentSelect.value;

        // Filter based on selected criteria
        let filteredHustles = [...trendingHustles];

        if (categoryValue !== 'all') {
            filteredHustles = filteredHustles.filter(hustle =>
                hustle.category === categoryValue
            );
        }

        if (investmentValue !== 'all') {
            // This is a simplified example - in a real app, you'd have more detailed filtering
            filteredHustles = filteredHustles.filter(hustle => {
                if (investmentValue === 'low' && hustle.difficulty === 'Easy') return true;
                if (investmentValue === 'medium' && hustle.difficulty === 'Medium') return true;
                if (investmentValue === 'high' && hustle.difficulty === 'Hard') return true;
                return false;
            });
        }

        // Update the grid
        updateTrendingGrid(filteredHustles);
    }

    categorySelect.addEventListener('change', filterHustles);
    investmentSelect.addEventListener('change', filterHustles);
}

// Function to update the trending grid
function updateTrendingGrid(hustles) {
    const trendingGrid = document.querySelector('.trending-grid');
    if (!trendingGrid) return;

    // Clear the grid
    trendingGrid.innerHTML = '';

    // Show message if no hustles match the filters
    if (hustles.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <i class="fas fa-search"></i>
            <h3>No matching hustles found</h3>
            <p>Try adjusting your filters to see more results.</p>
        `;
        trendingGrid.appendChild(noResults);
        return;
    }

    // Add hustles to the grid
    hustles.forEach((hustle, index) => {
        const hustleItem = document.createElement('div');
        hustleItem.className = 'trending-item reveal fade-bottom';
        hustleItem.style = `--delay: ${0.1 * (index % 3 + 1)}s`;

        // Determine badge type based on growth rate
        let badgeText = 'Popular';
        let badgeClass = '';

        if (parseFloat(hustle.growth) >= 40) {
            badgeText = 'Hot';
            badgeClass = 'hot';
        } else if (parseFloat(hustle.growth) >= 30) {
            badgeText = 'New';
            badgeClass = 'new';
        }

        // Determine difficulty class
        let difficultyClass = '';
        if (hustle.difficulty === 'Easy') {
            difficultyClass = 'easy';
        } else if (hustle.difficulty === 'Medium') {
            difficultyClass = 'medium';
        } else if (hustle.difficulty === 'Hard') {
            difficultyClass = 'hard';
        }

        hustleItem.innerHTML = `
            <div class="trending-badge ${badgeClass}">${badgeText}</div>
            <img src="${hustle.image}" alt="${hustle.title}">
            <div class="trending-item-content">
                <h3>${hustle.title}</h3>
                <p>${hustle.description}</p>
                <div class="trending-metrics">
                    <span><i class="fas fa-chart-line"></i> ${hustle.growth} Growth</span>
                    <span><i class="fas fa-dollar-sign"></i> ${hustle.earnings}</span>
                </div>
                <div class="trending-difficulty">
                    <span class="difficulty ${difficultyClass}">
                        <i class="fas fa-${hustle.difficulty === 'Easy' ? 'seedling' : hustle.difficulty === 'Medium' ? 'leaf' : 'tree'}"></i>
                        ${hustle.difficulty} Difficulty
                    </span>
                </div>
                <a href="hustle-detail.html?id=${hustle.id}" class="learn-more btn btn-primary">Learn More</a>
            </div>
        `;

        trendingGrid.appendChild(hustleItem);
    });

    // No need for event listeners as we're using links now

    // Re-initialize animations
    if (typeof setupScrollReveal === 'function') {
        setupScrollReveal();
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    setupCategoryFiltering();
});
