import styled from 'styled-components';
import { flex } from '../../styles/mixins';

export const FunZoneContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 35px 50px;
  box-sizing: border-box;

  display: grid;  
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding-left: 20px;
  padding-right: 30px;
`;

export const FunZoneItemContainer = styled.div`
  box-sizing: border-box;
  margin: 20px;
`

export const FunZoneInputContainer = styled.div`
  ${flex('center', 'center')};
  width: 210px;
  padding: 0 15px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(229, 232, 235);
  color: rgba(14, 14, 14, 0.75);
`

export const FunZoneInput = styled.input`
  width: 100%;
  height: 45px;
  font-size: 15px;
  border: none;
  outline: none;
  margin-left: 15px
`;