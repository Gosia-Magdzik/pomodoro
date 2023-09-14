import styled from "styled-components";

export const Wrapper = styled.div`
    width: 360px;
    height: 360px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.portGore};
    display: grid;
    place-items: center;
`;