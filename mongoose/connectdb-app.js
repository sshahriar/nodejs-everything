const mongoose = require("mongoose" ) ;  
mongoose.connect("mongodb://localhost:27017/ttchanell",{ useNewUrlParser: true , useUnifiedTopology: true } ) 
.then(()=> console.log("conn success ...") )
.catch((err)=> console.log(err) ) ;
