const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title : {
        type : String,
        required :true
    },
    content :{
        type : String,
        required :true
    },
    image:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg1fQdMzYmJ6ux6CDXbLAtsl4S3NARPNYVwg&s"
    },
    userId : {
        type :String,
        required:true
    }

},
{
    timestamps: true,
    versionKey: false
})

const noteModel = mongoose.model("note",noteSchema)

module.exports = noteModel