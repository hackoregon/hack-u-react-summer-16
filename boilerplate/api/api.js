/* eslint-disable no-console */

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const posts = [];
const defaultPost = {
  id: null,
  author: 'Unknown Author',
  title: 'Post Title',
  body: 'Post Content',
};

let _nextId = 1;

app.use(cors());
app.use(bodyParser.json());

app.post('/posts/new', function(req, res) {
  if (!req.body || !req.body.title && !req.body.body) {
    res.status(500).json({ error: 'Missing required fields.' });
  }

  const newPost = { ...defaultPost, ...req.body, id: _nextId++ };
  posts.push(newPost);
  res.json(newPost);
});

app.get('/posts', function(req, res) {
  res.json(posts.map(post => ({ ...defaultPost, ...post })));
});

app.listen(9999, function() {
  console.log('Example app listening on port 9999!');
});
