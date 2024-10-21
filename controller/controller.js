const itemModel= require('../Schema/itemSchem')


const getData= async(req, res)=>{
    const item=  await itemModel.find()
    res.status(200).json({
        success:true,
        data:item
       
    })
}


const  createData= async(req, res)=>{
    const item= req.body
    if(!item){
       return res.status(500).json({message:"Pls enter the item"})
    }
    const data= await itemModel.create(item)
    res.status(201).json({
        success:true,
        data:data
    })

}



const updateData= async(req, res)=>{
    const item= req.body
    const  id= req.params.id

    let userId= await itemModel.findById(id)
    if(!userId){
       return res.status(500).json({message:"Item is not found"})
    }

     userId= await itemModel.findByIdAndUpdate(id,  item, {new:true})

    res.status(200).json({
        success:true,
        data:userId
    })

}





const deleteData= async(req, res)=>{
    const  id= req.params.id

    let userId= await itemModel.findById(id)
    if(!userId){
       return res.status(500).json({message:"something is wrong"})
    }

     userId= await itemModel.findByIdAndDelete(id)

    res.status(200).json({
        success:true,
        data:userId
    })

}





module.exports= {getData, createData,  updateData, deleteData}  
