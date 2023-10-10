import React from "react";
import { Icon } from "../icon";
import { IconNames } from "../icon/icon.constants";
import { Video, VideoProps } from "../video";

import "./imageOnVideo.scss";

export interface ImageOnVideoProps {
  timelineText?: string;
  titleText?: string;
  articleTagLine?: string;
  foregroundImage: string;
  videoDetails?: VideoProps;
}

export const ImageOnVideo = ({
  timelineText,
  titleText,
  articleTagLine,
  foregroundImage,
  videoDetails,
}: ImageOnVideoProps) => {
  return (
    <div className="image-on-video">
      <div className="image-video-container">
        <Video {...(videoDetails as VideoProps)} />
      </div>
      <div className="image-on-video-content">
        <div className="d-flex justify-content-center align-items-center">
          <span className="now">
            <Icon iconName={IconNames.Circle} />
            {timelineText}
          </span>
        </div>
        <div className="small-image-container">
          <img src={foregroundImage} alt="foreground" />
        </div>
        <div className="container-border">
          <div className="image-on-video-text d-flex align-items-center">
            <div className="play-text">
              <Icon iconName={IconNames.Play} />
              <span>2:34</span>
            </div>
            <p>{articleTagLine}</p>
          </div>
          <div className="text-title">{titleText}</div>
        </div>
      </div>
    </div>
  );
};
