const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userName = new Schema({
    name: String,
});

// Create a model based on that schema
const Name = mongoose.model("userName", userName);


// export the model
module.exports = Name;