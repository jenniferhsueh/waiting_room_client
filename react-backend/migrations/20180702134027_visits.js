exports.up = function(knex, Promise) {  
  return Promise.all([
    knex.schema.createTable('visits', function(t){
      t.increments('id').primary();
      t.boolean('waiting');
      t.integer('users_id');
      t.foreign('users_id').references('users.id');
      t.integer('clinics_id');
      t.foreign('clinics_id').references('clinics.id');
    })
  ])
};
  
exports.down = function(knex, Promise) {  
  return Promise.all([
    knex.schema.dropTable('visits')
  ])
};