/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("reviews", (table) => {
    table.bigIncrements("id")
    table.string("title").notNullable()
    table.integer("rating").notNullable()
    table.text("comment")
    table
      .bigInteger("userId")
      .notNullable()
      .index()
      .unsigned()
      .references("users.id")
    table
      .bigInteger("burgerId")
      .notNullable()
      .index()
      .unsigned()
      .references("burgers.id")
    table
      .timestamp("createdAt")
      .notNullable()
      .defaultTo(knex.fn.now())
    table
      .timestamp("updatedAt")
      .notNullable()
      .defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("reviews")
}
