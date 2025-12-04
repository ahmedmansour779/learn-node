let cors = require('cors')
let express = require('express')
let routes = require('./routes/courser.routes')
let mongoose = require('mongoose')
const url = "mongodb+srv://ahmedmansour1239:nodejs2025@learn-mongo-db.arxtqmm.mongodb.net/learn-node?appName=learn-mongo-db";

const app = express()

mongoose.connect(url).then(() => {
    console.log("mongodb server started")
})

// middleware to accept json file from adding
app.use(cors())
app.use(express.json())
app.use("/api/courses", routes)

// run server
app.listen(3000, () => {
    console.log('done')
}) 