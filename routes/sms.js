const express=require("express")
const router=express.Router()
const client=require("../twilio")
const db=require("../firebase")

router.post("/send",async(req,res)=>{

const{message}=req.body

const snapshot=await db.collection("contacts").get()

snapshot.forEach(async doc=>{

const contact=doc.data()

if(!contact.phone) return

await client.messages.create({
body:message,
from:process.env.TWILIO_PHONE_NUMBER,
to:contact.phone
})

await db.collection("contacts").doc(doc.id).update({
status:"inactive",
lastSent:new Date()
})

})

res.json({success:true})

})

module.exports=router
