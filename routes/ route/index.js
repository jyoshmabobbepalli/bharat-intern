const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Home route
router.get('/', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: 'desc' });
  res.render('home', { posts });
});

// New Post route
router.get('/new', (req, res) => {
  res.render('newpost');
});

// Create Post route
router.post('/new', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  await post.save();
  res.redirect('/');
});

// View Post route
router.get('/post/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', { post });
});

module.exports = router;
