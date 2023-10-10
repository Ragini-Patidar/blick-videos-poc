import React, { useEffect, useRef, useState } from "react";
import { Video, VideoProps } from "../video";
import "./videoOnVideo.scss";

export interface VideoOnVideoProps {
  backgroundVideoDetails: VideoProps;
  foregroundVideoDetails: VideoProps;
}

export const VideoOnVideo = ({
  backgroundVideoDetails,
  foregroundVideoDetails,
}: VideoOnVideoProps) => {
  const backgroundVideoRef = useRef<HTMLDivElement>(null);
  const [isPlaying, updateIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (backgroundVideoRef?.current?.querySelector("video")) {
      isPlaying
        ? (
            backgroundVideoRef.current.querySelector(
              "video"
            ) as HTMLVideoElement
          ).play()
        : (
            backgroundVideoRef.current.querySelector(
              "video"
            ) as HTMLVideoElement
          ).pause();
    }
  }, [isPlaying]);

  const handlePlay = () => {
    !isPlaying && updateIsPlaying(true);
  };

  const handlePause = () => {
    isPlaying && updateIsPlaying(false);
  };

  const handleSeek = (currentTime: number) => {
    // Not working. Need to check
    if (backgroundVideoRef?.current?.querySelector("video")) {
      (
        backgroundVideoRef.current.querySelector("video") as HTMLVideoElement
      ).currentTime = currentTime;
    }
  };

  const handleReplay = () => {
    if (backgroundVideoRef?.current?.querySelector("video")) {
      (
        backgroundVideoRef.current.querySelector("video") as HTMLVideoElement
      ).currentTime = 0;
    }
    handlePlay();
  };

  return (
    <div className="parent-container">
      <div className="background-video-overlay" />
      <div className="background-video" id="background-video-container">
        <Video {...backgroundVideoDetails} ref={backgroundVideoRef} />
      </div>

      <div className="overlay-container d-flex align-items-center justify-content-center">
        <div className="video-overlay">
          <Video
            {...foregroundVideoDetails}
            onPlayHandler={handlePlay}
            onSeekHandler={handleSeek}
            onPauseHandler={handlePause}
            onReplayHandler={handleReplay}
          />
        </div>
      </div>
    </div>
  );
};
