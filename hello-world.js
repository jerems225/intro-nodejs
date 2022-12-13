const fs = require('fs');

//show Hello world
console.log("HELLO WORLD");

//create file with fs module and appendFile function
var file = fs.appendFile('welcome.txt','Hello node', (err)=> {
    if(err) console.log(err);
    console.log("File created successfully !");
});

//read file with fs module and readfile function
fs.readFile('welcome.txt', (err, data) => {
    if (err) return console.error(err);
    console.log(data.toString());
 });