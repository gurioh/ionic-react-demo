import React from 'react';


type Cup = {
  type: string;
  size: string;
  etc?: string;
  onClick: (type: string) => void
};

const Cups = ({ type, size, etc, onClick}: Cup) => {
  const handleClick = () => onClick(type);
  return (
      <div>
        Type is {type} and size is {size}
        {etc && <p>{etc}</p>}
        <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
      </div>
    );
  }

Cups.defaultProps = {
  name: 'hoon',
  mark: '!'
};

export default Cups;
