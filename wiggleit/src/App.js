
import {useState,useEffect} from "react";
import './App.css';
import axios from "./axios";
import Video from './components/Video';

function App() {

  const[videos,setVideos]=useState([]);
  
  useEffect(()=>{
    const fetchPosts=async()=>{
      const req=await axios.get("/api/posts");
      setVideos(req.data);
    }
    fetchPosts();
  },[]);

  return (
    // BEM naming convention
    <div className="app">
      <div className="appVideo">
        {videos.map((video)=>{
          return <Video channel={video.channel} description={video.description} song={video.song} likes={video.likes} messages={video.messages} shares={video.shares} url={"https://wiggleit-backend.herokuapp.com/"+video.filePath}  />;
        })}
      </div>
      {/* app container */}
        	{/* Videos */}
    </div>
  );
}

export default App;
