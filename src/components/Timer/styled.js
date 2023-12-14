import styled from "styled-components";

export const Wrapper = styled.div`
    width: 36rem;
    height: 36rem;
    margin: 3rem auto;
    border-radius: 50%;
    display: grid;
    place-items: center;
    box-shadow: 6px 13px 56px 9px #56595D;
    background-color: conic-gradient(
            ${(props) => props.theme.color.portGore},
            ${(props) => props.theme.color.Froly} 150deg,
            ${(props) => props.theme.color.portGore}
        );
`;