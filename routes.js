const express = require("express");
const route = express.Router();

const getpage = require('./model.js');

route.get('/pageno/:page',async(req,res)=>{
    const page = parseInt(req.params.page);
    const limit = 10;
    const data = (page-1)*limit;
    const disp = await getpage(data,limit);
    res.send(disp);
})

/* const student = require("./model.js");
route.post('/',(req,res)=>{
    const {name,age,year} = req.body;
    const data = student.create({name,age,year});
    if(data){
        res.send("inserted successfully");
    }

});

route.get('/',async(req,res)=>{
    const data = await student.find();
    res.send(data);

})

route.delete('/:id',async(req,res)=>{
    const {id} =  req.params;
    await student.findByIdAndDelete(id);
    res.send({success:true});
})

route.put('/:id',async(req,res)=>{
    const {id} = req.params;
    const{name,age,year} = req.body;
    const updated = await student.findByIdAndUpdate(id,{name,age,year},{new:true});
    res.send(updated);

})


*/

module.exports = route;