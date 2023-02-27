import express from "express";
import blogController from "../controllers/blogController.js";
import restrictDelete from "../middleware/restrictDelete.js";

const router = express.Router();

router.get("/", blogController.getBlogs);
router.get("/:id", blogController.getBlog)
router.post("/", blogController.createBlog)
router.put("/:id", blogController.updateBlog)
router.delete("/:id", restrictDelete, blogController.deleteBlog)

export default router