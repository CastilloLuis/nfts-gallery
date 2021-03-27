import styled from 'styled-components';

import { flex } from '../../../styles/mixins';
import { ButtonProps } from './Button';

export const ButtonContainer = styled.button<ButtonProps>`
  ${flex('center', 'center')};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 15px;
  &:hover {
    box-shadow: none;
    cursor: pointer;
    opacity: 0.8;
  }
  box-sizing: border-box;

  ${
    props => props.outline && `
      border: 1px solid #FFF !important;
      background: transparent;
    `
  }
`

export const ButtonText = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
`
