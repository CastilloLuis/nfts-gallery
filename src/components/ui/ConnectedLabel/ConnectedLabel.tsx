import React from 'react';
import styled from 'styled-components';
import { flex } from '../../../styles/mixins';

const ConnectedLabelContainer = styled.div`
  ${flex('center', 'center')};
  div {
    width: 8px;
    height: 8px;
    background: green;
    border-radius: 50%;
  }
  span {
    color: #fff;
    margin-left: 10px;
  }
`

const ConnectedLabel: React.FC<{}> = () => {
  return (
    <ConnectedLabelContainer>
      <div></div>
      <span>Connected to MetaMask</span>
    </ConnectedLabelContainer>
  )
}

export default ConnectedLabel;
