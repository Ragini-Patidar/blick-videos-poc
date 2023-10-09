import React, { useEffect, useRef, useState } from "react";
import JWPlayer from "react-jw-player";
import "./App.css";
import backgound from '../src/background.png';
import itemImage from '../src/itemImage.png';
import play from '../src/play.svg';
import circle from '../src/circle.svg';

export default function App() {
  const backgroundVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedOption, setSelectedOption] = useState("video-on-image");

  useEffect(() => {
    if(backgroundVideoRef.current) {
      const backgroundVideo = backgroundVideoRef.current.querySelector('video');

      if (backgroundVideo) {
        backgroundVideo.muted = true;

        isPlaying ? backgroundVideo.play() : backgroundVideo.pause();
      }
    }
  }, [isPlaying])

  return (
    <div className="App">
      <button
        onClick={() => setSelectedOption("video-on-image")}
        style={{
          backgroundColor: selectedOption === "video-on-image" ? 'lightblue' : 'white',
        }}
      >
        Video on Image
      </button>
      <button
        onClick={() => setSelectedOption("video-on-video")}
        style={{
          backgroundColor: selectedOption === "video-on-video" ? 'lightblue' : 'white',
        }}
      >
        Video on video
      </button>
      <button
        onClick={() => setSelectedOption("image-on-video")}
        style={{
          backgroundColor: selectedOption === "image-on-video" ? 'lightblue' : 'white',
        }}
      >
        Image on video
      </button>
      { selectedOption === "video-on-video" && (
        <div>
        <h2>Video on Video</h2>
       <div className="parent-container">
     <div className="background-video-overlay" />
       <div
         className="background-video"
         id="background-video-container"
         ref={backgroundVideoRef}
       >
         <JWPlayer
           playerId="background-video"
           playerScript="https://cdn.jwplayer.com/libraries/mX1HQB9j.js"
           playlist="https://cdn.jwplayer.com/v2/playlists/rjmyTGWl?format=json"
           autostart={false}
           controls={false}
         />
       </div>

       <div className="overlay-container">
         <div className="video-overlay">
           <JWPlayer
             playerId="overlay-video"
             playerScript="https://cdn.jwplayer.com/libraries/mX1HQB9j.js"
             playlist="https://cdn.jwplayer.com/v2/playlists/rjmyTGWl?format=json"
             autostart={false}
             onPlay={() => setIsPlaying(true)}
             onPause={() => setIsPlaying(false)}
             onResume={() => setIsPlaying(true)}
           />
         </div>
       </div>
     </div>
      </div>
      )}
     {selectedOption === "video-on-image" && (
      <div>
        <h2>Video on Image</h2>
        <div className="image-container" style={{backgroundImage: `url(${backgound})`}}>
          <div className="video-title">VIDEO FOR YOU</div>
        <div className="image-overlay-container">
          <div className="image-video-overlay">
            <JWPlayer
                playerId="overlay-video"
                playerScript="https://cdn.jwplayer.com/libraries/mX1HQB9j.js"
                playlist="https://cdn.jwplayer.com/v2/playlists/rjmyTGWl?format=json"
                autostart={false}
              />
          </div>
       </div>
       <div className="text-container">
       <div className="image-on-video-text">
        <div className="play-text">
        <img src={play} alt=""/>
          <span>
            2:34
          </span>
        </div>
        <div>Trauriges Video geht viral â€“ Rassismus-Vorwurf gegen Verband</div>
       </div>
       </div>

       <div className="text-title">
        Diese Siegerehrung schockt die Turn-Szene
       </div>
       <div className="more-videos">
        More videos
        <span></span>
       </div>
        </div>
      </div>
     )}

     {selectedOption === "image-on-video" && (
      <div>
        <h2>Image on Video</h2>
        <div className="image-on-video">
        <div className="image-video-container">
        <JWPlayer
           playerId="background-video"
           playerScript="https://cdn.jwplayer.com/libraries/mX1HQB9j.js"
           playlist="https://cdn.jwplayer.com/v2/playlists/xLUk360S?format=json"
           isAutoPlay={true}
           isMuted={true}
         />
        </div>
        <div className="image-on-video-content">
          <div>
            <span className="now">
            <img src={circle} alt=""/>
              Now
            </span>
          </div>
          <div className="small-image-container">
            <img src={itemImage} alt=""/>
          </div>
          <div className="container-border">
            <div className="image-on-video-text">
              <div className="play-text">
              <img src={play} alt=""/>
              <span>2:34</span>
            </div>
             <div>Waldbrand</div>
            </div>
            <div className="text-title">
              FÃ¼nf LÃ¶schhelikopter bekÃ¤mpfen den Waldbrand in Bitsch 
            </div>
          </div>
        </div>
        </div>
      </div>
     )}
    </div>
  );
}