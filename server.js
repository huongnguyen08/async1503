const express = require('express')
const app = express();

app.get('/:pheptinh/:soa/:sob',(req,res)=>{
    const { pheptinh, soa, sob } = req.params
    const cal = new Calculator(pheptinh,soa,sob)
    res.send({
        pheptinh, soa, sob,
        result : cal.getResult()
    })
})
app.listen(3000)
class Calculator{
    constructor(pheptinh, soa, sob){
        this.pheptinh = pheptinh;
        this.soa = soa;
        this.sob = sob
    }
    get pt(){
        if(this.pheptinh=='cong') return '+'
        if(this.pheptinh=='tru') return '-'
        if(this.pheptinh=='nhan') return '*'
        return '/'
    }
    getResult(){
        let str = `${this.soa} ${this.pt} ${this.sob}`
        return eval(str)
    }
}