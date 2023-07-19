//In "message" directory "index.js" is a file.
const greetingString = require("../greeting/index.js");

module.exports = `Hello Rahul! ${greetingString}`;
/*
//console.log(greetingString);//Have a Great Day
terminal:
root@75a1c5f9b3bd:/home/workspace/nodejs/coding-practices/coding-practice-2b# cd ./message
root@75a1c5f9b3bd:/home/workspace/nodejs/coding-practices/coding-practice-2b/message# node index.js
Have a Great Day
*/

/*
The relative path ../greeting/index.js is used to navigate up one level
from the "message" directory to the parent directory
("coding-practice-2b") and then down into the "greeting"
directory to find the "index.js" file.
*/
