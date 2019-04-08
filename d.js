/**
 * viet 3 function cong/nhan/chia
 * (3+5)*4/2
 */
const request = require('request');
const URL = 'http://localhost:3000/';

function cong(a,b){
    return new Promise((resolve, reject)=>{
        if(isNaN(a) || isNaN(b))
            return reject(new Error('Invalid parameter(s)'))
        //http://localhost:3000/cong/3/4
        const uri = `${URL}cong/${a}/${b}`
        request(uri,(err,res,body)=>{
            if(err) return reject(err)
            return resolve(JSON.parse(body).result)
        })
    })
}
function nhan(a,b){
    return new Promise((resolve,reject)=>{
        if(isNaN(a) || isNaN(b))
            return reject(new Error('Invalid parameter(s)'))
        const uri = `${URL}nhan/${a}/${b}`
        request(uri,(error, res, body )=>{
            if(error) return reject(err)
            return resolve(JSON.parse(body).result)
        })
    })
}
function chia(a,b){
    return new Promise((resolve,reject)=>{
        if(isNaN(a) || isNaN(b))
            return reject(new Error('Invalid parameter(s)'))
        if(b==0) return reject(new Error('Cannot divide 0'))
        const uri = `${URL}chia/${a}/${b}`
        request(uri,(error, res, body )=>{
            if(error) return reject(err)
            return resolve(JSON.parse(body).result)
        })
    })
}
// nhan(3,4)
// .then(result=>console.log(result))
// .catch(err=>console.log(err.message))

// (3+5)*4/2 = (8*4)/2 = 32/2 = 16
// cong(3,5)
// .then(tong=>{
//     nhan(tong,4)
//     .then(tich=>{
//         chia(tich,2)
//         .then(result=>{
//             console.log(result)
//         })
//         .catch(err=>{
//             console.log(err.message)
//         })
//     })
//     .catch(err=>{
//         console.log(err.message)
//     })
// })
// .catch(err=>{
//     console.log(err.message)
// })

// cong(3,5)
// .then(tong=>tong)
// .then(a=> console.log(a))
// .catch(a=>console.log(a))


// cong(3,5)
// .then(tong=>{
//    return nhan(tong,4)
// })
// .then(tich=>chia(tich,2))
// .then(result=>console.log('KQ: '+result))
// .catch(err=>console.log('Error: '+err.message))


// cong(3,4)
// .then(tong=>{
//     return 'a'
// })
// .then(r=>console.log(r))

function tinhDienTich(a,b,h){
    return cong(a,b)
    .then(tong=>nhan(tong,h))
    .then(tich=>chia(tich,2))
}
tinhDienTich(3,5,4)
.then(r=>console.log(r))
.catch(err=>console.log(err))