
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("What is Your name:" ,(data)=>{
  console.log('Are you sure the name is:' + data +'?')
  rl.close(); 
})
rl.on('Close' ,()=>{
  console.log("Interface closed")
})
// function cb() {

//   rl.question("What is your Name ?: ", (data) => {
//     console.log("Are you sure Your name is, " + data);
//     rl.close(); 
//   });
// }

// cb(); 
