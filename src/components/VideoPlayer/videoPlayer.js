import './videoPlayer.css'

import React, { useEffect, useRef } from 'react';
import video from '../../assets/[Witanime.com] BNHA7S EP 11 SD.mp4';
import { useNavigate } from 'react-router-dom';

const VideoPlayer = ({playState, setPlayState}) => {

  const player = useRef();
  const videoRef = useRef();

  const closePlayer = (e) => {
    if(e.target === player.current) {
      setPlayState(false)
      console.log(videoRef);
      // videoRef.current.paused = true;
    }
  }

  return (
    <div ref={player} className={`video-player ${playState ? "" : "hide"}`} onClick={closePlayer}>
      <video ref={videoRef} src={video} autoPlay muted controls>
      </video>
    </div>
  );
}

export default VideoPlayer;
