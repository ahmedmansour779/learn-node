import fs from "node:fs";
// import { createServer } from 'node:http';

const mainPage = fs.readFileSync('./views/main.html', "utf-8")

// const server = createServer((request, response) => {
//     // response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.write(mainPage)
//     response.end('');
// });

// // starts a simple http server locally on port 3000
// server.listen(3000, () => {
//     console.log('Listening on http://localhost:3000/');
// });


import express from 'express';
const app = express()
const port = 3000

app.use("/about", (req, res, next) => {
    console.log("methods:", req.url);
    next()
})

app.use(express.static('./views'))

app.get('/', (req, res) => {
    res.send('Hello express!')
})
app.get('/about', (req, res) => {
    res.send(mainPage)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
