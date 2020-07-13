const mongoose = require('mongoose');
const URL = 'mongodb://localhost:27017/Book'; 

mongoose.connect(URL,{useNewUrlParser: true},(err)=>{    
 if(!err){
  console.log('connection successful');
 }
 else{console.log('Error in DB Connection:  '+err)}
})