import React from 'react';

const PngButton = ({ handleClick, classNames }) => {
  return (
    <div
      className={`generate--numbers--btn ${classNames}`}
      onClick={handleClick}
    >Generate Phone Numbers</div>
  );
}

export default PngButton;
