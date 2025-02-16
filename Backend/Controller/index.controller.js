const mongoose = require("mongoose");
const Product = require("../Model/index.model");


const allData = async(req,res)=>{
    
    try {
        const data = await Product.find({});
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
      }
     
}

module.exports = {
    allData
  };
  