import * as React from 'react';

import {
  ModalContainer,
  ModalBox,
  ModalTitle,
  IconClose
} from './Modal.styles';
import FadeIn from '../../animations/FadeIn';

interface ModalProps {
  title?: string;
  width?: string;
  height?: string;
  children: any;
  onClose: () => void;
}

const Modal: React.FunctionComponent<ModalProps> = (props) => {
  return (
    <ModalContainer>
      <FadeIn delay={1} duration={500}>
        <ModalBox width={props.width} height={props.height}>
          <IconClose onClick={props.onClose}>×</IconClose>
          {
            props.title && (
              <ModalTitle>{props.title}</ModalTitle>
            )
          }
          {props.children}
        </ModalBox>
      </FadeIn>
    </ModalContainer>
  );
}

export default Modal;
