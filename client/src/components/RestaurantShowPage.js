import React, { useState, useEffect } from "react"
import BurgerTile from "./BurgerTile"

const RestaurantShowPage = (props) => {
  const [restaurant, setRestaurant] = useState({
    name: "",
    location: "", 
    burgers: []
  })

  const restaurantId = props.match.params.id

  const getRestaurant = async () => {
    try {
      const response = await fetch(`/api/v1/restaurants/${restaurantId}`)
      if (!response.ok) {
        const error = new Error(`Error in fetch: ${error.status} (${error.statusText})`)
        throw error
      }
      const body = await response.json()
      setRestaurant(body.restaurant)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getRestaurant()
  }, [])

  const burgerTiles = restaurant.burgers.map((burger) => {
    return (
      <BurgerTile 
        key={burger.id}
        burger={burger}
      />
    )
  })

  return (
    <div className="grid-container">
      <div className="grid-y text-center">
        <h1 className="cell small-4 align-justify align-middle">
          {restaurant.name}
        </h1>
        <h2 className="cell small-6">
          {restaurant.location}
        </h2>
      </div>
      <div>
        <div className="grid-x grid-margin-x">
          {burgerTiles}
        </div>

      </div>
    </div>
  )
}

export default RestaurantShowPage