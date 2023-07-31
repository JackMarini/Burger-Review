import BurgerSerializer from "./BurgerSerializer.js"
class RestaurantSerializer {
  static getSummary(restaurant) {
    const allowedAttributes = ["id", "name", "location"]
    let serializedRestaurant = {}

    for (const attribute of allowedAttributes) {
      serializedRestaurant[attribute] = restaurant[attribute]
    }
    return serializedRestaurant
  }

  static async getDetail(restaurant) {
    try {
      const allowedAttributes = ["id", "name", "location"]
      let serializedRestaurant = {}

      for (const attribute of allowedAttributes) {
        serializedRestaurant[attribute] = restaurant[attribute]
      }
      const relatedBurgers = await restaurant.$relatedQuery("burgers")
      const serializedBurgers = await Promise.all(
        relatedBurgers.map(async (burger) => {
          return BurgerSerializer.getSummary(burger)
        })
      )
      serializedRestaurant.burgers = serializedBurgers
      return serializedRestaurant
    } catch (error) {
      throw error
    }
  }  
}

export default RestaurantSerializer