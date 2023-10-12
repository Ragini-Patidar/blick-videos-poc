import React, { useEffect, useState } from 'react';
import { Carousel } from '../carousel';
import { VerticalList } from '../verticalList';
import { blickBitesMocks } from '../../mocks/components/blickBites';

export const BlickBites = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [sortedList, setSortedList] = useState(blickBitesMocks);

  const handleCaouselClick = (index: number) => {
    setIsClicked(true);
    setSelectedIndex(index);
  }

  useEffect(() => {
    const videoList = [...blickBitesMocks];
    let selectedItem = videoList[selectedIndex];
    videoList.splice(selectedIndex, 1);
    videoList.unshift(selectedItem);

    const updatedList = videoList?.map((item, index) => ({
      ...item,
      isCurrent: index === 0
    }))

    setSortedList(updatedList);
  }, [selectedIndex]); 

  const updateItem = (index: number) => {
    const tempList= [...sortedList]?.map((li) => ({ ...li, isCurrent: false}));

    tempList[index].isCurrent= true;
    setSortedList(tempList);
  }

  return (
    <div>
      {!isClicked ? (
        <Carousel list={blickBitesMocks} handleVideoClick={handleCaouselClick}/>
      ) : (
        <VerticalList list={sortedList} handleCloseClick={() => setIsClicked(false)} selectedIndex={selectedIndex} updateItem={updateItem}/>
      )}
    </div>
  );
}
