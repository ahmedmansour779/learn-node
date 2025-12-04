// import os from 'node:os';
// import fs from 'node:fs';
import { readFileSync } from 'node:fs';
// console.log(os.cpus())
const fileContent = readFileSync('./test.txt', 'utf8')
console.log('fileContent', fileContent);

