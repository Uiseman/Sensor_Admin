/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('sensors', function(table){
    table.string('id').primary();
    table.enu('voltage', ['3', '1.5']).notNullable();
    table.enu('brand', ['A1', 'B3' , 'T10']).notNullable();
    table.enu('type', ['temperatura', 'corrente elétrica', 'pressão',
     'intensidade luminosa', 'aceleração']).notNullable();
     table.double('measure').notNullable();
     table.geography('location').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('sensors');
};
