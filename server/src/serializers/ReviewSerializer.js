class ReviewSerializer {
  static getSummary(review) {
    const AllowedAttributes = ["id", "title", "comment", "rating", "userId", "burgerId"]
    const serializedReview = {}

    for (const attribute of AllowedAttributes) {
      serializedReview[attribute] = review[attribute]
    }
    return serializedReview
  }
}

export default ReviewSerializer