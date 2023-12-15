import React, { useState, useEffect } from 'react'
import { ClockContainer,
        TimerText,
        StartPauseButton
} from './styled'

export const Clock = () => {

  const [time, setTime] = useState(10)

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
  }

  return (
    <ClockContainer>
        <TimerText>{time}</TimerText>
        <StartPauseButton>PAUSE</StartPauseButton>
    </ClockContainer>
  )
}

