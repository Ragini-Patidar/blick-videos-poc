import './verticalList.scss';
import React, { useEffect } from 'react';
import JWPlayer from '@jwplayer/jwplayer-react';
import { useInView } from 'react-intersection-observer';
import { ListProps } from '../carousel';

export interface VerticalListItemProps {
  item: ListProps;
  index: number;
}

export const VerticalListItem = ({item, index}: VerticalListItemProps) => {
  console.log(item, index);

  const  { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: false
  });

  useEffect(() => {
    if(entry?.isIntersecting && inView) {
      const videoElement = document.querySelector("video");
      if(videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
        videoElement.autoplay= true;
      }
    }
  }, [inView, entry]);

  return (
    <li className={`list-item`} key={index} ref={ref} id={`list-item-${index}`}>
      <JWPlayer
        playerId={`video-${index}`}
        library="https://cdn.jwplayer.com/libraries/mX1HQB9j.js"
        playlist={item.videoUrl}
        autostart={true}
        controls={true}
        repeat={true}
        viewability={true}
      />
    </li>
  );
}
