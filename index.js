const express = require('express')
const dotenv=require('dotenv')
dotenv.config()
const app = express()
const Port=process.env.PORT
app.use(express.json())

const userRoutes = require('./routes/user');
const restaurantRoutes = require('./routes/restaurant');
const deliveryAgentRoutes = require('./routes/deliveryAgent');

app.use('/api/user',userRoutes)
app.use('/api/restaurant',restaurantRoutes)
app.use('/api/deliveryAgent',deliveryAgentRoutes)

app.get('/',(req,res)=>{
    res.send("Welcome to kraftbase")
})

app.listen(Port, console.log("Server is running"))