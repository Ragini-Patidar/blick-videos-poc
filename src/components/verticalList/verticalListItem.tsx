import "./verticalList.scss";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ListProps } from "../carousel";
import { Video } from "../video";

export interface VerticalListItemProps {
  item: ListProps;
  index: number;
  selectedIndex: number;
  updateItem?: any;
}

export const VerticalListItem = ({
  item,
  index,
  selectedIndex,
  updateItem,
}: VerticalListItemProps) => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (entry?.isIntersecting && inView && !item.isCurrent) {
      updateItem(index);
    }
  }, [inView, entry, index, updateItem, selectedIndex, item.isCurrent]);

  return (
    <li className={`list-item`} ref={ref}>
      {item.isCurrent && (
        <Video
          library="https://cdn.jwplayer.com/libraries/mX1HQB9j.js"
          playlist={item.videoUrl}
          config={{
            autostart: true,
          }}
        />
      )}
    </li>
  );
};
