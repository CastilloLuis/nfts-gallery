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
`;

export const ArtistIcon = styled.div`
  ${flex('flex-start', 'center')};
  width: 100%;
  img {
    width: 120px;
    margin-right: 15px;
  }
  span { line-height: 25px; }
`;
