const express=require("express")
const router=express.Router()
const db=require("../firebase")

router.post("/sms",async(req,res)=>{

const{From,Body}=req.body

await db.collection("replies").add({
phone:From,
message:Body,
type:"sms",
timestamp:new Date()
})

res.send("OK")

})

module.exports=router
