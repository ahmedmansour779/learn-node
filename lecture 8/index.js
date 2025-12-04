require('dotenv').config();
let cors = require('cors')
let express = require('express')
let routesCourses = require('./routes/courser.routes')
let routesUsers = require('./routes/users.routes')
let mongoose = require('mongoose')
const url = process.env.MONGO_URL;
const httpStatusText = require("./utils/httpStatusText")
const app = express()

mongoose.connect(url, {
    serverSelectionTimeoutMS: 30000
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

//any port can make requiste
app.use(cors())

// middleware to accept json file from adding
app.use(express.json())
app.use("/api/courses", routesCourses)
app.use("/api/users", routesUsers)

app.use((req, res) => {
    res.status(404).json({
        status: httpStatusText.ERROR,
        message: "Route not found"
    });
});

app.use((err, req, res, next) => {
    console.error(err);

    res.status(err.statusCode || 500).json({
        status: httpStatusText.ERROR,
        message: err.message || "Internal Server Error"
    });
});

// run server
app.listen(process.env.PORT, () => {
    console.log(`start server in http://localhost:${process.env.PORT}`)
}) 