const express=require("express")
const router=express.Router()
const db=require("../firebase")

router.post("/add",async(req,res)=>{

const{name,phone,email}=req.body

const doc=await db.collection("contacts").add({
name,
phone,
email,
status:"new",
createdAt:new Date()
})

res.json({id:doc.id})

})

router.get("/all",async(req,res)=>{

const snapshot=await db.collection("contacts").get()

let contacts=[]

snapshot.forEach(doc=>{
contacts.push({id:doc.id,...doc.data()})
})

res.json(contacts)

})

module.exports=router
