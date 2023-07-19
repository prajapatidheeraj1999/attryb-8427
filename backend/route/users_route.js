
const express=require("express")
const {uermodale}=require("../model/users_model")
const userouters=express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
userouters.post("/signup",async(req,res)=>{

    let {email,password,confirmPassword}=req.body
    try{
        let data=await uermodale.findOne({email})
        if(!data)
        {
            bcrypt.hash(password, 5, async(err, hash)=> {

                if(hash)
                {
                    let org=await uermodale({email,password:hash,confirmPassword:hash})
                    await org.save()
                    res.send({"mas":"user has been created"})

                }
                // Store hash in your password DB.
            });

        }else{
            res.send({"mas":"user has been allready register"})

        }


    }catch(error)
    {
        res.send({"mas":"somthing is wrong"})

    }

})

userouters.post("/login",async(req,res)=>{
    let {email,password}=req.body

    try{
        let data=await uermodale.findOne({email})
        if(data)
        {
            bcrypt.compare(password, data.password, async(err, result)=> {
                
                if(result)
                {
                    const token = jwt.sign({ userID:data._id}, 'dheeraj');
                    res.send({"token":token})


                }else{
                    res.send({"mas":"password is incorrect"})
                }
            })

        }else{
            res.send({"mas":"pls login first"})
        }

    }catch(error)
    {
        res.send({"mas":"something is worng"})
        
    }
    
})



module.exports={userouters}