import express from "express"
import { Review } from "../../../models/index.js"

const reviewsRouter = new express.Router()

reviewsRouter.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    await Review.query().deleteById(id)
    return res.status(200).json({ message: "Review successfully deleted"})
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default reviewsRouter