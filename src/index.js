const express = require('express')
const cors = require('cors');
require('../database/database')

const app = express()
const userRoutes = require('../routes/userRoutes')
const dishRoutes = require('../routes/dishRoutes')


app.use(cors());
app.use(express.json())
app.use(userRoutes)
app.use(dishRoutes)

app.listen(3003,() => {
    console.log('Server running on port : 3003')
})