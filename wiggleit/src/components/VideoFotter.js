import "../css/videoFotter.css";
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import Ticker  from "react-ticker";

const VideoFotter = ({channel,description,song}) => {
    return (
        <div className="videoFotter" >
            <div className="videoFotterText">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooterTicker" >
                    <MusicNoteRoundedIcon className="videoFooterIcon"/>
                    <Ticker mode="smooth">
                    {
                        ()=><p>{song}</p>
                            
                    }
                    </Ticker>
                </div>
            </div>
            <img alt="" className="videoFotterPlayer" src="https://static.thenounproject.com/png/934821-200.png" />
        </div>
    )
}

export default VideoFotter
