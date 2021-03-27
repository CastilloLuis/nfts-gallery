import styled from 'styled-components';
import { flex } from '../../styles/mixins';

export const GalleryContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 35px 50px;
  box-sizing: border-box;

  display: grid;  
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding-left: 20px;
  padding-right: 30px;
`;

export const GalleryItemContainer = styled.div`
  box-sizing: border-box;
  margin: 20px;
`;
