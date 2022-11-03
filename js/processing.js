
// run with node processing.js

// add in a part of this that listens 
// modularize it 
// learn node.js
// You should play with firing up a node instance to be a very simple web server, then hit it with your browser

const fs = require('fs');
const readline = require("readline");

class quoteBlock {
    quotesArray = [];

    constructor(quotesarray) {
      this.quotesArray = quotesarray;
    }

    get quote() {
      return this.quotesArray[1];
    }
  }

const nameArray = ["HAMLET.", "KING.", "QUEEN.", "POLONIUS.", "LAERTES.", "OPHELIA.", "HORATIO.", "FORTINBRAS.", "VOLTEMAND.", "CORNELIUS.", "ROSENCRANTZ.", "GUILDENSTERN.", "MARCELLUS.", "BARNARDO.", "FRANCISCO.", "OSRIC."];
let characterQuotes = [];

async function startup(){
  for (let i = 0; i < nameArray.length; i++) {
    let hello = await readQuotesFile(nameArray[i]); 
    characterQuotes.push(hello);
  } 
}

readQuotesFile(nameArray[1]); 


//   change this so that it returns an array that u can then store within another in the for loop :) 
// then make a function that will return a random quote from a given character based on that character's number i guess 
async function readQuotesFile(name)
{
    var quotesArray = []; 

    simpleProcessFile = (err, data) =>
    {
      // console.log(err); 
      // console.log(data); 
      // console.log("anyone home"); 
    }

    processFile = (err, data) => {

      if (err) throw err;
      // console.log(data);
      const input_path = "../textfiles/hamlet.txt";
      const inputStream = fs.createReadStream(input_path);
  
      // let file_path = "../parsedFiles/";
      // file_path = file_path.concat(name)
      // let output_path = file_path.concat("output.txt");

      var addstring = "";

      // const outputStream = fs.createWriteStream(output_path, { encoding: "utf8" });
  
      var lineReader = readline.createInterface({
      input: inputStream,
      terminal: false,
      });

      let myflag = false;
      
      lineReader.on("line", function (line) {
          const myArray = line.split(" ");        
  
          if(myArray[0] == name)
          {
              quotesArray.push(addstring);
              addstring = "";
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
              addstring = addstring.concat(line, "\n");
              // outputStream.write(line + "\n");
          }

          return quotesArray;
      });
      console.log(quotesArray);
    }
  // console.log("readFile", name);
  fs.readFile('../textfiles/hamlet.txt', 'utf-8', processFile);

  return new quoteBlock(quotesArray);
}

startup();

// console.log(characterQuotes.quote);
