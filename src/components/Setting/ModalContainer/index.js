import React from 'react'
import {
  Container,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalTitle,
  ModalCloseButton,
  Hr,
  InputWrapper,
  FormControl,
  ApplyButton,
} from './styled';
import { FaWindowClose } from 'react-icons/fa';
import { Formik, Form, Field } from 'formik';

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
        <ModalBody>
          <Formik 
            initialValues= {{ pomodoro: "", short: "", long: "" }}
            onSubmit= {() =>  {}}
          >
            <Form>
              <InputWrapper>
                <FormControl>
                  <label htmlFor="pomodoro">Pomodoro</label>
                  <Field name="pomodoro" min="1" max="60" />
                </FormControl>
                <FormControl>
                  <label htmlFor="short">Short Break</label>
                  <Field name="short" min="1" max="60" />
                </FormControl>
                <FormControl>
                  <label htmlFor="long">Long Break</label>
                  <Field name="long" min="1" max="60" />
                </FormControl>
              </InputWrapper>
              <ApplyButton type="submit">
                Apply
              </ApplyButton>
            </Form>
          </Formik> 
        </ModalBody>
      </ModalContent>
    </Container>
  )
}

