import React, { useState, useEffect } from 'react'
import { ClockContainer,
        TimerText,
        StartPauseButton
} from './styled'

export const Clock = () => {

  const [time, setTime] = useState(60)

  useEffect(() => {

    const interval = setInterval(() => {
      setTime((time) => time -1);
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  return (
    <ClockContainer>
        <TimerText>{time}</TimerText>
        <StartPauseButton>PAUSE</StartPauseButton>
    </ClockContainer>
  )
}

