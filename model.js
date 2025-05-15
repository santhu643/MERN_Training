const mongoose = require('mongoose');
/* const studentSchema = new mongoose.Schema({
    name:String,
    age:String,
    year:String
},{
    timestamps:true
});
const student = mongoose.model('student',studentSchema);

 */

const MoviesSchema = new mongoose.Schema({
    plot:String,
    title:String
},{
    timestamps:true
});
const movies = mongoose.model('movies',MoviesSchema);

async function getpage(data,limit){
    const toshow =movies.find({},{title:1,plot:1}).skip(data).limit(limit);
    return toshow;
}


module.exports = getpage;
