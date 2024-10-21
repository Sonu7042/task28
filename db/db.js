const mongoose= require('mongoose')


const link= "mongodb://localhost:27017/TodoList"

 // useNewUrlParser: true,    
//  useUnifiedTopology: true


const mongoConnect=()=>{

    mongoose.connect(link)
    .then(()=>{
        console.log("db is connected")

    })
    .catch((err)=>{
        console.log("this is err", err)
    })

}

module.exports = mongoConnect