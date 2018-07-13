import React from 'react';
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField';

const InputText = (props) => {
  return (
    <React.Fragment>
    <TextField 
      required
      type={props.type}
      fullwidth 
      withTrailingIcon={<TextFieldIcon use={props.use} />} 
      placeholder={props.placeholder} />
      <TextFieldHelperText validationMsg>The field is required.</TextFieldHelperText>
    </ React.Fragment>
  );
}

export default InputText;
