// JavaScript for the success-stories.html page

// Sample data for success stories
const successStories = [
    {
        id: "sarah-johnson",
        name: "Sarah Johnson",
        business: "Digital Products",
        timeframe: "6 months",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        title: "From Side Hustle to $10K/Month",
        excerpt: "I started creating digital templates as a side project. With HustleGPT's guidance, I turned it into a full-time business generating over $10,000 monthly.",
        category: "digital",
        rating: 5,
        fullStory: `
            <h2>From Side Hustle to $10K/Month</h2>
            <p class="story-meta">Sarah Johnson | Digital Products | 6 months</p>

            <p>I've always been an organized person with a passion for design, but I never thought I could turn these skills into a profitable business until I discovered HustleGPT.</p>

            <p>Working as a marketing coordinator, I was feeling unfulfilled and underpaid. I wanted to create something of my own, but I wasn't sure where to start. That's when I came across HustleGPT and took their AI assessment.</p>

            <h3>The Beginning</h3>
            <p>Based on my skills and interests, HustleGPT recommended I create digital templates for planners, social media, and presentations. I started with just five planner templates designed in Canva and set up a simple Etsy shop.</p>

            <p>My first month, I made only $150 in sales. It wasn't much, but it was enough to show me the potential. Following HustleGPT's step-by-step guide, I expanded my product line and improved my marketing strategy.</p>

            <h3>The Turning Point</h3>
            <p>The real breakthrough came when I implemented HustleGPT's SEO strategies for Etsy and created a Pinterest marketing plan. My sales jumped to $1,200 in the third month. I reinvested that money into creating more templates and launching my own website.</p>

            <p>By month five, I had over 50 digital products and was making $5,000 monthly. I quit my full-time job to focus on my business, and by month six, I crossed the $10,000 monthly revenue mark.</p>

            <h3>Key Lessons</h3>
            <ul>
                <li>Start small and test the market before scaling</li>
                <li>Reinvest profits into creating more products</li>
                <li>Focus on SEO and Pinterest for digital products</li>
                <li>Build an email list from day one</li>
                <li>Create systems that allow you to scale without burning out</li>
            </ul>

            <p>Today, I have a team of two virtual assistants helping me manage the business, and I'm working fewer hours while making more money than I ever did at my corporate job. I'm grateful to HustleGPT for showing me the path and providing the tools I needed to succeed.</p>

            <p>If you're considering starting a digital products business, my advice is to just start. Your first products don't need to be perfect. Get them out there, gather feedback, and improve as you go.</p>
        `
    },
    {
        id: "james-rodriguez",
        name: "James Rodriguez",
        business: "Content Creation",
        timeframe: "1 year",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        title: "AI-Powered Content Agency",
        excerpt: "Using AI tools and HustleGPT's recommendations, I built a content agency that now serves 50+ clients worldwide.",
        category: "content",
        rating: 4.5,
        fullStory: `
            <h2>AI-Powered Content Agency</h2>
            <p class="story-meta">James Rodriguez | Content Creation | 1 year</p>

            <p>Before discovering HustleGPT, I was a freelance writer struggling to make ends meet. I was working long hours for low pay, and I knew there had to be a better way.</p>

            <p>When I took HustleGPT's assessment, it suggested I leverage AI tools to scale my content creation business. At first, I was skeptical—I thought AI would replace writers like me, not empower us.</p>

            <h3>The Beginning</h3>
            <p>Following HustleGPT's recommendation, I started learning about AI writing tools and how to use them effectively. I discovered that by combining AI with my human expertise, I could produce high-quality content much faster.</p>

            <p>I rebranded myself as an "AI-Enhanced Content Strategist" and started offering packages that included blog posts, social media content, and email newsletters at competitive prices.</p>

            <h3>The Turning Point</h3>
            <p>The game-changer was implementing HustleGPT's client acquisition strategy. Instead of competing with thousands of writers on freelance platforms, I started reaching out directly to businesses that needed ongoing content but couldn't afford a full-time content team.</p>

            <p>Within three months, I had 10 retainer clients paying me a total of $5,000 monthly. As demand grew, I hired and trained two junior writers to help with the workload, teaching them my AI-enhanced writing process.</p>

            <h3>Scaling the Business</h3>
            <p>By month six, we were serving 25 clients and generating $15,000 monthly. I continued to refine our processes and build a team. Today, one year later, my agency has 7 writers, 2 editors, and a project manager, serving over 50 clients worldwide with a monthly revenue of $45,000.</p>

            <h3>Key Lessons</h3>
            <ul>
                <li>Embrace new technologies instead of fearing them</li>
                <li>Focus on solving a specific problem for a specific audience</li>
                <li>Build systems and processes that can be delegated</li>
                <li>Invest in training your team to maintain quality</li>
                <li>Prioritize long-term client relationships over one-off projects</li>
            </ul>

            <p>HustleGPT didn't just help me find a business idea—it provided a roadmap for scaling that business beyond what I thought was possible. I'm now earning more than I ever imagined while working fewer hours and helping other writers build their careers.</p>
        `
    },
    {
        id: "maria-kim",
        name: "Maria Kim",
        business: "E-commerce",
        timeframe: "8 months",
        image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        title: "E-commerce Empire",
        excerpt: "Starting with just $500, I built a successful e-commerce store that now generates $15,000 in monthly revenue.",
        category: "ecommerce",
        rating: 5,
        fullStory: `
            <h2>E-commerce Empire</h2>
            <p class="story-meta">Maria Kim | E-commerce | 8 months</p>

            <p>I was working as a retail manager when the pandemic hit and our store had to close temporarily. During that time, I started researching online business opportunities and found HustleGPT.</p>

            <p>After taking the AI assessment, HustleGPT recommended I start a niche e-commerce store using dropshipping. I was hesitant because I'd heard mixed things about dropshipping, but the detailed guide HustleGPT provided addressed all my concerns.</p>

            <h3>Finding My Niche</h3>
            <p>Using HustleGPT's niche research framework, I identified a growing market: eco-friendly kitchen products. There was increasing demand but not too many established players yet.</p>

            <p>I launched my store with just five carefully selected products and a $500 budget for ads. My first month, I made $1,200 in sales with a profit of about $300.</p>

            <h3>Overcoming Challenges</h3>
            <p>The biggest challenge was shipping delays from suppliers. Following HustleGPT's advice, I found reliable suppliers with warehouses in the US, which reduced shipping times dramatically. This improved customer satisfaction and reduced return rates.</p>

            <p>Another challenge was standing out in a competitive market. HustleGPT suggested I create educational content about sustainable living to attract my target audience. I started a blog and Instagram account sharing tips for reducing kitchen waste, which drove organic traffic to my store.</p>

            <h3>Scaling Up</h3>
            <p>By month four, I was making $5,000 in monthly sales. I reinvested profits into expanding my product line and improving my website. I also implemented HustleGPT's email marketing strategy, which significantly increased repeat purchases.</p>

            <p>In month six, I hit $10,000 in monthly revenue and was able to quit my retail job. Now, eight months in, my store generates $15,000 monthly with a 30% profit margin.</p>

            <h3>Key Lessons</h3>
            <ul>
                <li>Choose a niche you're genuinely interested in</li>
                <li>Focus on solving customer problems, not just selling products</li>
                <li>Invest in quality product images and descriptions</li>
                <li>Build an email list from day one</li>
                <li>Test and optimize ads continuously</li>
                <li>Prioritize customer service to build a loyal customer base</li>
            </ul>

            <p>What I love most about this business is the flexibility it gives me. I can work from anywhere, and much of the process is now automated. HustleGPT didn't just help me start a business—it helped me create a lifestyle I love.</p>
        `
    },
    {
        id: "david-chen",
        name: "David Chen",
        business: "Services",
        timeframe: "10 months",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        title: "Freelance Design Studio",
        excerpt: "I turned my design skills into a thriving freelance business with HustleGPT's help. Now I earn $8,000/month working with clients I love.",
        category: "services",
        rating: 4.5,
        fullStory: `
            <h2>Freelance Design Studio</h2>
            <p class="story-meta">David Chen | Services | 10 months</p>

            <p>I was working as an in-house graphic designer for a company that didn't value creativity or pay me what I was worth. I had dreams of freelancing but was intimidated by the business side of things—finding clients, setting rates, managing projects.</p>

            <p>When I discovered HustleGPT, their assessment immediately identified that my design skills could be leveraged into a profitable freelance business. More importantly, they provided a step-by-step roadmap for making it happen.</p>

            <h3>Getting Started</h3>
            <p>Following HustleGPT's guidance, I niched down to focus specifically on brand identity design for tech startups. This focus helped me stand out in a crowded market and speak directly to the clients I wanted to work with.</p>

            <p>I created a portfolio website showcasing my best work and developed a streamlined client onboarding process. HustleGPT's templates for proposals, contracts, and client questionnaires saved me countless hours.</p>

            <h3>Finding Clients</h3>
            <p>The most valuable advice from HustleGPT was to stop relying on freelance platforms and start direct outreach to potential clients. I created a list of 50 tech startups that had recently received funding but didn't have strong branding.</p>

            <p>Using HustleGPT's cold email templates, I reached out to these companies. The response rate was amazing—about 15% replied, and I landed my first three clients within two weeks.</p>

            <h3>Scaling My Business</h3>
            <p>As my client base grew, I implemented HustleGPT's pricing strategy, gradually increasing my rates as demand increased. I also created a tiered service offering that allowed clients to choose the level of service they needed.</p>

            <p>By month six, I was earning $5,000 monthly—more than my previous full-time job. I quit to focus on freelancing full-time. Now, ten months in, I consistently earn $8,000-$10,000 per month working with clients I genuinely enjoy.</p>

            <h3>Key Lessons</h3>
            <ul>
                <li>Specialize in a specific niche rather than being a generalist</li>
                <li>Charge based on value, not hourly rates</li>
                <li>Create systems for everything—client onboarding, project management, invoicing</li>
                <li>Don't be afraid to say no to projects that aren't a good fit</li>
                <li>Invest time in building relationships, not just completing projects</li>
            </ul>

            <p>The best part is that I now have complete control over my schedule and the types of projects I take on. I work fewer hours than I did at my corporate job but earn significantly more. HustleGPT gave me the confidence and tools to make the leap, and I've never looked back.</p>
        `
    },
    {
        id: "alex-patel",
        name: "Alex Patel",
        business: "Digital Products",
        timeframe: "9 months",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        title: "Mobile App Success Story",
        excerpt: "I created a productivity app that now has over 50,000 monthly active users and generates $12,000 in monthly revenue.",
        category: "digital",
        rating: 5,
        fullStory: `
            <h2>Mobile App Success Story</h2>
            <p class="story-meta">Alex Patel | Digital Products | 9 months</p>

            <p>As a software developer working for a large corporation, I felt my creativity was being stifled. I had ideas for apps that could solve real problems, but I didn't know how to turn them into a viable business.</p>

            <p>HustleGPT's assessment identified that my technical skills combined with my interest in productivity could be channeled into creating a successful app business. They provided a framework for validating app ideas before investing significant time in development.</p>

            <h3>Finding the Right Idea</h3>
            <p>Using HustleGPT's validation process, I surveyed potential users about their productivity pain points. I discovered that many people struggled with time blocking—they knew it was effective but found existing solutions too complicated.</p>

            <p>I created a simple prototype of a time-blocking app that focused on ease of use and visual appeal. I shared it with 50 potential users and gathered feedback before writing a single line of code for the actual app.</p>

            <h3>Development and Launch</h3>
            <p>Based on the feedback, I developed the first version of my app in just six weeks, working evenings and weekends. Following HustleGPT's launch strategy, I built an email list of 500 interested users before the app was even available.</p>

            <p>When I launched, those initial users provided valuable feedback and helped spread the word. I offered a freemium model with basic features free and advanced features for $4.99/month or $49.99/year.</p>

            <h3>Growth and Scaling</h3>
            <p>The app gained traction quickly, reaching 5,000 users in the first month with a 3% conversion rate to paid plans. Following HustleGPT's user acquisition strategy, I focused on content marketing, creating productivity articles that naturally mentioned my app.</p>

            <p>By month six, the app had 30,000 users and was generating $7,000 monthly. I quit my full-time job to focus on improving the app and expanding to Android (it was initially iOS-only).</p>

            <p>Now, nine months in, the app has over 50,000 monthly active users and generates $12,000 in monthly revenue with very low overhead.</p>

            <h3>Key Lessons</h3>
            <ul>
                <li>Validate your idea before building anything</li>
                <li>Focus on solving one specific problem extremely well</li>
                <li>Build a community around your product</li>
                <li>Listen to user feedback but stay true to your core vision</li>
                <li>Don't quit your day job until you have proven traction</li>
            </ul>

            <p>HustleGPT's guidance was invaluable throughout this journey. Their framework for validating ideas, building MVPs, and marketing digital products saved me from many common mistakes first-time app entrepreneurs make.</p>
        `
    },
    {
        id: "olivia-williams",
        name: "Olivia Williams",
        business: "Content",
        timeframe: "7 months",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        title: "YouTube Channel to Full-Time Income",
        excerpt: "I turned my passion for sustainable living into a YouTube channel that now has 200,000 subscribers and generates $9,000 monthly.",
        category: "content",
        rating: 4.5,
        fullStory: `
            <h2>YouTube Channel to Full-Time Income</h2>
            <p class="story-meta">Olivia Williams | Content Creation | 7 months</p>

            <p>I've always been passionate about sustainable living and zero-waste practices, but I never thought I could make a living from it. I was working as an administrative assistant, feeling unfulfilled and underpaid.</p>

            <p>When I took HustleGPT's assessment, it suggested I start a YouTube channel focused on sustainable living. I was hesitant because the space seemed saturated, but HustleGPT showed me how to find a unique angle.</p>

            <h3>Finding My Niche</h3>
            <p>Following HustleGPT's content strategy, I niched down to focus specifically on "Sustainable Living for Busy Professionals"—practical, time-efficient ways to reduce waste without overhauling your entire lifestyle.</p>

            <p>I started with basic equipment—just my smartphone and a $50 microphone. My first videos were simple but provided genuine value, showing how to incorporate sustainable practices into a busy schedule.</p>

            <h3>Growth Strategy</h3>
            <p>HustleGPT's YouTube growth framework was a game-changer. Instead of trying to go viral, I focused on creating highly searchable content that answered specific questions. I also created a consistent posting schedule—two videos per week, every week.</p>

            <p>By month three, I had 10,000 subscribers and was making about $500 monthly from ad revenue. I reinvested that money into better equipment and started reaching out to sustainable brands for sponsorship opportunities.</p>

            <h3>Monetization Breakthrough</h3>
            <p>The real breakthrough came when I followed HustleGPT's advice to diversify my income streams. I created a digital product—a 30-Day Sustainable Living Challenge workbook—and promoted it to my audience. It sold 500 copies in the first month at $27 each.</p>

            <p>I also launched a membership community where subscribers could get additional content, live Q&As, and a supportive community for $15/month. Within two months, I had 300 members.</p>

            <h3>Current Success</h3>
            <p>Seven months in, my channel has grown to 200,000 subscribers. I now earn approximately:</p>
            <ul>
                <li>$3,000/month from YouTube ad revenue</li>
                <li>$2,500/month from brand sponsorships</li>
                <li>$1,500/month from digital product sales</li>
                <li>$2,000/month from membership subscriptions</li>
            </ul>

            <p>I was able to quit my job after month five and now work full-time on my content business. The best part is that I'm making a positive impact while doing work I love.</p>

            <h3>Key Lessons</h3>
            <ul>
                <li>Consistency matters more than perfection</li>
                <li>Find a specific angle in a popular niche</li>
                <li>Create content that solves specific problems</li>
                <li>Diversify your income streams early</li>
                <li>Build a community, not just an audience</li>
            </ul>

            <p>HustleGPT provided not just the initial idea but a complete roadmap for growing and monetizing my channel. Their frameworks for content creation, audience building, and monetization were invaluable.</p>
        `
    },
    {
        id: "michael-johnson",
        name: "Michael Johnson",
        business: "Services",
        timeframe: "11 months",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        title: "From Hobby to Profitable Business",
        excerpt: "I turned my woodworking hobby into a custom furniture business that now generates $12,000 monthly with a 3-month waiting list.",
        category: "services",
        rating: 5,
        fullStory: `
            <h2>From Hobby to Profitable Business</h2>
            <p class="story-meta">Michael Johnson | Services | 11 months</p>

            <p>Woodworking had been my hobby for years. I would make pieces for friends and family on weekends while working my corporate job in finance. I dreamed of turning my passion into a business but didn't think it was financially viable.</p>

            <p>When I discovered HustleGPT, their assessment surprised me by suggesting that my woodworking skills could indeed become a profitable business—if I positioned it correctly and targeted the right market.</p>

            <h3>Finding the Right Positioning</h3>
            <p>HustleGPT's market research framework helped me identify an underserved niche: custom, sustainable furniture for home offices. With the rise of remote work, people were investing in their home workspaces but struggling to find pieces that fit their specific spaces and aesthetic preferences.</p>

            <p>Instead of competing with mass-produced furniture on price, I positioned my work as heirloom-quality, customized pieces made from sustainable materials—worth the investment for discerning professionals.</p>

            <h3>Building a Brand and Online Presence</h3>
            <p>Following HustleGPT's branding guide, I created a cohesive brand identity that communicated craftsmanship and sustainability. I built a simple website showcasing my work and the stories behind each piece.</p>

            <p>The most valuable advice was to document my process. I started sharing behind-the-scenes content on Instagram and TikTok, showing how each piece was made from raw lumber to finished product. This content resonated with people who appreciated craftsmanship.</p>

            <h3>From Side Hustle to Full-Time Business</h3>
            <p>My first three months, I worked evenings and weekends, completing one custom desk per month while still working my day job. Each piece sold for $2,000-$3,000, providing a nice supplemental income.</p>

            <p>As demand grew, I implemented HustleGPT's pricing strategy, gradually increasing my rates and requiring a 50% deposit upfront. By month six, I had a two-month waiting list despite raising my prices.</p>

            <p>In month seven, I took the leap and quit my corporate job. I invested in better tools and a larger workshop, which increased my efficiency and allowed me to take on more projects.</p>

            <h3>Current Success</h3>
            <p>Now, eleven months in, my business generates approximately $12,000 monthly. I have a three-month waiting list for custom pieces and have hired an apprentice to help with production.</p>

            <p>I've expanded my offerings to include a signature line of adjustable standing desks that combine traditional woodworking with modern functionality. These pieces start at $3,500 and have been featured in several design publications.</p>

            <h3>Key Lessons</h3>
            <ul>
                <li>Don't compete on price—compete on quality, customization, and story</li>
                <li>Document your process—people value transparency and craftsmanship</li>
                <li>Require deposits to improve cash flow and confirm serious clients</li>
                <li>Raise your prices gradually as demand increases</li>
                <li>Focus on a specific niche rather than trying to appeal to everyone</li>
            </ul>

            <p>HustleGPT helped me transform what I thought was just a hobby into a thriving business that's more financially rewarding and personally fulfilling than my previous career. Their framework for validating business ideas, building a brand, and scaling a service-based business was exactly what I needed.</p>
        `
    },
    {
        id: "sophia-garcia",
        name: "Sophia Garcia",
        business: "Ecommerce",
        timeframe: "1 year",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        title: "Niche Subscription Box Success",
        excerpt: "I created a self-care subscription box for new moms that now has 1,500 monthly subscribers and generates $45,000 in monthly revenue.",
        category: "ecommerce",
        rating: 5,
        fullStory: `
            <h2>Niche Subscription Box Success</h2>
            <p class="story-meta">Sophia Garcia | E-commerce | 1 year</p>

            <p>After having my first child, I struggled with postpartum depression and felt there weren't enough resources supporting new mothers' mental health and self-care. I wanted to create something that would help other moms but wasn't sure how to turn it into a viable business.</p>

            <p>HustleGPT's assessment suggested a subscription box business focused on postpartum self-care. The idea resonated with me immediately, and their detailed guide on starting a subscription business gave me the confidence to move forward.</p>

            <h3>Market Research and Validation</h3>
            <p>Following HustleGPT's validation framework, I joined several online communities for new mothers and conducted surveys to understand their needs. I discovered that many new moms wanted to prioritize self-care but didn't have the time or energy to research and purchase products.</p>

            <p>I created a landing page describing my concept—a monthly box of self-care items specifically curated for postpartum recovery and new motherhood—and collected email sign-ups from interested customers. Within two weeks, I had 200 potential customers.</p>

            <h3>Launching with a Minimum Viable Product</h3>
            <p>Rather than trying to create the perfect product, I followed HustleGPT's advice to start small. I launched with just 50 boxes, curating products from small businesses focused on postpartum care.</p>

            <p>Each box included 5-7 items like herbal teas, bath salts, nipple cream, lactation cookies, and inspirational cards with affirmations for new mothers. I priced the box at $39.99 monthly, with discounts for 3, 6, and 12-month subscriptions.</p>

            <h3>Growth and Scaling</h3>
            <p>The initial response was overwhelmingly positive. Subscribers shared unboxing videos on social media, which created organic growth. By month three, I had 250 subscribers.</p>

            <p>Following HustleGPT's scaling strategy, I reinvested profits into digital marketing, targeting new mothers on Instagram and Facebook. I also implemented their customer retention framework, which included personalized notes, surprise gifts for milestone months, and a private community for subscribers.</p>

            <p>By month six, I had 750 subscribers and was able to negotiate better rates with suppliers due to higher volume. This improved my profit margins from 30% to 45%.</p>

            <h3>Current Success</h3>
            <p>One year in, my subscription box has 1,500 monthly subscribers generating $45,000 in monthly revenue. I've expanded to offer specialized boxes for different stages of motherhood and added a "gift" option that has been popular for baby showers.</p>

            <p>I now have a team of three part-time employees helping with packing and customer service, and I've partnered with over 30 small businesses that supply products for the boxes.</p>

            <h3>Key Lessons</h3>
            <ul>
                <li>Solve a problem you've personally experienced</li>
                <li>Start small and iterate based on customer feedback</li>
                <li>Focus on retention as much as acquisition</li>
                <li>Build community around your product</li>
                <li>Partner with aligned businesses for mutual growth</li>
                <li>Share the stories behind your products and suppliers</li>
            </ul>

            <p>HustleGPT provided not just the initial business idea but a complete roadmap for validating, launching, and scaling a subscription business. Their frameworks for customer acquisition and retention were particularly valuable in this competitive space.</p>

            <p>What started as a desire to help other mothers has become a thriving business that supports my family while making a positive impact on thousands of new moms during a challenging time in their lives.</p>
        `
    }
];

// Function to handle category filtering
function setupCategoryFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const category = button.getAttribute('data-filter');
            filterStories(category);
        });
    });
}

// Function to filter stories by category
function filterStories(category) {
    const storyCards = document.querySelectorAll('.story-card');

    storyCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to animate number counting
function animateStats() {
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

// Function to handle the "Submit Your Story" button
function setupSubmitStory() {
    const submitButton = document.querySelector('.submit-button');
    if (!submitButton) return;

    submitButton.addEventListener('click', () => {
        // In a real app, this would open a form or modal
        // For this demo, we'll just show an alert
        alert('Thank you for your interest in sharing your success story! Our team will contact you shortly to collect your story details.');
    });
}

// Function to handle "Read Full Story" button clicks
function setupReadMoreButtons() {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            // Get the story card element
            const storyCard = button.closest('.story-card');
            const storyTitle = storyCard.querySelector('h3').textContent;

            // Find the story in our data
            const storyId = getStoryIdFromTitle(storyTitle);
            const story = successStories.find(s => s.id === storyId);

            if (story) {
                showFullStory(story);
            }
        });
    });
}

// Function to get story ID from title
function getStoryIdFromTitle(title) {
    const story = successStories.find(s => s.title === title);
    return story ? story.id : null;
}

// Function to show the full story in a modal
function showFullStory(story) {
    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'story-modal';

    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'story-modal-content';

    // Add close button
    const closeButton = document.createElement('span');
    closeButton.className = 'close-modal';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', () => {
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });

    // Add story content
    const storyContent = document.createElement('div');
    storyContent.className = 'story-full-content';
    storyContent.innerHTML = story.fullStory;

    // Assemble modal
    modalContent.appendChild(closeButton);
    modalContent.appendChild(storyContent);
    modal.appendChild(modalContent);

    // Add modal to body
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal

    // Add event listener to close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    });
}

// Function to populate the stories grid with all stories
function populateStoriesGrid() {
    const storiesGrid = document.querySelector('.stories-grid');
    if (!storiesGrid) return;

    // Clear existing stories (except the first 3 which are in the HTML)
    const existingStories = storiesGrid.querySelectorAll('.story-card');
    for (let i = 3; i < existingStories.length; i++) {
        storiesGrid.removeChild(existingStories[i]);
    }

    // Add the additional stories (starting from index 3)
    for (let i = 3; i < successStories.length; i++) {
        const story = successStories[i];

        // Create story card
        const storyCard = document.createElement('article');
        storyCard.className = 'story-card reveal fade-bottom';
        storyCard.style = `--delay: ${0.1 * (i + 1)}s`;
        storyCard.setAttribute('data-category', story.category);

        // Determine badge text and class
        let badgeText = 'Popular';
        let badgeClass = 'popular';

        if (i === 3) {
            badgeText = 'New';
            badgeClass = 'new';
        } else if (i === 4) {
            badgeText = 'Featured';
            badgeClass = 'featured';
        }

        // Create story card HTML
        storyCard.innerHTML = `
            <div class="story-badge ${badgeClass}">${badgeText}</div>
            <div class="story-image">
                <img src="${story.image}" alt="${story.name}'s Success Story">
            </div>
            <div class="story-content">
                <h3>${story.title}</h3>
                <p class="story-meta">${story.name} | ${story.business} | ${story.timeframe}</p>
                <div class="story-rating">
                    ${generateRatingStars(story.rating)}
                </div>
                <p class="story-excerpt">"${story.excerpt}"</p>
                <a href="#" class="read-more btn btn-primary">Read Full Story</a>
            </div>
        `;

        // Add to grid
        storiesGrid.appendChild(storyCard);
    }

    // Don't call setupReadMoreButtons here to avoid duplicate event listeners
}

// Helper function to generate rating stars
function generateRatingStars(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }

    // Add half star if needed
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }

    // Add empty stars to make 5 total
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }

    return starsHTML;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    setupCategoryFiltering();
    setTimeout(animateStats, 1000); // Delay to ensure visibility
    setupSubmitStory();
    populateStoriesGrid();

    // Only call setupReadMoreButtons once after populating the grid
    // This prevents duplicate event listeners
    setupReadMoreButtons();
});
