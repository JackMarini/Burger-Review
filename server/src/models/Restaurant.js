const Model = require("./Model.js") 

class Restaurant extends Model {
  static get tableName() {
    return "restaurants"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "location"],
      properties: {
        name: { type: "string" },
        location: { type: "string" }
      }
    }
  }

  static get relationMappings() {
    const { Burger } = require("./index.js")
    return {
      burgers: {
        relation: Model.HasManyRelation,
        modelClass: Burger,
        join: { 
          from: "restaurants.id",
          to: "burgers.restaurantId"
        }
      }
    }
  }
}

module.exports = Restaurant