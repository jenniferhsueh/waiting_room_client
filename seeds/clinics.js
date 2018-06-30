exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clinics').del()
    .then(function () {
      // Inserts seed entries
      return knex('clinics').returning('*').insert([
        {name: 'one', phone_number: 234124, hours_operation: 5},
        {name: 'two', phone_number: 1234123, hours_operation: 5},
        {name: 'three', phone_number: 124412, hours_operation: 5},
        {name: 'four', phone_number: 123441, hours_operation: 5}
      ]);
    });
};
