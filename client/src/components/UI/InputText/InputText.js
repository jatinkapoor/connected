import React from 'react';
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField';

const InputText = (props) => {
  return (
    <TextField 
      fullwidth 
      withTrailingIcon={<TextFieldIcon use="close" />} 
      label={props.value} />
  );
}

export default InputText;
