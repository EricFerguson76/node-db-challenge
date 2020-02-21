const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Projects.getById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find project with given id.' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get project' });
    });
});

router.get('/:id/resources', (req, res) => {
  const { id } = req.params;

  Projects.getResources(id)
    .then(steps => {
      if (steps.length) {
        res.json(steps);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find resources for given project' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get resources' });
    });
});

router.get('/:id/tasks', (req, res) => {
  const { id } = req.params;

  Projects.getTasks(id)
    .then(steps => {
      if (steps.length) {
        res.json(steps);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find tasks for given project' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get tasks' });
    });
});

router.post('/', (req, res) => {
  const projectData = req.body;

  Projects.addProjects(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
});

router.post('/', (req, res) => {
  const projectsData = req.body;

  Projects.addResources(projectsData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
});

router.post('/', (req, res) => {
  const projData = req.body;

  Projects.addTasks(projData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
});

module.exports = router;
