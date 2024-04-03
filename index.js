const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product.model");
const productRoute = require("./routes/product.route")
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use("/api/products", productRoute)

mongoose
  .connect(
    "mongodb+srv://dbNode:AHMADhafidz1312@backenddb.5eqblgm.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackEndDB"
  )
  .then(() => {
    console.log("Connected to Database");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Not Connected to Database");
  });
