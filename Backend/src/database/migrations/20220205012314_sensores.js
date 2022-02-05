/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


exports.up = function(knex) {

  return knex.schema.createTable('sensors', function(table){
    table.increments('sensorID');
    table.enum('voltage', ['3', '1.5']).notNullable();
    table.enum('brand', ['A1', 'B3' , 'T10']).notNullable();
    table.enum('type', ['temperatura', 'corrente elétrica', 'pressão',
     'intensidade luminosa', 'aceleração']).notNullable();
     table.string('measure').notNullable();
     table.double('height').notNullable();
     table.double('width').notNullable();
     table.double('length').notNullable();
     table.geography('coordinates').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sensors');
};
