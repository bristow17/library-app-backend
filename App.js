const express = require("express")
const mongoose = require("mongoose")
const corus = require("cors")
const {librarymodel}=require("./models/.js")


const app=express()
app.use(corus())
app.use(express.json())

mongoose.connect("mongodb+srv://bristow17:bristow1904@cluster0.vn8j7z4.mongodb.net/librarynewdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{

    let input=req.body
    let library=new librarymodel(input)
    library.save()
    res.json({"status":"success"})
    
})


app.get("/viewall",(req,res)=>{

    librarymodel.find().then(
        
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
}
)

app.post("/Search",(req,res)=>{
    let input=req.body
    librarymodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})


app.post("/delete",(req,res)=>{

    let input=req.body
    librarymodel.findByIdAndDelete(input._id).then(

        (response)=>{
            res.json({"status":"success"})
        }

    ).catch(
        ()=>{
            res.json({"status":"fail"})
        }
    )
})






app.listen(8080,()=>(
    console.log("server started")
))