const express= require("express")
const mongoConnect= require('./db/db')
const router= require('./router/router')
const cors= require('cors')


mongoConnect()
const app= express()

app.use(cors({
    origin:"http://localhost:5173"
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

   



app.use("/", router)



app.listen(9000, ()=>{
    console.log("server is listening...")
})

