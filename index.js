const express = require('express')
const app = express()
const PORT = 4000
const Blockfrost = require("@blockfrost/blockfrost-js");
// import { BlockFrostAPI } from '@blockfrost/blockfrost-js'; // using import syntax


async function runExample() {
    try {
  
      const networkInfo = await API.network();

     
      const pools = await API.pools({ page: 1, count: 10, order: "asc" });

      console.log("networkInfo", networkInfo);
      res.send("networkInfo", networkInfo)
 
    } catch (err) {
      console.log("error", err);
      res.send("error", err)
    }

    
  }

const API = new Blockfrost.BlockFrostAPI({
    projectId: process.env.BlockFrostAPIKey, // see: https://blockfrost.io
  });

app.listen(PORT , () => {
    console.log(`API litening on PORT ${PORT}`)
})


app.get('/' , async  (req,res) => {
  

    
      
     await runExample()



}) 

app.get('/about' , (req,res) => {
    res.send('this is my about route.')
}) 


module.exports = app


