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


  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

app.listen(PORT , () => {
    console.log(`API litening on PORT ${PORT}`)
    
})


app.get('/getAssestByPolicyId' , async (req,res) => {
  
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    try {
  
    const latestBlock = await API.assetsPolicyByIdAll("075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a81")
      console.log("latestBlock", latestBlock);
      let a = JSON.stringify(latestBlock)
      res.send(`${a}`)
 
    } catch (err) {
      console.log("error", err);
      res.send(`error  ${err}`)
    }




}) 

app.get('/about' , (req,res) => {
    res.send('this is my about route.')
}) 


module.exports = app


