exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          task_name: 'Pass the sprints',
          task_description: 'Dont give up',
          completed: false,
          project_id: 1
        },
        {
          id: 2,
          task_name: 'Work on projects for portfolio',
          task_description: 'keep coding',
          completed: false,
          project_id: 1
        },
        {
          id: 3,
          task_name: 'Apply for jobs',
          task_description: 'use online resources',
          completed: false,
          project_id: 2
        },
        {
          id: 4,
          task_name: 'Work on Resume',
          task_description: 'make it look professional',
          completed: false,
          project_id: 2
        },
        {
          id: 5,
          task_name: 'Buy land',
          task_description: 'talk to a realtor',
          completed: false,
          project_id: 3
        },
        {
          id: 6,
          task_name: 'Open bed and breakfast',
          task_description: 'create a place for visitors',
          completed: false,
          project_id: 3
        }
      ]);
    });
};
