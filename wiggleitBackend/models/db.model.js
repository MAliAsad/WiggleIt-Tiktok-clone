const mongoose=require("mongoose");

const wiggleItSchema=mongoose.Schema({
    filePath:String,
    channel:String,
    description:String,
    song:String,
    likes:Number,
    messages:Number,
    shares:Number
});

module.exports=mongoose.model("WiggleItVideos",wiggleItSchema);