const db = require('../data/dbConfig');

module.exports = {
  getProjects,
  getById,
  getResources,
  getTasks,
  addProjects,
  addResources,
  addTasks
};

function getProjects() {
  return db('projects');
}

function getById(id) {
  return db('projects')
    .where({ id })
    .first();
}

function getResources(id) {
  return db('project_details as pd')
    .select('pd.project_id', 'r.id', 'r.name', 'r.description')
    .join('resources as r', 'pd.resource_id, r.id')
    .where('pd.project_id', id);
}

function getTasks(id) {
  return db('tasks as t')
    .select('t.id', 't.description', 't.notes', 't.completed')
    .join('projects as p', 'p.id', 't.project_id')
    .where('p.project_id', id);
}

function addProjects(project) {
  return db('projects').insert(project, 'id');
}

function addResources(resource) {
  return db('resources')
    .insert(resource, 'id')
    .then(ids => {
      return getById(ids[0]);
    });
}

function addTasks(task) {
  return db('tasks')
    .insert(task, 'id')
    .then(ids => {
      return getById(ids[0]);
    });
}
