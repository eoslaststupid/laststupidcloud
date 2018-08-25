/**
 * Created by lilu on 2018/8/15.
 */
const EOS = require('eosjs')
var schedule = require('node-schedule');

const eos = EOS({
  httpEndpoint: process.env.EOSIO_HTTP_URL,
  chainId: process.env.CHAIN_ID,
  broadcast: true,
  verbose: false,
  keyProvider: process.env.PRIVATE_KEY
})

let endGame = ()=>{
  schedule.scheduleJob('*/5 * * * * *',  ()=>{
     eos.contract(process.env.EOSIO_CONTRACT_ACCOUNT).then((stupidCon)=>{
        stupidCon.end("",{authorization: process.env.ACTION_ACCOUNT})
      },(err)=>{
        console.log(err)
        }
      )
  })
}

const stupidFuncs = {
  endGame
}

module.exports=stupidFuncs