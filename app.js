const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


app.get('/', (req, res) => {
    res.send('hello ahmed')
})
app.get('/page', (req, res) => {
    res.sendFile('./pages/hello.html', { root: __dirname })
})
app.get('/form', (req, res) => {
    res.sendFile('./pages/form.html', { root: __dirname })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})

mongoose.connect('mongodb+srv://ahmed11ahmed2992002_db_user:Ah7ncJS6E3qWAitA@cluster0.pwczhip.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0').then((res) => console.log("done")
).catch((res) => {
    console.log("error", res);
});

