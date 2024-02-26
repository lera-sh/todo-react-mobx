import React from 'react';

const Button = (props) => {
  return (
    <button
      className="bg-gray-950 flex px-2 py-1"
      disabled={props.disabled}
      onClick={props.onClick}
      type="button">
      {props.text}
      <img src={props.img} />
    </button>
  );
};

export default Button;
