const mysql =require('mysql2');


const connection = mysql.createConnection({
    host     :  'localhost',
    user     :  'root',
    password :  '1234',
    database :  'sudu'
  });
   

connection.connect(err=>{
    let message=!err?'connection ':'connection failed';
    console.log(`mysql : ${message}`)
});

module.exports=connection;
