/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("burgers", (table) => {
    table.bigIncrements("id")
    table.string("name")
      .notNullable()
    table.boolean("vegetarian")
    table.bigInteger("restaurantId")
      .notNullable()
      .index()
      .unsigned()
      .references("restaurants.id")
    table.timestamp("createdAt")
      .notNullable()
      .defaultTo(knex.fn.now())
    table.timestamp("updatedAt")
      .notNullable()
      .defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("burgers")
}