
// connect with database using  mongoose 
// define structure 
// use  mongoose  model 

const mongoose = require("mongoose" ) ;  


mongoose.connect("mongodb://localhost:27017/ttchanell",{ useNewUrlParser: true , useUnifiedTopology: true } ) 
    .then(()=> console.log("conn success ...") )
    .catch((err)=> console.log(err) ) ;

// schema 
// it defines the  structure of the document 

const  playlistSchema = new mongoose.Schema({
    name:  {
		type:String ,  
		required :true 		
	} , 
    ctype: String , 
    vedios: Number  , 
    author: String ,
    active: Boolean , 
    date: {
        type:Date , 
        default:Date.now  
	} 
})  


// mongoose  model 
// can do crud using schema 


const  Playlist =  new mongoose.model("Playlist"  , playlistSchema)  ; 

const createDocument =  async()=>{
	try {
		const  reactPlaylist =  new Playlist ({
			name:  "Node JS" , 
			ctype:  "Back End" , 
			vedios: 50  , 
			author: "thapa",
			active: true , 	
		})  ;  
		const  result =  await reactPlaylist.save()  ; 
		console.log(result)  ; 
	}catch(err ) {
		console.log(err )   ; 
	} 
}

createDocument()  ; 


