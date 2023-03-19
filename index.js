const express = require('express')
const app = express()
const PORT = 4000
const Blockfrost = require("@blockfrost/blockfrost-js");
// import { BlockFrostAPI } from '@blockfrost/blockfrost-js'; // using import syntax


async function runExample(res) {
    try {
  
        const latestBlock = await API.blocksLatest();

     
      const pools = await API.pools({ page: 1, count: 10, order: "asc" });

      console.log("latestBlock", latestBlock);
      res.send("latestBlock", latestBlock)
 
    } catch (err) {
      console.log("error", err);
      res.send("error", err)
    }

    
  }

const API = new Blockfrost.BlockFrostAPI({
    //projectId: process.env.BlockFrostAPIKey, // see: https://blockfrost.io
    projectId: process.env.BlockFrostAPIKeyMainnet, // see: https://blockfrost.io

    
  });

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})


app.listen(PORT , () => {
    console.log(`API litening on PORT ${PORT}`)
    
})


app.get('/getAssestByPolicyId' , async (req,res) => {
  

    
    try {
  
    const latestBlock = await API.assetsPolicyByIdAll("583c9e403f5974a6a3a186972dabaacf2a759fa0913ed9f12b34164d")
      console.log("latestBlock", latestBlock);
      let a = JSON.stringify(latestBlock)
      res.send(`latestBlock  ${a}`)
 
    } catch (err) {
      console.log("error", err);
      res.send(`error  ${err}`)
    }




}) 

app.get('/about' , (req,res) => {
    res.send('this is my about route.')
}) 


module.exports = app


