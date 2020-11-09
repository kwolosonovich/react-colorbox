import React from 'react';

const Box = ({ id, width, height, bgColor, handleRemove }) => {
  const remove = () => handleRemove(id);
  // return color box and delete btn
  return (
    <div>
      <div
        style={{
          width: `${width}em`,
          height: `${height}em`,
          backgroundColor: `${bgColor}`,
        }}
      />
      <button onClick={remove}>X</button>
    </div>
  );
};

export default Box; 