const express= require("express")
const mongoConnect= require('./db/db')
const router= require('./router/router')
const cors= require('cors')


mongoConnect()
const app= express()
app.use(express.json())
app.use(cors())


app.use("/", router)



app.listen(9000, ()=>{
    console.log("server is listening...")
})

