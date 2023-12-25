import styled from "styled-components";
import { motion } from "framer-motion"

export const Container = styled.div`
    position: absolute;
    display: flex;
    place-items: center;
    align-items: center;
    justify-content: center;
    height: 100vh;
    z-index: 150;
`

export const ModalContent = styled(motion.div)`
    width: 36rem;
    height: 25rem;
    background-color: ${({ theme }) => theme.color.portGore};;
    border-radius: 25px;

    @media (max-width: 550px) {
        width: 90%;
        padding: 1rem;
    }
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ModalBody = styled.div`

`

export const ModalTitle = styled.h1`
    margin-left: 2rem;
`

export const ModalCloseButton = styled.button`
    justify-self: end;
    all: unset;
    margin: 1rem;
    font-size: 3rem;
`

export const Hr = styled.hr`
    border: 1px solid ${({ theme }) => theme.color.Periwinkle};

`

export const InputWrapper = styled.div`
    display: flex;
    padding: 1rem;
    gap: 2rem;
`

export const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    label {
        font-size: 1.5rem;
    }
    input {
        width: 100%;
        font-size: 2rem;
        padding: 0.5rem;
        border-radius: 1rem;
        border: 1px solid black;
        background-color: #ead8fc;
    }
`