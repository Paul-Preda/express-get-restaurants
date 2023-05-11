let Restaurant = require("../models")
let { Router } = require("express")
let router = Router()

router.get("/", async (req, res) =>{
    let restaurants = await Restaurant.findAll()
    res.json(restaurants)
})

router.get("/:id", async (req, res) => {
    let id = req.params.id
    let found = await Restaurant.findByPk(id)
    res.json(found)
})

router.post("/", async (req, res) => {
    let newRestaurant = await Restaurant.create(req.body)
    res.json(newRestaurant)
    console.log(req.body)
})

router.put("/:id", async (req, res) => {
    let updated = await Restaurant.update(req.body, {where: {id: req.params.id}})
    res.json(updated)
})

router.delete("/:id", async (req, res) =>{
    let deleted = await Restaurant.destroy({where: {id: req.params.id}})
    console.log("Deleted")
    res.json(deleted)
})

module.exports = router