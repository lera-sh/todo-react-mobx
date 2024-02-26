import React, { forwardRef } from 'react';
import InputText from './InputText';

const InputCheckbox = forwardRef((props, ref) => {
  return (
    <li className="flex items-center list-none">
      <input checked={props.checked} id="checkbox" onChange={props.onChange} type="checkbox" />
      <InputText
        ref={ref}
        checked={props.checked}
        onChange={props.onUpdate}
        onInput={props.onInput}
        value={props.text}
      />
    </li>
  );
});

export default InputCheckbox;
