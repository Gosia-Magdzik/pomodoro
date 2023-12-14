import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    justify-content: center;
    padding: 1rem 0.8rem;
    background-color: ${({ theme }) => theme.color.portGore};
    border-radius: 8rem;
    height: 5rem;
    margin: 0 auto;
    width: 34rem;
`;

export const Control = styled.button`
    border-radius: 5rem;
    color: ${({ theme }) => theme.color.Periwinkle};
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    padding: 0 1rem;

    ${({ activeControl }) => activeControl && css`
        background-color: ${({ theme }) => theme.color.Froly}; 
    `}
`;