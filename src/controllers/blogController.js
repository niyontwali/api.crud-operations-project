import { blogs } from "../model/dummy.js";
import errorFunc from "../utils/errorFunc.js";

class blogController {
  // CRUD (Create, Read, Update, Delete) Operation 
  // get all blogs
  static async getBlogs(req, res) {
    try {
      res.status(200).json({
        data: blogs
      });
    } catch (error) {
      const messageContent = error.message;
      const status = 500;
      errorFunc(res, messageContent, status);
    }
  }

  // get one blog
  static async getBlog(req, res) {
    try {
      const { id } = req.params; // using ES6
      const blogId = Number(id);

      const blog = blogs.find(b => b.id === blogId);
      if (!blog) {
        return res.status(404).json({
          message: `Blog with id: ${id} was not found`
        });
      } else {
        return res.status(200).json({
          data: blog
        });
      }
    } catch (error) {
      const messageContent = error.message;
      const status = 500;
      errorFunc(res, messageContent, status);
    }

  }
  // create blog
  static async createBlog(req, res) {
    try {
      const { title, content, author } = req.body;
      const id = blogs.length + 1;
      const newBlog = { id, title, content, author };
      blogs.push(newBlog);
      res.status(201).json({
        message: "New blog created successfully",
        data: newBlog
      });
    } catch (error) {
      const messageContent = error.message;
      const status = 500;
      errorFunc(res, messageContent, status);
    }
  }

  // update blog
  static async updateBlog(req, res) {
    // console.log(req.params.id)
    try {
      // const id = req.params.id // use of ES5
      const { id } = req.params; // using ES6
      const blogId = Number(id);

      // body to be update
      const { title, content } = req.body;
      const blogToBeUpdate = blogs.find(blog => blog.id === blogId);

      if (!blogToBeUpdate) {
        return res.status(404).json({
          message: `Blog with id: ${id} was not found`
        });
      } else {
        // console.log(blogToBeUpdate)
        blogToBeUpdate.title = title;
        blogToBeUpdate.content = content;
        return res.status(200).json({
          message: "Blog updated Successfully",
          data: blogs
        });
      }

    } catch (error) {
      const messageContent = error.message;
      const status = 500;
      errorFunc(res, messageContent, status);
    }
  }

  // delete blog
  static async deleteBlog(req, res) {
    try {
      const { id } = req.params;
      const blogId = Number(id);
      // find blog
      const index = blogs.findIndex(blog => blog.id === blogId);
      // condition
      if (index === -1) {
        return res.status(404).json({
          message: `Blog with id: ${id} was not found`
        });
      } else {
        blogs.splice(index, 1);
        return res.status(200).json({
          message: "Blog deleted successfully",
          data: blogs
        });
      }
    } catch (error) {
      const messageContent = error.message;
      const status = 500;
      errorFunc(res, messageContent, status);
    }
  }

}

export default blogController;
