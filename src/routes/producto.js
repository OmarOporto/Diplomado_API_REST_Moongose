const express = require("express");
const userSchema = require("../models/product");

const router = express.Router();

//create product
router.post("/v1/product",(req,res)=>{
    const user = userSchema(req.body);
    user
        .save()
        .then((data)=> res.json(data))
        .catch((error)=>res.json({message: error}))

});

//get all product
router.get("/v1/product",(req,res)=>{
    userSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error)=>res.json({message: error}))

});

//get a product
router.get("/v1/product/:id",(req,res)=>{
    const {id} = req.params;
    userSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error)=>res.json({message: error}))

});

//update a product
router.put("/v1/product/:id",(req,res)=>{
    const {id} = req.params;
    const {name, quantity, code} = req.body;
    userSchema
        .updateOne({_id:id},{$set: {name,quantity, code}})
        .then((data)=> res.json(data))
        .catch((error)=>res.json({message: error}))

});

//delete a product
router.delete("/v1/product/:id",(req,res)=>{
    const {id} = req.params;
    userSchema
        .remove({_id:id})
        .then((data)=> res.json(data))
        .catch((error)=>res.json({message: error}))

});

module.exports = router;