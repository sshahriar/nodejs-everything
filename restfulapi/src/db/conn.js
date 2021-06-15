const  mongoose =  require("mongoose"  ) ; 

mongoose.connect( "mongodb://localhost:27017/students-api",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true 
}).then( ()=> {
    console.log( "conncterd with database "  ) ; 
}).catch( (err) =>{
    console.log("error connecting to db "   )  ;
} )
