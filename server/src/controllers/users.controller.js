const User=require('../models/users.models');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

// Signup Function
async function signup(req,res){
    const userDetails=req.body;
    console.log({userDetails});
    try{
        if(!userDetails) throw Error("User Details Missing");
        const {username, name, email, password}=userDetails;
        const salt=await bcrypt.genSalt(process.env.SALT);
        const passwordHash=await bcrypt.hash(password, salt);
        console.log({passwordHash});

        const newUser=new User({
            username,
            name,
            email,
            password:passwordHash,
        })

        await newUser.save();
        res.status(201).json({message: 'User is registered successfully.'});
    }
    catch(error){
        res.status(500).json({message: `Error in signup ${error}`});
    }
}

// Login Function
async function login(req,res){
    const userDetails=req.body;
    try{
        if(!userDetails) throw Error("Login Details Missing");
        const {email, password}=userDetails;

        const user=await User.findOne({email});
        if(!user) throw Error("User not found");

        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch) throw Error("Password is incorrect");

        const token=jwt.sign({email:user.email},process.env.JWT_SECRET,{expiresIn:'1d'});
        res.status(200).json({token})
    }
    catch(error){
        res.status(500).json({message: `Error in login ${error}`});
    }
}

module.exports={
    signup,
    login
}