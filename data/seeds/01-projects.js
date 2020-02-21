exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          project_name: 'Finish Lambda School',
          project_description: 'complete LABS, computer science',
          completed: false
        },
        {
          id: 2,
          project_name: 'Get A Good Paying Job',
          project_description: 'apply to many companies and got to interviews',
          completed: false
        },
        {
          id: 3,
          project_name: 'Move to Italy',
          project_description:
            'find a piece of property and open a bed and breakfast with wife',
          completed: false
        }
      ]);
    });
};
