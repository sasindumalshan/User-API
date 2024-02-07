const express  =require('express');
const router=express.Router();
const connection=require('../dbConnction')

router.route('')
.post((req,res)=>{
    res.status(201).send("get");
    (async () => {
        const queryResult = await query(`INSERT INTO  customer VALUES ('${req.body.name}' ,'${req.body.address}','${req.body.contact}')`);
        console.log(queryResult);
        res.send(queryResult);
    } )();

}).get((req,res)=>{    
    (async () => {
        const queryResult = await query('SELECT * FROM customer');
        console.log(queryResult);
        res.send(queryResult);
    } )();

}).delete((req,res)=>{
    (async () => {
        const queryResult = await query(`DELETE FROM customer WHERE name='${req.body.name}'`);
        console.log(queryResult);
        res.send(queryResult);
    } )();

}).patch((req,res)=>{
    (async () => {
        const queryResult = await query(`UPDATE customer SET  name='${req.body.name}' ,address='${req.body.address}' ,contact='${req.body.contact}' WHERE name='${req.body.name}'`);
        console.log(queryResult);
        res.send(queryResult);
    } )();
});

router.get('/find',(req,res)=>{
    (async () => {
        const queryResult = await query(`SELECT * FROM customer WHERE name='${req.body.name}'`);
        res.send(queryResult);
    } )();
})


async function query(query) {
    const result = await connection.promise().query(query)
    return result[0]

}

module.exports=router;

