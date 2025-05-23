const express = require('express');
const app = express();
const PORT = 3000;

let posts = [];

app.use(express.static('public'));
app.use(express.json());

// Get all posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// Create a new post
app.post('/api/posts', (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: Date.now(), title, content };
  posts.unshift(newPost); // newest on top
  res.status(201).json(newPost);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
