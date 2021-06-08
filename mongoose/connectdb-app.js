//https://www.youtube.com/watch?v=3UT9O0BU_38&list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8&index=49

const mongoose = require("mongoose" ) ;  


mongoose.connect("mongodb://localhost:27017/ttchanell", { useNewUrlParser: true , useUnifiedTopology: true } ) 
                                                        .then(()=> console.log("conn success ...") )
                                                        .catch((err)=> console.log(err) ) ;
