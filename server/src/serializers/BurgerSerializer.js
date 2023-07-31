import ReviewSerializer from "./ReviewSerializer.js"

class BurgerSerializer {
  static getSummary(burger) {
    const allowedAttributes = ["id", "name", "restaurantId", "vegetarian"]
    let serializedBurger = {}
    
    for (const attribute of allowedAttributes) {
      serializedBurger[attribute] = burger[attribute]
    }
    return serializedBurger
  }

  static async getDetail(burger) {
    try {
      const allowedAttributes = ["id", "name", "restaurantId", "vegetarian"]
      let serializedBurger = {}
      
      for (const attribute of allowedAttributes) {
        serializedBurger[attribute] = burger[attribute]
      }
      const relatedReviews = await burger.$relatedQuery("reviews")
      const serializedReviews = await Promise.all(
        relatedReviews.map(async (review) => {
          return ReviewSerializer.getSummary(review)
        })
      )
      serializedBurger.reviews = serializedReviews
      return serializedBurger
    } catch (error) {
      throw error 
    }
  }
}

export default BurgerSerializer