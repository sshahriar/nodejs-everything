// create schema
const mongoose =  require("mongoose" ) ; 
// const validator=  require("validator") ;

const studentSchema = new mongoose.Schema({
    name:{
        type:String , 
        required:true  
    } , 
    email:{
        type:String ,
        required: true 
        // unique:[ true, "email exists" ]  ,
        // validate(value) {
        //     if( !validator.isEmail(value)) {
        //         throw new Error("invalid  Email") ; 
        //     }

        // } 
    } ,
    phone:{
        type:Number ,
        
        required: true ,
        unique:true 
    } , 
    address:{
        type:String ,
        reqired:true 
    }

})

const Student = new mongoose.model('Student', studentSchema) ;

module.exports = Student ;

