const express = require('express')
const { restart } = require('nodemon')
const router = express.Router()
const Table = require('../models/table')

router.post('/api/table/addtable', async (req, res) => {
    try {
        const table = new Table(req.body.table)
        const response = await Table.findOne({tableNo:table.tableNo})

        if(response) {
            return res.status(400).send('Table already Occupied!')
        }

        await table.save()
        return res.status(200).send()
    } catch (error) {

    }
})
