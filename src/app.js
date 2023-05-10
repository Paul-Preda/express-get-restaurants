const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 

// part 1
app.get("/restaurants", async (req, res) =>{
    let restaurants = await Restaurant.findAll()
    res.json(restaurants)
})

// part 2
app.get("/restaurants/:id", async (req, res) => {
    let id = req.params.id
    let found = await Restaurant.findByPk(id)
    res.json(found)
})




module.exports = app;