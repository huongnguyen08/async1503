/**
 * viet 3 function cong/nhan/chia
 * (3+5)*4/2
 */
const request = require('request');
const URL = 'http://localhost:3000/';

function nhan(a,b,fn){
    if(isNaN(a) || isNaN(b)) 
        return fn(null, new Error('Invalid parameter(s)'))
    const uri = `${URL}nhan/${a}/${b}`
    request(uri,(error, res, body)=>{
        if(error) return fn(null, error)
        return fn(JSON.parse(body).result)
    })
}
function cong(a,b,fn){
    if(isNaN(a) || isNaN(b)) 
        return fn(null, new Error('Invalid parameter(s)'))
    const uri = `${URL}cong/${a}/${b}`
    request(uri,(error, res, body)=>{
        if(error) return fn(null, error)
        return fn(JSON.parse(body).result)
    })
}
function chia(a,b,fn){
    if(isNaN(a) || isNaN(b)) 
        return fn(null, new Error('Invalid parameter(s)'))
    const uri = `${URL}chia/${a}/${b}`
    request(uri,(error, res, body)=>{
        if(error) return fn(null, error)
        return fn(JSON.parse(body).result)
    })
}
nhan(2,3,(result,error)=>{
    if(error) console.log(error.message)
    else console.log(result)
})