import { any, number } from 'prop-types';
import React from 'react';
import styled, { keyframes } from 'styled-components';
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

interface FadeInProps {
  duration?: number;
  delay?: number;
  children?: any;
  style?: any;
}

const FadeIn: React.FC<FadeInProps> = ({
  duration = 300,
  delay = 0,
  children,
  ...rest
}) => {
  return (
    <Wrapper
      {...rest}
      style={{
        ...(rest.style || {}),
        animationDuration: duration + 'ms',
        animationDelay: delay + 'ms',
      }}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`;

export default FadeIn;