const express=require("express")
const bodyParser=require("body-parser")
const cors=require("cors")
const cron=require("node-cron")

const contacts=require("./routes/contacts")
const sms=require("./routes/sms")
const email=require("./routes/email")
const replies=require("./routes/replies")

const checkContacts=require("./sundayCheck")

const app=express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static("public"))

app.use("/contacts",contacts)
app.use("/sms",sms)
app.use("/email",email)
app.use("/replies",replies)

cron.schedule("0 0 * * 0",()=>{

console.log("Sunday check running")

checkContacts()

})

const PORT=process.env.PORT||3000

app.listen(PORT,()=>{
console.log("Server running")
})
