/**
 * viet 3 function cong/nhan/chia
 * (3+5)*4/2
 */
const request = require('request');
const URL = 'http://localhost:3000/';

function nhan(a,b,fn){
    //fn: 1s + 100s
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
chia(10,5,(result,error)=>{
    if(error) console.log(error.message)
    else console.log(result)
})
//(3+5)*4/2 => tinh dien tich hinh thang
// cong(3,5,(tong,err)=>{
//     if(err) return console.log(err)
//     nhan(tong,4,(tich,err)=>{
//         if(err) return console.log(err)
//         chia(tich,2,(result,err)=>{
//             if(err) return console.log(err)
//             return console.log(result)
//         })
//     })
// })
function tinhDienTich(a,b,h,cb){
    cong(a,b,(tong,err)=>{
        if(err) return cb(null,err)
        nhan(tong,h,(tich,err)=>{
            if(err) return cb(null,err)
            chia(tich,2,(result,err)=>{
                if(err) return cb(null,err)
                return cb(result)
            })
        })
    })
}
tinhDienTich(3,5,4,(r,e)=>{
    if(e) return console.log(e)
    console.log(r)
})