const Model = require("./Model.js")

class Burger extends Model {
  static get tableName() {
    return "burgers"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "restaurantId"],
      properties: {
        name: { type: "string" },
        vegetarian: { type: "boolean" },
        restaurantId: { type: ["integer", "string"] }
      }
    }
  }

  static get relationMappings() {
    const { Restaurant, Review, User } = require("./index.js")

    return {
      restaurant: { 
        relation: Model.BelongsToOneRelation,
        modelClass: Restaurant,
        join: { 
          from: "burgers.restaurantId",
          to: "restaurants.id"
        }
      },
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: Review,
        join: {
          from: "burgers.id",
          to: "reviews.burgerId"
        }
      }
    }
  }
}

module.exports = Burger