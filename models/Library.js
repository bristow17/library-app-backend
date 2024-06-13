const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
            "title": String,
            "desc": String,
            "author": String,
            "pub": String,
            "pdate": String,
    }
)

let librarymodel=mongoose.model("library",schema);
module.exports={librarymodel}