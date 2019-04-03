const URL = 'https://chain.so/api/v2/get_address_balance/BTC/';
const request = require('request');

request(URL+'18cBEMRxXHqzWWCxZNtU91F5sbUNKhL5PX',(error,res,body)=>{
    if(error) return console.log(e)
    let result = JSON.parse(body)
    return console.log(result.data.confirmed_balance)
})
// const balance = getBalance(address)
// console.log(balance)




/**
 * 18cBEMRxXHqzWWCxZNtU91F5sbUNKhL5PX
 * 1NTxf1H9PoWCUWnKcdfLtFtgGWxRmWWq83
 * 19Li3BpAigvtv2Z9ce4B5WwjXixfwqkgVy
 * 1CK6KHY6MHgYvmRQ4PAafKYDrg1ejbH1cE
 * 1H4o9Mh7HyjPa46z4vtv7J8yzaK5RY4bXR
 */
