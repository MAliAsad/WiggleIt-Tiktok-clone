const express=require("express");
const router=express.Router();
const videos=require("../models/db.model")
const multer=require("multer");

// Defining storage for videos
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./videoUploads");
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
});

// upload parameters
const upload=multer({
    storage:storage
});

// handling our routes
router.post("/",upload.single("video"),(req,res)=>{
    
    const dbVideos={
        filePath:req.file.path,
        channel:req.body.channel,
        description:req.body.description,
        song:req.body.song,
        likes:req.body.likes,
        messages:req.body.messages,
        shares:req.body.shares
    };
    videos.create(dbVideos,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    });
});

router.get("/",(req,res)=>{
    videos.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
});

module.exports=router;