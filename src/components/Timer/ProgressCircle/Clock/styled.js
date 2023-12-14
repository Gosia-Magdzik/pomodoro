import styled from "styled-components";

export const ClockContainer = styled.div`
    display: grid;
    place-items: center;
    flex-direction: column;
`

export const TimerText = styled.h3`
    color: ${({ theme }) => theme.color.Periwinkle};
    font-size: 10rem;
    margin: 0;
`

export const StartPauseButton = styled.button`
    text-align: center;
    all: unset;
    color: ${({ theme }) => theme.color.Periwinkle};
    font-size: 3rem;
    letter-spacing: 1rem;
`