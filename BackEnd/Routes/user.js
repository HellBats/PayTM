const express = require('express');
const {zod_signin_schema,zod_signup_schema,zod_update_schema,zod_filter_schema} = require('../zod_validation');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config')
const {User,Accounts} = require('../database')
const {authMiddleWare} = require('../middlewares')

userRouter.post('/sign-up',async (req,res)=>{
    const payload = req.body;
    const user_schema = zod_signin_schema.safeParse(
        payload
    );
    if(!user_schema.success) res.status(411).json({message:"wrong inputs"}); 
    else
    {
        const existing_user = await User.findOne(
            {EmailId:payload.EmailId}
        )
        if(existing_user) res.status(411).json({message:"User already exist"}); 
        else {
            const existing_user = await User.findOne(
                {PhoneNo:payload.PhoneNo});
            if(existing_user) res.status(411).json({message:"User already exist"});
            else{ 
                const user = await User.create({
                    FirstName:req.body.FirstName,
                    LastName:req.body.LastName,
                    PhoneNo:req.body.PhoneNo,
                    EmailId:req.body.EmailId,
                    Password:req.body.Password,
                });
                await Accounts.create({
                    UserId:user._id,
                    Balance: 1+Math.random()*10000
                })
                const userId = user._id;
                const token = jwt.sign({userId},JWT_SECRET);
                res.status(200).json({message:"User created Succesfully",token:token});
            }
        }
    }
});

userRouter.get('/sign-in',async (req,res)=>{
    const payload = req.body;
    const user_schema = zod_signup_schema.safeParse(
        payload
    );
    if(!user_schema.success) res.status(411).json({message:"wrong inputs"}); 
    else
    {
        const user = await User.findOne({
            EmailId:payload.EmailId,
            Password:payload.Password
            });
        if(!user) res.status(411).json({message:"Email or Password is incorrect"}); 
        else {
            const userId = user._id;
            const token = jwt.sign({userId},JWT_SECRET);
            res.status(200).json({message:"Logged in Succesfully",token:token});
        }
    }
});


userRouter.put('/update_profile',authMiddleWare,async (req,res)=>{
    const payload = zod_update_schema.safeParse(req.body);
    if(!payload.success) res.status(411).json({message:"wrong inputs"}); 
    await User.findByIdAndUpdate(req.userId,req.body);
    res.status(200).json({message:"Update Succesfull"});
});

userRouter.get('/bulk',authMiddleWare,async (req,res)=>
{
    const payload = zod_filter_schema.safeParse({FirstName:req.query.filter});
    if(!payload.success) res.status(411).json({message:"wrong inputs"}); 
    const users =  await User.find(
        {
            $or:[{FirstName:{'$regex':req.query.filter}},{LastName:{'$regex':req.query.filter}}]
        });
    res.json({user:users.map(user => ({
        FirstName:user.FirstName,
        LastName:user.LastName,
        _id:user._id
    })
    )});
    
}); 


module.exports = {userRouter};