//Built-in modules
//the path module
//the path module provides utilities for working with files and directory paths
//to make use of a built-in module you first have to import it
//to import a built-in module we use the require() function
//assign the the reqired module to a constant
const path = require("node:path");
//path is the name of the module
//prefix node indicates that it is a built-in module
//there is no ./ at the beginning when importing built-in modules
//once the module is loaded we can access the various properties and methods exposed by that module
//1.__filename and __dirname

console.log(__filename);//a string that represents a full path to the file
console.log(__dirname);//is a string represnting a full path to the folder

//Different methods available on the path module
//First we have basename which returns the last portion of a path

console.log(path.basename(__filename)); //returns file name
console.log(path.basename(__dirname)); //return folder name

//3. extname shows the extension of the path
console.log(path.extname(__filename));
console.log(path.extname(__dirname));

//4. parse method returns an object whose properties represent significant elements of the path
console.log(path.parse(__filename));
//5. format
console.log(path.format(path.parse(__filename)));
//isAbsolute
console.log(path.isAbsolute(__filename));
//Join
console.log(path.join("Abiud", "Femi", "Mark"));
console.log(path.join("/Abiud", "Femi", "Mark"));
console.log(path.join("/Abiud", "//Femi", "Mark"));
console.log(path.join("/Abiud", "//Femi", "../Mark"));
console.log(path.join(__dirname, "data.json"));
//Resolve
console.log(path.resolve("Abiud", "Femi", "Mark"));
console.log(path.resolve("/Abiud", "Femi", "Mark"));
console.log(path.resolve("/Abiud", "//Femi", "Mark"));
console.log(path.resolve("/Abiud", "//Femi", "../Mark"));
console.log(path.resolve(__dirname, "data.json"));
