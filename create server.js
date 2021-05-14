var fs = require('fs' ) ; 
var http =  require('http') ; 


var server =  http.createServer(function n(req,res )   {

    if(  req.url = "/") {

        fs.readFile( "web1.html"  , function(error, data ) {

            res.writeHead(200 , {'Content-Type':'text/html'})  ; 
            res.write(data)   ;  
            console.log( "inside "  ) ; 
    
            res.end( )  ;
    

        })


    }    


})


server.listen(3002 ) ;
console.log("server run success " )  ;

