import express from "express"
import userSessionsRouter from "./api/v1/userSessionsRouter.js"
import usersRouter from "./api/v1/usersRouter.js"
import clientRouter from "./clientRouter.js"
import restaurantsRouter from "./api/v1/restaurantsRouter.js"
import burgersRouter from "./api/v1/burgersRouter.js"
import reviewsRouter from "./api/v1/reviewsRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/api/v1/user-sessions", userSessionsRouter)
rootRouter.use("/api/v1/users", usersRouter)
rootRouter.use("/api/v1/restaurants", restaurantsRouter)
rootRouter.use("/api/v1/burgers", burgersRouter)
rootRouter.use("/api/v1/reviews", reviewsRouter)

rootRouter.get("/", (req, res) => {
  res.redirect("/restaurants")
})

rootRouter.use("/", clientRouter)

export default rootRouter