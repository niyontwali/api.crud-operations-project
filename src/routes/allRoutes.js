import express from "express"
import blogRoute from "./blogRoute.js"
import signupRoute from "./signupRoute.js"

const router = express.Router()

// all routes
router.use("/blogs", blogRoute)
router.use("/signup",signupRoute )

export default router