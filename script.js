const form = document.getElementById('postForm');
const postsContainer = document.getElementById('posts');

async function loadPosts() {
  const res = await fetch('/api/posts');
  const posts = await res.json();
  postsContainer.innerHTML = posts.map(p => `
    <div class="post">
      <h3>${p.title}</h3>
      <p>${p.content}</p>
    </div>
  `).join('');
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  await fetch('/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content })
  });

  form.reset();
  loadPosts();
});

loadPosts();
