import styled from "styled-components";

export const OuterCircle = styled.div`
    width: 35rem;
    height: 35rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: conic-gradient(
        ${({ theme }) => theme.color.Froly} ${({ progress }) => progress}%,
        transparent ${({ progress }) => progress}%
    );
`;

export const InnerCircle = styled.div`
    width: 32rem;
    height: 32rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.color.portGore};
    display: grid;
    place-items: center;
    padding-top: 5rem;
`;