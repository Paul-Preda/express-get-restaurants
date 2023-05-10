const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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

// part 3
app.post("/restaurants", async (req, res) => {
    let newRestaurant = await Restaurant.create(req.body)
    res.json(newRestaurant)
    console.log(req.body)
})

app.put("/restaurants/:id", async (req, res) => {
    let updated = await Restaurant.update(req.body, {where: {id: req.params.id}})
    res.json(updated)
})

app.delete("/restaurants/:id", async (req, res) =>{
    let deleted = await Restaurant.destroy({where: {id: req.params.id}})
    console.log("Deleted")
    res.json(deleted)
})

module.exports = app;