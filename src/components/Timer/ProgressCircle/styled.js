import styled from "styled-components";

export const OuterCircle = styled.div`
    width: 330px;
    height: 330px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.Froly};
    display: grid;
    place-items: center;
`;

export const InnerCircle = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.portGore};
    display: grid;
    place-items: center;
`;