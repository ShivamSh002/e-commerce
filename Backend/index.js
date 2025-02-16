const express = require("express")
const mongoose = require("mongoose");

const server = express()

console.log("hi")
mongoose
  .connect("mongodb+srv://shivamsharma98879:EkF6cuCOOhjsLii6@e-commerce.3ls28.mongodb.net/e-commerce")
  .then(() => {
    console.log("connected to db");
    server.listen(3001, () => {
      console.log("listening");
    });
  })
  .catch((e) => {
    console.log(e);
  });