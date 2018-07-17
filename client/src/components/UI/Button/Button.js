import React from 'react';
import { Button, ButtonIcon } from 'rmwc/Button';

const MyButton = (props) => {
  return (
    <Button
      className={props.className}
      raised>
        <ButtonIcon 
          use={props.use} />
        {props.name}
      </Button>
  )
}

export default MyButton;