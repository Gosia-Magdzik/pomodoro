import React from 'react';
import { Backdrop } from '../Backdrop';
import { ModalContainer } from '../ModalContainer';

export const Modal = ({isOpen, onClose}) => {
  return (
    <>
      { isOpen && (
        <>
        <Backdrop />
        <ModalContainer isOpen={isOpen} onClose={onClose} />
        </>
      )
      }
    </>
  )
}

 