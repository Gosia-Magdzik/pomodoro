import React from 'react'
import {
  Container,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalTitle,
  ModalCloseButton,
} from './styled';

export const ModalContainer = ({ onClose }) => {
  return (
    <Container>
      <ModalContent
        initial = {{ y: "-80vh", scale: 0}}
        animate = {{ y: 0, scale: 1 }}
        exit = {{ y: "-80vh", scale: 0 }}
        transition={{ duration: 0.4 }}
      >
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalCloseButton onClick={onClose}>ZAMKNIJ</ModalCloseButton>
        </ModalHeader>
        <ModalBody></ModalBody>
      </ModalContent>
    </Container>
  )
}

