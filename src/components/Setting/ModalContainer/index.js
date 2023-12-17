import React from 'react'
import {
  Container,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalTitle,
  ModalCloseButton,
} from './styled'

export const ModalContainer = ({ onClose }) => {
  return (
    <Container>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalCloseButton onClick={onClose}>ZAMKNIJ</ModalCloseButton>
        </ModalHeader>
        <ModalBody></ModalBody>
      </ModalContent>
    </Container>
  )
}

