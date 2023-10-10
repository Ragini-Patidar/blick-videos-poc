import React from "react";
import { Icon } from "../icon";
import { IconNames } from "../icon/icon.constants";
import { Video, VideoProps } from "../video";

import "./videoOnImage.scss";

export interface VideoOnImageProps {
  background: string;
  videoTitle?: string;
  articleTagLine?: string;
  articleTitle?: string;
  moreVideosLabel?: string;
  videoDetails?: VideoProps;
}

export const VideoOnImage = ({
  background,
  videoTitle,
  articleTagLine,
  articleTitle,
  moreVideosLabel,
  videoDetails,
}: VideoOnImageProps) => {
  return (
    <>
      <div
        className="image-container"
        style={{ backgroundImage: `url(${decodeURI(`"${background}"`)})` }}
      >
        <h3 className="video-title d-flex">{videoTitle}</h3>
        <div className="image-overlay-container d-flex justify-content-center">
          <div className="image-video-overlay">
            <Video {...(videoDetails as VideoProps)} />
            {/* <JWPlayer
              playerId="overlay-video"
              playerScript="https://cdn.jwplayer.com/libraries/mX1HQB9j.js"
              playlist="https://cdn.jwplayer.com/v2/playlists/rjmyTGWl?format=json"
              autostart={false}
            /> */}
          </div>
        </div>
        <div className="text-container">
          <div className="image-on-video-text d-flex align-items-center">
            <div className="play-text d-flex justify-content-center align-items-center">
              <Icon iconName={IconNames.Play} />
              <span>2:34</span>
            </div>
            <p>{articleTagLine}</p>
          </div>
        </div>

        <h4 className="text-title">{articleTitle}</h4>
        <p className="more-videos">{moreVideosLabel}</p>
      </div>
    </>
  );
};
