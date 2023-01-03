const express = require('express')
const router = express.Router()
const Dish = require('../models/dishes')


router.post('/api/dish/add', async (req, res) => {
    const dish = new Dish(req.body.dish)

    try {
        const returnDish = await dish.addDish()
        if(!returnDish){
            return res.status(400).send('Dish Not Added')
        }
        // console.log(returnDish)
        return res.status(200).send()
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
})

router.get('/api/dish/alldisges',async(req,res) => {
    const dishes =await Dish.find({})
    console.log(dishes)

    return res.status(200).send({dishes})
})


module.exports = router