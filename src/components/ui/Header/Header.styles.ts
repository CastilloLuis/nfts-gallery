import styled from 'styled-components';
import { flex } from '../../../styles/mixins';

export const HeaderContainer = styled.div`
  ${flex('center', 'space-between')}
  width: 100%;
  height: 80px;
  background-color: ${({ theme: { colors } }) => `${colors.primary}`};
  padding: 0 15px;
  box-sizing: border-box;
`;

export const NavbarLinkContainer = styled.div`
  ${flex('center', 'center')}
`;

export const HeaderText = styled.span`
  opacity: 0;
`;

export const StyledLink = styled.div<{active: boolean}>`
  ${flex('center', 'center')}
  font-size: 14px;
  border-bottom: 2px solid transparent;
  color: ${({ theme: { colors } }) => `${colors.gray1}`};
  font-family: Roboto;
  font-weight: 600;
  width: fit-content;
  margin: 0 10px;
  padding-bottom: 5px;
  transition: all 0.2s ease-in-out;
  ${props => props.active && `
    border-color: #FFF;
    color: #FFF;
  `}
  &:hover {
    cursor: pointer;
    color: #FFF;
    border-color: #FFF;
  }
`;
