import React from 'react';
import { Button } from 'rmwc/Button';

const MyButton = (props) => {
  return (
    <Button
      raised>
        {props.name}
      </Button>
  )
}

export default MyButton;