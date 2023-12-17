import React from 'react'
import {
  Container,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalTitle,
  ModalCloseButton,
} from './styled'

export const ModalContainer = () => {
  return (
    <Container>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalCloseButton></ModalCloseButton>
        </ModalHeader>
        <ModalBody></ModalBody>
      </ModalContent>
    </Container>
  )
}

