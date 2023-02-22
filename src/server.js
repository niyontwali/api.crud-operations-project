import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import allRoutes from "./routes/allRoutes.js"

// configuring dotenv
dotenv.config();

// create server instance
const app = express();

// use of cors and body parse
app.use(cors())
app.use(bodyParser.json())

// route - home route
app.get("/", (req, res)=> {
  res.status(200).send(`
  <h1 style="text-align: center; color: blue; margin-top: 20vh">Welcome to our api home page</h1>
  `)
})

app.use("/api/v1", allRoutes)

// define some variables
const port = process.env.PORT;
const host = process.env.HOST;

app.listen(port, () => {
  console.log(`Server listening at http://${host}:${port}`);
});
