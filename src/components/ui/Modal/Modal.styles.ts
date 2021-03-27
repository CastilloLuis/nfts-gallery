import styled, { keyframes } from 'styled-components';
import { flex } from '../../../styles/mixins';
export const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999999999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #afafaf85;
  box-sizing: border-box;
`;

export const ModalBox = styled.div<{ width: string, height: string }>`
  ${flex('center', 'space-around', 'column')};
  width: ${props => props?.width || '450px'};
  height: ${props => props?.height || '300px'};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  padding: 15px;
  position: relative;
`;

export const ModalTitle = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 30px;
  font-weight: 700;
`;

export const IconClose = styled.span`
  font-size: 30px;
  position: absolute;
  top: 20px;
  right: 40px;
  cursor: pointer;
`;
