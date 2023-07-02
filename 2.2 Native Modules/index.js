const fs = require("fs");

// Writing a file using NodeJs
fs.writeFile("Message.txt", "Hello from Varchasva!", function (err){
    if(err) throw err;
    console.log("The file has been saved!");
});

// Reading from a file using NodeJs
fs.readFile("./Message.txt", "utf8", function (err, data){
    if(err) throw err;
    console.log(data);
});

