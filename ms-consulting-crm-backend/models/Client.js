import mongoose from "mongoose";


const ClientSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    company:String,

    email:String,

    phone:String,

    status:{
        type:String,
        default:"Client actif"
    }

});


export default mongoose.model(
    "Client",
    ClientSchema
);