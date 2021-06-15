const express = require( "express"  ) ;
require("./db/conn.js") ; 
const  Student = require("./models/students") ;

const app =  express() ;
const port =   process.env.port|| 8081;

app.use(express.json()   ) ; 


// app.post("/students" ,(req, res) => {
//     console.log(req.body  ) ; 

//     const  user = new Student(req.body)  ; 

//     user.save().then(()=> {
//         // res.send(user)  ;
//         // console.log("success" ) ; 
//         res.send(user ) ;

//     }).catch( (err) => {
//         res.send(err)  ;

//     }) 
   
// })

app.post("/students" , async(req, res) => {
    try{
        const  user = new Student(req.body)  ; 
        const  createUser = await user.save()  ; 
        
        res.status(201).send(createUser) ;


    }catch(err) {
        res.status(400).send(err) ;

    }
   
})

// read db 
app.get("/students" , async(req, res) => {
    try{  
        const studentsData = await Student.find()  ; 
        res.status(201).send(studentsData) ;
    }catch(err) {
        res.status(400).send(err) ;

    }
})
// read individual db 
app.get("/students/:id" , async(req, res) => {
    try{ 
        const _id =  req.params.id ; 
        // console.log(req.params)  ;

        const studentsData = await Student.findById(_id)  ; 
    
        console.log(studentsData)  ; 
        if(!studentsData) {
            return res.status(404).send() ;
        } else {
            res.send(studentsData ); 
        }
    
    
    }catch(err) {
        res.status(400).send(err) ;

    }
})

// update student by id 

 
app.patch("/students/:id" , async(req, res) => {
    try{ 
        const _id =  req.params.id ; 
        // console.log(req.params)  ;


        const studentsData = await Student.findByIdAndUpdate(_id , req.body , {
            new:true 
        })  ; 
    
        res.send( studentsData)  ; 
    
    }catch(err) {
        res.status(400).send(err) ;

    }
})




app.listen(  port , ()=> {
    console.log(`connected at ${port}`) ;


}) 
