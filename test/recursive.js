import readline from 'readline'
const rl =readline.createInterface({
     input:Process.stdin,
     output:process.stdout
})
function ask(){
     rl.question("Do you have an problem  Type T if Yes or f if not",(data)=>{
          if (data.lowerCase==='f') {
               console.log('Interface closed ')
          }
          else{

          }
     })
}
function ask2() {
     rl.question("")
}