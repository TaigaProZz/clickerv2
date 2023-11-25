import React from 'react';
import './ItemContainer.sass';

const ItemContainer = ({ image, name }) => {
  const style = {width: '50px', height: '50px'}

  return (
    <div className="item-container flex-d">
      <img src={image} style={style}></img>
      <p>{name}</p>
    </div>
  );
};

export default ItemContainer;
