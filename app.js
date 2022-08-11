// const scrap = require("./scrapper/scrapper");
const express = require("express");
const cors = require("cors");
const app = express();
const products = require("./routes/products");
const connectDB = require("./DB/connect");
require("dotenv").config();
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);

const port = process.env.port || 5000;

app.use(express.json());

app.use("/api/v1/products", products);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(
      5000,
      console.log(
        `Connected to Database \nServer is listeneing on port ${port}...`
      )
    );
  } catch (error) {
    console.log(error);
  }
};

start();

//app.get('/login')
//app.get('/signup')
//app.get('api/v1/products')        - To get all produducts list
//app.post('api/v1/products')       - To add product
//app.get('api/v1/products/id:')    - To get a particular product
//app.patch('api/v1/products/id:')  - To edit a product URL
//app.delete('api/v1/products/id:') -  To delete a product
