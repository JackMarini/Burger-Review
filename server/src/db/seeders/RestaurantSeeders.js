import { Restaurant } from "../../models/index.js";

class RestaurantSeeder {
  static async seed() {
    const restaurantData = [
      { name: "Boston Burger Company", location: "Somerville, MA" },
      { name: "Shake Shack", location: "Oakwood, MA" },
      { name: "Daddy Jones", location: "Somerville, MA" },
      { name: "R.F. O'Sullivan's", location: "Somerville, MA" }
    ]

    for (const restaurantObject of restaurantData) {
      const currentRestaurant = await Restaurant.query().findOne({ name: restaurantObject.name })

      if (!currentRestaurant) {
        await Restaurant.query().insert(restaurantObject)
      }
    }
  }
}

export default RestaurantSeeder