const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  next();
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: 'fadf12411l',
      title: 'First server-side post',
      content: 'This is coming from the server'
    },
    {
      id: 'asdfadsfa2134asdf',
      title: 'Second server-side post',
      content: 'This is coming from the server'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;