const Model = require("./Model.js")

class Review extends Model {
  static get tableName() {
    return "reviews"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "rating", "userId", "burgerId"],
      properties: {
        title: { type: "string" },
        rating: { type: ["integer", "string"] },
        userId: { type: ["integer", "string"] },
        burgerId: { type: ["integer", "string"] }
      }
    }
  }

  static get relationMappings() {
    const { Burger, User } = require("./index.js")

    return {
      burger: {
        relation: Model.BelongsToOneRelation,
        modelClass: Burger,
        join: {
          from: "reviews.burgerId",
          to: "burgers.id"
        }
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "reviews.userId",
          to: "users.id"
        }
      }
    }
  }
}

module.exports = Review