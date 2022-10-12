
// run with node processing.js

const fs = require('fs');
const readline = require("readline");
const name = "KING.";


fs.readFile('../textfiles/hamlet.txt', 'utf-8', (err, data) => {

    if (err) throw err;
    // console.log(data);
    const input_path = "../textfiles/hamlet.txt";
    const inputStream = fs.createReadStream(input_path);


    const output_path = "hamletoutput.txt";
    const outputStream = fs.createWriteStream(output_path, { encoding: "utf8" });

    var lineReader = readline.createInterface({
    input: inputStream,
    terminal: false,
    });

    let myflag = false;
    lineReader.on("line", function (line) {
        const myArray = line.split(" ");        

        if(myArray[0] == name)
        {
            myflag = true;
        }
        else
        {
            if(myArray[0].toUpperCase() == myArray[0] && myArray[0].length > 1)
            {
                myflag = false;
            }
        }

        if(myflag == true)
        {
            outputStream.write(line + "\n");
        }
        
    });

})

