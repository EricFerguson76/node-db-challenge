const express = require('express');

// const ProjectRouter = require('./projects/projects-router.js');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Projects Sprint Challenge!</h2>`);
});

server.use(express.json());
// server.use('/api/projects', ProjectRouter);

module.exports = server;
