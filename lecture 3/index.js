// const crypto = require("node:crypto")
// const { pbkdf2 } = crypto

// 0var start = performance.now()

// pbkdf2('secret', 'salt', 10000, 64, 'sha512', () => console.log("end of pbkdf2Sync ms first", performance.now() - start))
// pbkdf2('secret', 'salt', 10000, 64, 'sha512', () => console.log("end of pbkdf2Sync ms second", performance.now() - start))
// pbkdf2('secret', 'salt', 10000, 64, 'sha512', () => console.log("end of pbkdf2Sync ms third", performance.now() - start))
// pbkdf2('secret', 'salt', 10000, 64, 'sha512', () => console.log("end of pbkdf2Sync ms fourth", performance.now() - start))

// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(console.log("end of request ms first", performance.now() - start))
// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(console.log("end of request ms second", performance.now() - start))
// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(console.log("end of request ms third", performance.now() - start))
// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(console.log("end of request ms fourth", performance.now() - start))

const http = require('node:http')

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end("hello world");
})

server.listen(3000, () => {
    console.log("listing on port 3000");
})