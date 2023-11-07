const express = require('express')
require('./configuration/connexionMongo')
const categoryRoutes= require ('./routes/categoryRoutes')
const departRoutes= require ('./routes/departRoutes')
const recipieRoutes = require('./routes/recipieRoutes')
const userRoutes = require('./routes/userRoutes')


const cors = require('cors')
const app = express()
const port = 4000

app.use(cors());
app.use(express.json())
app.use(categoryRoutes)
app.use(departRoutes)
app.use(recipieRoutes)
app.use(userRoutes)

app.listen(port, () => { console.log(`Server is running on port ${port}`) })

