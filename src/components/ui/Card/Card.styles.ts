import styled from 'styled-components';
import { flex } from '../../../styles/mixins';

export const CardContainer = styled.div<{showTip: boolean}>`
  width: 280px;
  height: ${props => props.showTip ? '380px' : '320px'};
  background: background-color: ${({ theme: { colors } }) => `${colors.primary}`};
  border-radius: 5px;
  box-shadow: 0 7px 29px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.1s ease-in-out;
  border: 1px solid #232527;
  &:hover {
    box-shadow: none;
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export const TipButtonContainer = styled.div`
  ${flex('center', 'center')};
  width: 100%;
`

export const NFTInfoContainer = styled.div`
  ${flex('center', 'space-between')};
  height: 95px;
  padding: 0 15px;
  box-sizing: border-box;
  border-top: 1px solid #232527;
`;

export const NFTImageContainer = styled.div`
  ${flex('center', 'center')};
  height: 225px;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const NFTInfo = styled.div`
  ${flex('flex-start', 'center', 'column')};
`;

export const NFTPrice = styled.div`
  ${flex('flex-end', 'center', 'column')};
`;

export const NFTInfoTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  font-size: 16px;
  width: 130px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const NFTInfoTotalLeft = styled.span`
  color: ${({ theme }) => theme.colors.gray1};
  font-weight: 400;
  font-size: 12px;
`;

export const NFTPriceTitle = styled.span`
  color: ${({ theme }) => theme.colors.gray1};
  font-weight: 400;
  font-size: 14px;
`;

export const NFTPriceInfo = styled.div`
  ${flex('center', 'center')};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 16px;
  i {
    margin: 0 10px;
  }
`;
