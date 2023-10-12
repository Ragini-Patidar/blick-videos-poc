import './verticalList.scss';
import React from 'react';
import { VerticalListItem } from './verticalListItem';
import { ListProps } from '../carousel';

export interface VideoListProps {
  list: ListProps[];
  handleCloseClick: () => void;
}

export const VerticalList = ({list, handleCloseClick} : VideoListProps) => (
  <div className='vertical-list'>
    <button onClick={() => handleCloseClick()}>Close</button>
    <ul>
      {list?.map((item, index) => (
        <VerticalListItem item={item} index={index} key={index} />
      ))}
    </ul>
  </div>
);
