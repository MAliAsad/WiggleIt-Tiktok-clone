
import {useRef, useState} from "react";
import "../css/video.css";
import VideoFotter from "./VideoFotter";
import VideoSidebar from "./VideoSidebar";

const Video = (props) => {
    const videoRef=useRef(null);
    const [playing,setPlaying]=useState(false);

    const videoPress=()=>{
        // if video playing stop it
        // stop it

        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true);
        }

        // otherwise if its not playing
        // play it
    }
    return (
        <div className="video">
            <h2 className="logo" >WiggleIt</h2>
            <video onClick={videoPress} className="videoPlayer" ref={videoRef} loop src={props.url} >
            
            </video>
            <VideoFotter channel={props.channel} description={props.description} song={props.song} />
            <VideoSidebar likes={props.likes} shares={props.shares} messages={props.messages} videoUrl={props.url} />
        </div>
    )
}

export default Video
