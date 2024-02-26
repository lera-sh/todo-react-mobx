import React, { forwardRef } from 'react';
import clsx from 'clsx';

const InputText = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      className={clsx('bg-gray-600 p-1 m-1', { 'line-through': props.checked })}
      name={props.name}
      onChange={props.onChange}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
    />
  );
});

export default InputText;
