const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const videosRouter=require("./router/videosRouter");


const app=express();
const port= process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use("/videoUploads",express.static("videoUploads"))

const url="mongodb+srv://admin:admin@cluster0.qrddy.mongodb.net/WiggleItDB?retryWrites=true&w=majority";
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true});
mongoose.connection.once("open",()=>console.log("DB connection established"));


app.get("/",(req,res)=>{
    res.status(200).send("Hello WOrld");
});

app.use("/api/posts/",videosRouter);


app.listen(port,()=>console.log(`Server is running on ${port}`));