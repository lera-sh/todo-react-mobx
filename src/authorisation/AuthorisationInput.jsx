import React from 'react';
import InputText from '../components/InputText';

function AuthorisationInput(props) {
  return (
    <div className="flex items-center p-2">
      <label className="w-20" id={props.id}>
        {props.text}
      </label>
      <InputText
        htmlFor={props.id}
        name={props.id}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.id}
        value={props.value}
      />
    </div>
  );
}

export default AuthorisationInput;
