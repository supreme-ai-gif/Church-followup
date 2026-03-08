const express=require("express")
const router=express.Router()
const gmail=require("../gmail")
const db=require("../firebase")

router.post("/send",async(req,res)=>{

const{subject,message}=req.body

const snapshot=await db.collection("contacts").get()

snapshot.forEach(async doc=>{

const contact=doc.data()

if(!contact.email) return

const email=[
`To:${contact.email}`,
`Subject:${subject}`,
"",
message
].join("\n")

const encoded=Buffer.from(email)
.toString("base64")
.replace(/\+/g,"-")
.replace(/\//g,"_")

await gmail.users.messages.send({
userId:"me",
requestBody:{raw:encoded}
})

})

res.json({success:true})

})

module.exports=router
