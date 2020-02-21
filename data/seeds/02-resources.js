exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('resources').insert([
        {
          id: 1,
          resource_name: 'computer',
          resource_description: 'a fast mac'
        },
        {
          id: 2,
          resource_name: 'internet',
          resource_description: 'fast and reliable'
        },
        {
          id: 3,
          resource_name: 'land',
          resource_description: 'with an awesome view'
        },
        {
          id: 4,
          resource_name: 'money',
          resource_description: 'can never have enough'
        }
      ]);
    });
};
