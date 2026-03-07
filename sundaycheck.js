const db=require("./firebase")

async function checkContacts(){

const snapshot=await db.collection("contacts").get()

const today=new Date()

snapshot.forEach(async doc=>{

const contact=doc.data()

if(!contact.lastSent) return

const lastSent=contact.lastSent.toDate ? contact.lastSent.toDate() : new Date(contact.lastSent)

const diff=Math.floor((today-lastSent)/(1000*60*60*24))

if(diff>=7){

await db.collection("contacts").doc(doc.id).update({
status:"active"
})

}

})

}

module.exports=checkContacts
