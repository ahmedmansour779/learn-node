
// open fille
const fs = require("node:fs");

const filleContentSync = fs.readFileSync('./hello.txt', 'utf8')
console.log(filleContentSync);


// fs.readFile('./hello.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log("error is:", err);
//     } else {
//         console.log(data);
//     }
// })
// console.log(filleContent);


// write file

// const data = []
// for (let index = 1; index <= 20; index++) {
//     data.push({
//         id: index,
//         name: `user ${index}`
//     })
// }

// fs.writeFile('./users.json', JSON.stringify(data), 'utf8', (err) => {
//     if (err) {
//         console.log('error is', err);
//     } else {
//         fs.readFile('./users.json', 'utf8', (err, data) => {
//             if (err) {
//                 console.log("error is:", err);
//             } else {
//                 console.log(data);
//             }
//         });
//         fs.unlink('./users.json', (err) => {
//             if (err) {
//                 console.log('error is:', err);
//             } else {
//                 console.log("done");
//             }
//         })
//     }
// })

// Streams [read - write]

// const data = []
// for (let index = 1; index <= 10000; index++) {
//     data.push(`hello user ${index}`)
// }
// console.log(data);

// fs.writeFile('./stream1.txt', `${data}`, 'utf8', (err) => {
//     if (err) {
//         console.log('error is', err);
//     }
// } else {
//     fs.readFile('./users.json', 'utf8', (err, data) => {
//         if (err) {
//             console.log("error is:", err);
//         } else {
//             console.log(data);
//         }
//     });
//     fs.unlink('./users.json', (err) => {
//         if (err) {
//             console.log('error is:', err);
//         } else {
//             console.log("done");
//         }
//     })
// }
// })

// const rStream = fs.createReadStream('./stream1.txt', 'utf-8');
// const wStream = fs.createWriteStream('./stream.txt', 'utf-8');

// rStream.on('data', (chunk) => {
//     console.log("=== chunk ===", chunk);
//     wStream.write("\n === chunk === \n");
//     wStream.write(chunk);
// })