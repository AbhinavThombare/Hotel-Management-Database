const express = require('express')
const { restart } = require('nodemon')
const router = express.Router()
const Table = require('../models/table')
const Dish = require('../models/dishes')

router.post('/api/table/addtable', async (req, res) => {
    try {
        const table = req.body.table
        console.log(table)

        // const response = await Table.findOne({tableNo:table.tableNo})

        // if(response) {
        //     return res.status(400).send('Table already Occupied!')
        // }

        // await table.save()
        // return res.status(200).send()
    } catch (error) {

    }
})

router.get('/api/table/tables',async(req,res) => {
   try {
        const tableData = await Table.find({})
        return res.status(200).send({tableData})
   } catch (error) {
        return res.status(400).send()
   } 
})
