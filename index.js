const express = require('express')
const app = express()
const PORT = 4000
const Blockfrost = require("@blockfrost/blockfrost-js");
const admin = require("firebase-admin");
const cron = require('node-cron');


// import { BlockFrostAPI } from '@blockfrost/blockfrost-js'; // using import syntax

/*admin.initializeApp({
  credential: admin.credential.cert(process.env.firestore_key)
});



const db = admin.firestore();
*/


const API = new Blockfrost.BlockFrostAPI({
  //projectId: process.env.BlockFrostAPIKey, // see: https://blockfrost.io
  projectId: process.env.BlockFrostAPIKeyMainnet, // see: https://blockfrost.io


});


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});


/*app.get('/getAssestByPolicyId' , async (req,res) => {
  
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    try {
  
    const latestBlock = await API.assetsPolicyByIdAll("583c9e403f5974a6a3a186972dabaacf2a759fa0913ed9f12b34164d")
      console.log("latestBlock", latestBlock);
      let a = JSON.stringify(latestBlock)
      res.send(`${a}`)
 
    } catch (err) {
      console.log("error", err);
      res.send(`error  ${err}`)
    }




}) */


app.get('/getAssestByPolicyIdLoop', async (req, res) => {





  res.send('ok');



})



module.exports = app