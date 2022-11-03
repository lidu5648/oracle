// run with node basic_await.js
// get a basic synchronus filereading working 

const fsPromises = require('fs/promises');


console.log('first');

let myArray = []; 

async function readOneFile() {
    try {
        const contents = await fsPromises.readFile("../textfiles/testMe.txt", { encoding: 'utf8' });
        contents.split("\n");
        myArray.push(contents);
        // console.log(contents);
    } catch (err) {
        console.error(err.message);
    }
}

async function readAllFiles() {
    await readOneFile();
    console.log(myArray[0]);
}

readAllFiles();