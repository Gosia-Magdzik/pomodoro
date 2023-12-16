import styled from "styled-components";

export const ClockContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

export const ResetButton = styled(StartPauseButton)``

export const Img = styled.img`
    width: 3rem;
    margin-top: 1rem;
`