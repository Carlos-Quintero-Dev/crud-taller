import mongoose from "mongoose";

const docenteSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'name Is Required']
    },
    email: {
        type:String,
        required: [true, 'email Is Required']
    },
    profession: {
        type:String,
        required: [true, 'profession Is Required']
    },
    gender: {
        type:String,
    },
    address: {
        type:String,
    },
    
    
})

export const DocenteModel = mongoose.model('docente',docenteSchema)
