import styled from 'styled-components';
import { flex } from '../../../styles/mixins';

export const FooterContainer = styled.div`
  ${flex('center', 'center')};
  width: 100%;
  height: 150px;
  padding: 15px;
  box-sizing: border-box;
  position: relative;
  border-top: 1px solid #222;
  background-color: ${({ theme: { colors } }) => `${colors.primary}`};
`;

export const FooterLinks = styled.div`
  ${flex('center', 'center')};
  a {
    margin: 0 10px;
    font-size: 30px;
    color: ${({ theme: { colors } }) => `${colors.gray1}`};
    &:hover {
      cursor: pointer;
      color: ${({ theme: { colors } }) => `${colors.white}`};
    }
  }
`;
