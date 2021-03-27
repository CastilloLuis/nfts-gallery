import styled from 'styled-components';

import { flex } from '../../../styles/mixins';
import { ButtonProps } from './Button';

export const ButtonContainer = styled.button<ButtonProps>`
  ${flex('center', 'center')};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 15px;
  box-sizing: border-box;
  transition: all 0.1s ease-in-out;
  span {
    color: ${({ dark, theme }) => dark ? theme.colors.black : theme.colors.white};
  }
  ${
    props => props.outline && `
      border: 1px solid ${props.dark ? '#000' : '#FFF'} !important;
      background: transparent;
      &:hover {
        cursor: pointer;
        background: ${props.dark ? props.theme.colors.black : props.theme.colors.white};
        span {
          color: ${props.dark ? props.theme.colors.white : props.theme.colors.black};
        }
      }
    `
  }
`

export const ButtonText = styled.span<{dark: boolean}>`
  font-size: 14px;
`
