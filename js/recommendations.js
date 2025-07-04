// js/recommendations.js
// Personalized Recommendations (Frontend Only, API-Ready)

// --- Mock Data (Replace with API later) ---
const mockContent = [
  {
    type: 'hustle',
    title: 'Start a Print-on-Demand Store',
    tags: ['ecommerce', 'digital', 'beginner'],
    link: 'trending.html',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    excerpt: 'Launch your own online store with no inventory using print-on-demand services.'
  },
  {
    type: 'blog',
    title: '10 AI Tools for Entrepreneurs',
    tags: ['ai', 'tools', 'productivity'],
    link: 'blog.html',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    excerpt: 'Discover the best AI tools to boost your business productivity.'
  },
  {
    type: 'story',
    title: 'From Side Hustle to $10K/Month',
    tags: ['success', 'digital', 'inspiration'],
    link: 'success-stories.html',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    excerpt: 'Read how Sarah turned her digital templates into a thriving business.'
  },
  // ...add more mock items as needed
];

// --- User Interests (Simulated) ---
function getUserInterests() {
  // Try to get from localStorage, else use defaults
  const stored = localStorage.getItem('userInterests');
  if (stored) return JSON.parse(stored);
  // Default: interested in digital and ai
  return ['digital', 'ai', 'success'];
}

// --- Recommendation Logic ---
function getRecommendations(content, interests, max = 3) {
  // Score content by tag match
  const scored = content.map(item => {
    const score = item.tags.filter(tag => interests.includes(tag)).length;
    return { ...item, score };
  });
  // Sort by score, then take top N
  return scored.filter(i => i.score > 0).sort((a, b) => b.score - a.score).slice(0, max);
}

// --- Render Recommendations ---
function renderRecommendations() {
  const section = document.getElementById('recommendations-section');
  if (!section) return;
  const interests = getUserInterests();
  const recs = getRecommendations(mockContent, interests);
  if (recs.length === 0) {
    section.innerHTML = '';
    return;
  }
  section.innerHTML = `
    <h2>Recommended for You</h2>
    <div class="recommendations-grid">
      ${recs.map(item => `
        <div class="recommendation-card">
          <img src="${item.image}" alt="${item.title}">
          <div class="rec-content">
            <h3>${item.title}</h3>
            <p>${item.excerpt}</p>
            <a href="${item.link}" class="rec-link">View</a>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// --- API Integration Hook ---
// Replace mockContent and getUserInterests with API calls here in the future

// --- Init ---
document.addEventListener('DOMContentLoaded', renderRecommendations); 