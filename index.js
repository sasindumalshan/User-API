const express= require('express');
const user=require('./routers/user');
const auth=require('./middleware/auth')
const login=require('./routers/login')

const app= express();

app.use(express.json())
app.use('/api/login',login)
app.use('/api/users',auth,user);

const port =process.env.PORT||"3010";
app.listen(port ,()=>console.log(`port is ${port}`));