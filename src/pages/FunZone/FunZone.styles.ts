import styled from 'styled-components';
import { flex } from '../../styles/mixins';

export const FunZoneContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 35px 50px;
  box-sizing: border-box;

  display: grid;  
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  padding-left: 20px;
  padding-right: 30px;
`;

export const FunZoneModalLabel = styled.label`
  width: 210px;
  font-size: 12px;
`

export const FunZoneItemContainer = styled.div`
  box-sizing: border-box;
  margin: 20px;
`

export const FunZoneInputContainer = styled.div<{error?: boolean}>`
  ${flex('center', 'center')};
  width: 210px;
  padding: 0 15px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  border: 1px solid ${props => props.error ? 'red' : 'rgb(229, 232, 235)'};
  color: rgba(14, 14, 14, 0.75);
`

export const FunZoneInput = styled.input`
  width: 100%;
  height: 45px;
  font-size: 15px;
  border: none;
  outline: none;
  margin-left: 15px;
  ${props => props.disabled && `background-color: transparent !important;`}
`;

export const TotalNFTSoldContainer = styled.div`
  ${flex('center', 'center', 'column')};
  width: 100%;
  color: #FFFFFF;
  margin-top: 25px;
  span {
    font-size: 30px;
  }
`;
