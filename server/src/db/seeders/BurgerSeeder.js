import { Burger } from "../../models/index.js"
import { Restaurant } from "../../models/index.js"

class BurgerSeeder {
  static async seed() {
    const boston = await Restaurant.query().findOne({ name: "Boston Burger Company" })
    const shake = await Restaurant.query().findOne({ name: "Shake Shack" })
    const daddy = await Restaurant.query().findOne({ name: "Daddy Jones" })
    const oSullivan = await Restaurant.query().findOne({ name: "R.F. O'Sullivan's" })

    const burgerData = [
      {
        restaurantId: boston.id,
        name: "WTF Burger",
        vegetarian: false
      },
      {
        restaurantId: shake.id,
        name: "Shack Stack",
        vegetarian: false
      },
      {
        restaurantId: daddy.id,
        name: "Chris Burger",
        vegetarian: false
      },
      {
        restaurantId: oSullivan.id,
        name: "Black & Blue Burger",
        vegetarian: false
      },
      {
        restaurantId: oSullivan.id,
        name: "Blackjack",
        vegetarian: false
      },
      {
        restaurantId: oSullivan.id,
        name: "The Mother Clucker",
        vegetarian: false
      },
      {
        restaurantId: oSullivan.id,
        name: "Hawaii 8.0 Burger",
        vegetarian: false
      }
    ]

    for (const burgerObject of burgerData) {
      const currentBurger = await Burger.query().findOne({ name: burgerObject.name })

      if (!currentBurger) {
        await Burger.query().insert(burgerObject)
      }
    }
  }
}

export default BurgerSeeder