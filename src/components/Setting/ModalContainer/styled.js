import styled from "styled-components";
import { motion } from "framer-motion"

export const Container = styled.div`
    position: absolute;
    display: flex;
    place-items: center;
    align-items: center;
    justify-content: center;
    height: 100vh;
    //width: 100vh;
    z-index: 150;
`

export const ModalContent = styled(motion.div)`
    width: 36rem;
    height: 25rem;
    background-color: teal;
    border-radius: 25px;
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
