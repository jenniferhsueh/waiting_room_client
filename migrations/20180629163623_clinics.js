exports.up = function(knex, Promise) {  
    return Promise.all([
      knex.schema.createTable('clinics', function(table){
        table.increments('id').primary();
        table.string('name');
        table.string('phone_number');
        table.integer('hours_operation');
      })
    ])
  };
  
  exports.down = function(knex, Promise) {  
    return Promise.all([
      knex.schema.dropTable('clinics')
    ])
  };

  test