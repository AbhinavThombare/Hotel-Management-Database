const express = require('express')
const { restart } = require('nodemon')
const router = express.Router()
const Table = require('../models/table')
const Dish = require('../models/dishes')
const { json } = require('body-parser')

router.post('/api/table/addtable', async (req, res) => {
    try {
        const table = req.body.table
        const dish = await Dish.find({})
        const sum =[]
        table.Dishes.forEach(i => {

            dish.forEach(j => {
                if (j.Dish_Name === i.dish) {
                    const up = j.Price;
                    i.unit_price = up
                    const tup = i.quantity * up;
                    i.price = tup
                    sum.push(i.price)
                }
            });
        });
        const allsum = sum.reduce((a,b) => a+b,0)
        table.Total_Price = allsum

        console.log(table)
        
        const addtable = new Table(table)

        await addtable.save()
        return res.status(200).send()

    } catch (error) {
        console.log(error)
    }
})

router.get('/api/table/tables', async (req, res) => {
    try {
        const tableData = await Table.find({})
        return res.status(200).send( tableData )
    } catch (error) {
        return res.status(400).send()
    }
})


module.exports = router