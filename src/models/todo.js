import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }   
},{
    timestamps: true
})

export default mongoose.model('TodoModel', todoSchema)