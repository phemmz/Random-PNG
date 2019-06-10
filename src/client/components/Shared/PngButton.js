import React from 'react';

const PngButton = ({ handleClick, classNames, btnText, loading = false }) => {
  return (
    <button
      className={`generate--numbers--btn ${classNames}`}
      onClick={handleClick}
      disabled={loading}
    >{btnText}</button>
  );
}

export default PngButton;
