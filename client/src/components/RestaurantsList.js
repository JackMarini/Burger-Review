import React, { useState, useEffect } from "react"
import RestaurantTile from "./RestaurantTile"

const RestaurantsList = props => {
  const [restaurants, setRestaurants] = useState([])

  const getRestaurants = async () => {
    try {
      const response = await fetch("/api/v1/restaurants")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const body = await response.json()
      setRestaurants(body.restaurants)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getRestaurants()
  }, [])

  const restaurantListItems = restaurants.map(restaurantObject => {
    return (
      <RestaurantTile
        key={restaurantObject.id}
        restaurant={restaurantObject}
      />
    )
  })

  return (
    <>
      <h1 className="heading"> Restaurants</h1>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          {restaurantListItems}
        </div>
      </div>
    </>
  )
}

export default RestaurantsList
