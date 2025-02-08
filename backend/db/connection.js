import mysql from 'mysql2'
const db=mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'level4'
})
db.connect((err)=>{
if (err) {
     document.write('Connection failed')
}
else{
     document.write('connection Sucessfully')
}
})
export default db;