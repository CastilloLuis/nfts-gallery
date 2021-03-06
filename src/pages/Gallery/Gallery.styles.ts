import styled from 'styled-components';
import { flex } from '../../styles/mixins';

export const GalleryContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 35px 50px;
  box-sizing: border-box;

  display: grid;  
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  padding-left: 20px;
  padding-right: 30px;
`;

export const GalleryItemContainer = styled.div`
  box-sizing: border-box;
  margin: 20px;
`;

export const ButtonContainer = styled.div`
  ${flex('center', 'center', 'column')};
  text-align: center;
`

export const FeesLabel = styled.span`
  font-size: 12px; margin-top: 10px;
`;

export const TipButtons = styled.div`
  ${flex('center', 'center')};
  div { width: 20px; }
`

export const LoadingText = styled.div`
  width: 100%;
  text-align: center;
  color: #FFF;
  box-sizing: border-box;
  padding: 50px;
`;
