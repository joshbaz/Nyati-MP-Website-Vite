import React, { useRef, useState } from "react";

const FullCustomPlayer = ({ videoSrc, title }) => {
    const videoRef = useRef(null);

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0)

     const handleBack = () => {
       videoRef.current.currentTime -= 10; // Go back 10 seconds
    };
    
    const handleTimeUpdate = () => {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration);
    };

    const handleProgressClick = (e) => {
      const progressWidth = e.target.clientWidth;
      const clickPosition = e.nativeEvent.offsetX;
      const newTime = (clickPosition / progressWidth) * duration;
      videoRef.current.currentTime = newTime;
    };
  return (
    <div className="video-player-container max-w-[640px] my-0 mx-auto">
      <h2 className="video-title text-whites-40">hello</h2>
      <video
        ref={videoRef}
        className="video-player w-full"
      
        onTimeUpdate={handleTimeUpdate}
        src={videoSrc}
      ></video>
      <div className="controls mt-10">
        <button onClick={handleBack}>Back 10s</button>
        <div
          className="progress-bar h-[10px] rounded-lg bg-[#ccc] "
          onClick={handleProgressClick}
        >
          <div
            className="progress bg-[#4caf50] h-full rounded-lg"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FullCustomPlayer;
