import React, { useEffect, useContext } from 'react'
import { ClockContainer,
        TimerText,
        StartPauseButton
} from './styled'
import { StateContext } from '../../../StateProvider';

export const Clock = () => {

  const {time, setTime, isActive, setIsActive} = useContext(StateContext);

  useEffect(() => {
    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time -1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time, isActive]);

  const toggleClock = () => {
    setIsActive(!isActive);
  };

  const getTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  }

  return (
    <ClockContainer>
        <TimerText>{getTime(time)}</TimerText>
        <StartPauseButton onClick={toggleClock}>
          {isActive ? "PAUSE" : "START"}
        </StartPauseButton>
        <ResetButton>
          
        </ResetButton>
    </ClockContainer>
  )
}

