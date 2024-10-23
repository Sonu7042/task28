const mongoose= require('mongoose')


const itemSchema=  new mongoose.Schema({
    name:String,

})

const itemModel= new mongoose.model("items", itemSchema)


module.exports = itemModel