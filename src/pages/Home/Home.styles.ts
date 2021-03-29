import styled from 'styled-components';
import { flex } from '../../styles/mixins';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const HomeLetter = styled.div`
  padding: 25px 50px;
  color: #fff;
  font-family: 'Roboto';
`
export const ArtistIcon = styled.div`
  ${flex('center', 'center')};
  width: 100%;
  margin: 10px;
  img {
    width: 150px;
  }
`