exports.up = function(knex, Promise) {  
  return Promise.all([
    knex.schema.createTable('users', function(t){
      t.increments('id').primary();
      t.string('first_name');
      t.string('last_name');
      t.string('phone');
      t.string('email');
      t.string('password');
      t.boolean('deposit');
      t.json('location');
      t.json('coordinates');
      t.integer('clinics_id').nullable();
      t.foreign('clinics_id').references('clinics.id');
    })
  ])
};

exports.down = function(knex, Promise) {  
  return Promise.all([
    knex.schema.dropTable('users')
  ])
};