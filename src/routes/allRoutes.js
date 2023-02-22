import express from "express"
import blogRoute from "./blogRoute.js"

const router = express.Router()

// all routes
router.use("/blogs", blogRoute)

export default router