import React from "react"

const ReviewTile = (props) => {
  const { id, title, comment,  userId, rating } = props.review
  const { deleteReview, currentUser } = props
  const handleDelete = (event) => {
    event.preventDefault()
    deleteReview(id)
  }

  let deleteButton
  if (currentUser && userId === currentUser.id) {
    deleteButton = (
      <div className="button-group grid-x grid-margin align-spaced">
        <button 
          className="button small-4 warning"
          type="button"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    )
  }

  return (
    <div className="review-tile cell callout success small-4">
      <h4>
        {title}
      </h4>
      <h5>
        Rating: {rating} / 5
      </h5>
      <p>
        {comment}
      </p>
      {deleteButton}
    </div>
  )
}

export default ReviewTile