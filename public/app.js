async function addContact(){

const name=document.getElementById("name").value
const phone=document.getElementById("phone").value
const email=document.getElementById("email").value

await fetch("/contacts/add",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({name,phone,email})
})

alert("Contact Added")

}

async function sendSMS(){

const message=document.getElementById("smsMessage").value

await fetch("/sms/send",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({message})
})

alert("SMS Sent")

}

async function sendEmail(){

const subject=document.getElementById("emailSubject").value
const message=document.getElementById("emailMessage").value

await fetch("/email/send",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({subject,message})
})

alert("Email Sent")

}
