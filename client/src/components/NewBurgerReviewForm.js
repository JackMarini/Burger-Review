import React, { useState } from "react"

const NewBurgerReviewForm = (props) => {
  const { postBurger } = props
  const [newBurgerReview, setNewBurgerReview] = useState({
    title: "",
    rating: 1,
    comment: ""
  })

  const handleInputChange = (event) => {
    setNewBurgerReview({
      ...newBurgerReview,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    postBurger(newBurgerReview)
    clearForm()
  }

  const clearForm = () => {
    setNewBurgerReview({
      title: "",
      rating: 1,
      comment: ""
    })
  }

  return (
    <div className="callout review-tile primary">
      <h2>Add a Burger Review</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title: 
          <input
            type="text"
            name="title"
            onChange={handleInputChange}
            value={newBurgerReview.title}
          />
        </label>
        <label >
          Rating:
          <select 
            name="rating"
            value={newBurgerReview.rating} 
            onChange={handleInputChange}
            className="text-center"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>  
          </select>
        </label>
        <label>
          Comment:
          <input 
            type="text" 
            name="comment" 
            onChange={handleInputChange} 
            value={newBurgerReview.comment}
          />
        </label>
        <div className="button-group">
          <input
            className="button"
            type="submit"
            value="submit" 
          />
        </div>
      </form>
    </div>
  )
}

export default NewBurgerReviewForm