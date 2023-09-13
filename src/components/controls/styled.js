import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 6px;
    background-color: ${({ theme }) => theme.color.portGore};
    border-radius: 50px;
    height: 70px;
    margin: 50px 0;
    width: 350px;
`;

export const Control = styled.button`
    border-radius: 50px;
    color: ${({ theme }) => theme.color.Periwinkle};
    background-color: transparent;
    border: none;
    font-size: 15px;
    padding: 0 15px;
    
    &:hover {
        background-color: #f87070;
    }
`;