const express =  require('express') ; 
const app = express() ; 
const hbs = require("hbs") ; 
const path= require("path"  ) ;

const  port =  process.env.port|| 8000   ;

const  publicStaticDirPath = path.join(__dirname,'../public') ;
const  partialsPath = path.join(__dirname,'../templates/partials') ;
const  viewsPath = path.join(__dirname,'../templates/views') ;

const  weatherData=   require('../utils/weatherData') ; 


app.set('view engine' , 'hbs')  ;  
app.set('views' , viewsPath)  ;  
hbs.registerPartials(partialsPath) ;  
app.use(express.static(publicStaticDirPath) )  ;  





app.get("/" , (req,res) => {
    res.send( "Hi ")  ; 
}) 
// /weather?address:dhaka 
app.get("/weather" , (req,res) => {
    console.log("inside weather") ; 
    const address = req.query.address  ;
    if(!address ) {
        return res.send({error : "must give address "  }  )  ; 

    }
    
    weatherData(address , (error , {temperature ,  description , cityName} ) => {
        if(error ) {
            return res.send( {error}   ) ;  
        }

        res.send(  {temperature,description , cityName }   ) ; 
    })
 

}) 
app.get("*" , (req,res) => {
    console.log("not found ") ;
    res.end()  ; 
    // res.sennd( "Hi ")  ; 
}) 



app.listen( port ,()=>{
   console.log(`server running  at - ${ port}`  ) ; 
})


