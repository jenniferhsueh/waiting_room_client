
exports.up = function(knex, Promise) {
  return knex.schema.table('clinics', function(t){
    t.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('clinics', function(t) {
    t.dropTimestamps();
  })
};
