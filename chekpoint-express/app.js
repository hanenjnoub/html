const express=require("express")
const date=require("./middleware/Date")
const app=express()

app.use(date)
const port=5000
app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running on port ${port}`)
})
app.get("/Home",(req,res)=>{
    res.sendFile(__dirname+"/public/Home.html")
})
app.get("/Contact",(req,res)=>{
    res.sendFile(__dirname+"/public/contact.html")
})
app.get("/Server",(req,res)=>{
    res.sendFile(__dirname+"/public/server.html")
})
app.get("/style.css",(req,res)=>{
    res.sendFile(__dirname+"/public/Style.css")
})