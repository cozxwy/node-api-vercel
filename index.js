const express = require('express')
const app = express()
const PORT = 4000
//import * as admin from 'firebase-admin';
const admin = require('firebase-admin')

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    })
  });
}


const db = admin.firestore();


app.listen(PORT , () => {
  console.log(` API listenning at ${PORT}`)
})

app.get('/', (req,res) => {
  res.send('this my api run')
})


app.get('/about', async (req,res) => {


  const user = await db.collection('users').doc('alice').get();

  if (!user.exists) {
    notFound();
  }
  else {
    res.send(user.data().name)
  }



  

})


module.exports = app





