exports.seed = function(knex, Promise) {
  return knex("visits").del()
    .then(function () {
      return knex("visits").returning("*").insert([
        { 
          waiting: true, 
          users_id: 1,
          clinics_id: 2
        },
        {
          waiting: true, 
          users_id: 2,
          clinics_id: 1
        }
      ]);
    });
};