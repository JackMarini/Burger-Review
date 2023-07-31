import express from "express"
import objection from "objection"
const { ValidationError } = objection
import { Review } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const burgerReviewsRouter = new express.Router({ mergeParams: true })

burgerReviewsRouter.post("/", async (req, res) => {
  const userId  = req.user.id
  const { burgerId } = req.params
  const { body } = req
  const formInput = cleanUserInput(body)
  const { title, rating, comment } = formInput

  try {
    const review = await Review.query().insertAndFetch({ title, rating, comment, burgerId, userId })
    return res.status(201).json({ review: review })
  } catch (error) {
    if (error instanceof ValidationError) {
    return res.status(422).json({ errors: error.data })
  }
  return res.status(500).json({ errors: error })
  }
})

export default burgerReviewsRouter