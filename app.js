const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const Name = require("./models/myDataSchema");
const Articles = require("./models/articles");

app.use(express.urlencoded({ extended: true }));

// const C e().then(() => console.log('meow'));




app.get('/', (req, res) => {
    res.send('hello ahmed')
})
app.get('/page', (req, res) => {
    res.sendFile('./pages/hello.html', { root: __dirname })
})
app.get('/form', (req, res) => {
    res.sendFile('./pages/form.html', { root: __dirname })
})
app.get('/articles-post', (req, res) => {
    res.sendFile('./pages/articles.html', { root: __dirname })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})

mongoose.connect('mongodb+srv://ahmed11ahmed2992002_db_user:Ah7ncJS6E3qWAitA@cluster0.pwczhip.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0').then((res) => console.log("done")
).catch((res) => {
    console.log("error", res);
});



app.post('/form', (req, res) => {
    console.log(req.body);
    const nameData = new Name(req.body)
    nameData.save().then(() => { res.redirect("/page") }).catch((err) => console.log(err)
    )
})

app.post('/articles-post', (req, res) => {
    console.log(req.body);
    const articlesData = new Articles(req.body)
    articlesData.save().
        then(() => { res.redirect("/page") }).
        catch((err) => console.log(err)
        )
})