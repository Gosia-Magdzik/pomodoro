import React from 'react'
import {
  Container,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalTitle,
  ModalCloseButton,
  Hr
} from './styled';
import { FaWindowClose } from 'react-icons/fa'

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
          <ModalTitle>Settings</ModalTitle>
          <ModalCloseButton onClick={onClose}>
            <FaWindowClose/>
          </ModalCloseButton>
        </ModalHeader>
        <Hr/>
        <ModalBody></ModalBody>
      </ModalContent>
    </Container>
  )
}

