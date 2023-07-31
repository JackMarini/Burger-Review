import express from "express"
import { Restaurant } from "../../../models/index.js"
import RestaurantSerializer from "../../../serializers/RestaurantSerializer.js"

const restaurantsRouter = new express.Router()

restaurantsRouter.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.query()
    const serializedRestaurants = restaurants.map(restaurant => {
      return RestaurantSerializer.getSummary(restaurant)
    })
    return res.status(200).json({ restaurants: serializedRestaurants })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

restaurantsRouter.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const restaurant = await Restaurant.query().findById(id)
    const serializedRestaurant = await RestaurantSerializer.getDetail(restaurant)
    return res.status(200).json({ restaurant: serializedRestaurant })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default restaurantsRouter