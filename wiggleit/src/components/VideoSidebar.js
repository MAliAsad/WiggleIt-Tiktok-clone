
import "../css/videoSidebar.css";
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import RateReviewIcon from '@material-ui/icons/RateReview';
import TelegramIcon from '@material-ui/icons/Telegram';
import { useState } from "react";
import {toast}  from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {CopyToClipboard} from "react-copy-to-clipboard";


toast.configure();
const VideoSidebar = ({likes,shares,messages,videoUrl}) => {
    const [liked,setLiked]=useState(false);
    const notify=()=>{
        toast("Under development!",{position:toast.POSITION.TOP_CENTER});
    }
    const notifyShare=()=>{
        toast("Video link copied!",{position:toast.POSITION.TOP_CENTER});
    }

    return (
        <div className="videoSidebar">
            <div className="videoSidebarButton">
                {liked?(
                    <EmojiEmotionsIcon fontSize="large" onClick={(e)=>setLiked(false)} />
                ):(
                    <SentimentSatisfiedIcon fontSize="large" onClick={(e)=>setLiked(true)} />
                )}
                
                <p>{liked?likes+1:likes}</p>
            </div>

            <div className="videoSidebarButton">
                <RateReviewIcon onClick={notify} fontSize="large" />
                <p>{messages}</p>
            </div>

            <div className="videoSidebarButton">
                <CopyToClipboard text={videoUrl} >
                <TelegramIcon onClick={notifyShare} fontSize="large" />
                </CopyToClipboard>
                <p>Share</p>
            </div>
        </div>
    )
}

export default VideoSidebar
