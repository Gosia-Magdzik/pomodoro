import React, { useState, useEffect } from 'react'
import { ClockContainer,
        TimerText,
        StartPauseButton
} from './styled'

export const Clock = () => {

  const [time, setTime] = useState(777)

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time -1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [time])

  const getTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  }

  return (
    <ClockContainer>
        <TimerText>{getTime(time)}</TimerText>
        <StartPauseButton>PAUSE</StartPauseButton>
    </ClockContainer>
  )
}

