const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User.js')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
//ciqrChYC66j3Oebr

app.use(express.json());

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'abvkbdvbadvLDAI432039UEHF';

app.use(cors({
    credentials:true,
    origin:'http://localhost:5173',
}));

mongoose.connect(process.env.MONGO_URL);

app.get('/test',(req,res)=>{
    res.json('test okk');
})

app.post('/register', async (req,res)=>{
    const {name,email,password} = req.body;
    try{
        const userDoc = await User.create({
        name,
        email,
        password:bcrypt.hashSync(password,10),
    })

    res.json(userDoc);
    alert('Registration successful!');
    }
    catch(e){
        alert('Registration failed. Please try again later.');
    }
})

app.post('/login', async (req,res)=>{
    const {email,password} = req.body;

    const userDoc = await User.findOne({email});
    if(userDoc){
        const passOk = bcrypt.compareSync(password,userDoc.password);
        if(passOk){
            jwt.sign({email:userDoc.email, id:userDoc._id}, jwtSecret, {},(err,token)=>{
                if(err) throw err;
                res.cookie('token', token).json('pass ok');
            });
        } 
        else res.status(422).json('pass not ok');
    }
    else{
        res.json("not found");
    }
})

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
});