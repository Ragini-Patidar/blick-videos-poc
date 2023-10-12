import React, { useEffect, useState } from 'react';
import { Carousel } from '../carousel';
import { VerticalList } from '../verticalList';
import { blickBitesMocks } from '../../mocks/components/blickBites';

export const BlickBites = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sortedList, setSortedList] = useState(blickBitesMocks);

  const handleCaouselClick = (index: number) => {
    setIsClicked(true);
    setSelectedIndex(index);
  }

  useEffect(() => {
    const videoList = [...blickBitesMocks];
    const selectedItem = videoList[selectedIndex];
    videoList.splice(selectedIndex, 1);
    videoList.unshift(selectedItem);

    setSortedList(videoList);
  }, [selectedIndex]);

  return (
    <div>
      {!isClicked ? (
        <Carousel list={blickBitesMocks} handleVideoClick={handleCaouselClick}/>
      ) : (
        <VerticalList list={sortedList} handleCloseClick={() => setIsClicked(false)}/>
      )}
    </div>
  );
}
