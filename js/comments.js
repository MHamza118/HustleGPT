// js/comments.js
// Community Comments & Upvoting (Frontend Only, API-Ready)

const COMMENTS_KEY = 'comments_v1';
const UPVOTES_KEY = 'comment_upvotes_v1';
const PAGE_ID = window.location.pathname; // Use path as unique page id

function getComments() {
  const all = JSON.parse(localStorage.getItem(COMMENTS_KEY) || '{}');
  return all[PAGE_ID] || [];
}
function saveComments(comments) {
  const all = JSON.parse(localStorage.getItem(COMMENTS_KEY) || '{}');
  all[PAGE_ID] = comments;
  localStorage.setItem(COMMENTS_KEY, JSON.stringify(all));
}
function getUpvotes() {
  const all = JSON.parse(localStorage.getItem(UPVOTES_KEY) || '{}');
  return all[PAGE_ID] || {};
}
function saveUpvotes(upvotes) {
  const all = JSON.parse(localStorage.getItem(UPVOTES_KEY) || '{}');
  all[PAGE_ID] = upvotes;
  localStorage.setItem(UPVOTES_KEY, JSON.stringify(all));
}

function renderComments() {
  const section = document.getElementById('comments-section');
  if (!section) return;
  const comments = getComments();
  const upvotes = getUpvotes();
  section.innerHTML = `
    <h2>Comments</h2>
    <form id="add-comment-form" class="comment-form">
      <input type="text" id="comment-name" placeholder="Your name" required maxlength="32">
      <textarea id="comment-text" placeholder="Add a comment..." required maxlength="300"></textarea>
      <button type="submit">Post Comment</button>
    </form>
    <div class="comments-list">
      ${comments.length === 0 ? '<p class="no-comments">No comments yet. Be the first!</p>' : comments.map((c, i) => `
        <div class="comment-card">
          <div class="comment-header">
            <span class="comment-name">${escapeHTML(c.name)}</span>
            <span class="comment-date">${new Date(c.date).toLocaleString()}</span>
          </div>
          <div class="comment-body">${escapeHTML(c.text)}</div>
          <div class="comment-actions">
            <button class="upvote-btn" data-idx="${i}">
              <span class="upvote-icon">&#8679;</span> <span class="upvote-count">${upvotes[i] || 0}</span>
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  // Add event listeners
  const form = document.getElementById('add-comment-form');
  if (form) {
    form.onsubmit = function(e) {
      e.preventDefault();
      const name = document.getElementById('comment-name').value.trim();
      const text = document.getElementById('comment-text').value.trim();
      if (!name || !text) return;
      const comments = getComments();
      comments.push({ name, text, date: Date.now() });
      saveComments(comments);
      form.reset();
      renderComments();
    };
  }
  // Upvote logic
  document.querySelectorAll('.upvote-btn').forEach(btn => {
    btn.onclick = function(e) {
      e.preventDefault();
      const idx = btn.getAttribute('data-idx');
      const upvotes = getUpvotes();
      // Only allow one upvote per comment per user (per page, per session)
      const votedKey = `voted_${PAGE_ID}_${idx}`;
      if (sessionStorage.getItem(votedKey)) return;
      upvotes[idx] = (upvotes[idx] || 0) + 1;
      saveUpvotes(upvotes);
      sessionStorage.setItem(votedKey, '1');
      renderComments();
    };
  });
}

// Simple HTML escape
function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, tag => ({'&':'&amp;','<':'&lt;','>':'&gt;','\'':'&#39;','"':'&quot;'}[tag]));
}

// --- API Integration Hook ---
// Replace getComments/saveComments/getUpvotes/saveUpvotes with API calls here in the future

// --- Init ---
document.addEventListener('DOMContentLoaded', renderComments); 