import styled from "styled-components";

export const Wrapper = styled.div`
    width: 360px;
    height: 360px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    box-shadow: 12px 26px 107px 18px #626572;
    background-color: conic-gradient(
            ${(props) => props.theme.color.portGore},
            ${(props) => props.theme.color.Froly} 150deg,
            ${(props) => props.theme.color.portGore}
        );
`;