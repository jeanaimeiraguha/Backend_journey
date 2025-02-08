import mysql from 'mysql2'
const db=mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'level4'
})
db.connect((err)=>{
if (err) {
     console.log('Connection failed')
}
else{
     console.log('connection Sucessfully')
}
})
export default db;