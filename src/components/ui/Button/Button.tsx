import * as React from 'react';

import {
  ButtonContainer,
  ButtonText,
} from './Button.styles';

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  loading?: boolean;
  width?: string;
  height?: string;
  outline?: boolean;
  dark?: boolean;
  onClick: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonContainer {...props}>
      <ButtonText dark={props.dark}>{props.label}</ButtonText>
    </ButtonContainer>
  )
}

export default Button;
