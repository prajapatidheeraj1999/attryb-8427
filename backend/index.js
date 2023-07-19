const express=require("express")
const cors=require("cors")
const {connect}=require("./db")
const {userouters}=require("./route/users_route")
const app=express()
app.use(cors())
app.use(express.json())

app.use("/users",userouters)

app.listen(8080,async()=>{

    try{
        await connect
        console.log("connection is stablesh port no 8080")


    }catch(error)
    {
        console.log("something is wrong")
    }

})