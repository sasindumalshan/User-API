const jwt =require('jsonwebtoken');
const express =require('express');
const route=express.Router();
require('dotenv').config()

route.route('/').post((req,res)=>{
    const token= jwt.sign({user:req.body.name},process.env.TOKEN_KEY,{expiresIn:'20s'});
    res.send(
        {
            token:token
        }      
    );
})

module.exports=route;