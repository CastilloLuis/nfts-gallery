import styled from 'styled-components';
import { flex } from '../../../styles/mixins';

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const InvalidWalletExtension = styled.div`
  ${flex('center', 'center', 'column')};
  text-align: center;
  img {
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
  }
`

export const WalletProviderBox = styled.div`
  ${flex('center', 'space-between')};
  width: 100%;
  height: 80px;
  padding: 15px 25px;
  border-radius: 15px;
  box-sizing: border-box;
  box-shadow: 0 7px 29px 0 rgba(0, 0, 0, 0.07);
  border: 1px solid transparent;
  &:hover {
    cursor: pointer;
    box-shadow: none;
    border-color: ${({ theme }) => theme.colors.black} !important;
    i {
      opacity: 1;
    }
  }
  div {
    ${flex('center', 'flex-start')};
    img {
      width: 50px;
      height: 50px;
    }
    span {
      font-size: 20px;
      font-weight: 700;
      margin-left: 15px;
    }
  }
  i {
    transition: all 0.15s ease-in-out;
    font-size: 30px;
    opacity: 0;
  }
`;
