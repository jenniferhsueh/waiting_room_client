exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('clinics', function(t){
      t.increments('id').primary();
      t.string('name');
      t.string('phone');
      t.json('hours');
      t.integer('avg_wait_time');
      t.json('location');
      t.json('coordinates');
    })
  ])
};

  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('clinics')
    ])
  };