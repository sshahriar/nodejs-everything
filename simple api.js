var fs   =  require('fs' ) ; 
var http =  require('http') ; 
var url  =  require('url') ; 
 
var data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8' ) ; 
var dataObj = JSON.parse(data)  ; 
       






var server =  http.createServer(function(req,res )   {
    var  path  = req.url   ; 
    if(  req.url === "/") {   

        fs.readFile( "web1.html"  , function(error, data ) {

            res.writeHead(200 , {'Content-Type':'text/html'})  ; 
            res.write(data)   ;  
            console.log( "inside "  ) ; 
    
            res.end(    )  ;
        


        })           


    } else  if( path === "/api"  )  {


        res.writeHead(200 , {'Content-Type':'application/json'})  ; 
            
        console.log( dataObj) ;  

        res.end(data  )  ;
        // fs.readFile(`${__dirname}/dev-data/data.json`,'utf-8',(err,data) => {
        //     if(err )  {
        //         console.log('insidn') ; 
        //     } else {
                
        //         console.log('fuck   ') ; 

        //         const productData = JSON.parse( data ) ;
        //         // const msg = JSON.stringify(productData)  ; 
           
            

        //     }

        // }  ) ;  

    } else {
    
            res.end('fork  ')
    }
            



})


server.listen(3002 ) ;
console.log("server run success " )  ;

