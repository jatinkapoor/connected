import React from 'react';
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField';
import './InputText.css';

const InputText = (props) => {
  return (
    <React.Fragment>
    <TextField
      className="text"
      name={props.name}
      type={props.type}
      fullwidth
      withTrailingIcon={<TextFieldIcon use={props.use} />}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onchange}/>
      <TextFieldHelperText validationMsg>The field is required.</TextFieldHelperText>
    </ React.Fragment>
  );
}

export default InputText;
