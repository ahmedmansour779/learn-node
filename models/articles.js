const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articles = Schema({
    title: String,
    category: String,
    description: String,
})

const Articles = mongoose.model("articles", articles);

module.exports = Articles;