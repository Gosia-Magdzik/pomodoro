import React, { createContext, useEffect, useState } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {

    const [pomodoro, setPomodoro] = useState(21 * 60);
    const [shortBreak, setShortBreak] = useState(7 * 60);
    const [longBreak, setLongBreak] = useState(33 * 60);

    const [initTime, setInitTime] = useState(0);

    const [activeControl, setActiveControl] = useState(0);
    const [progress, setProgress] = useState(12);
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {

        switch(activeControl) {

            case 0:
                setTime(pomodoro);
                setInitTime(pomodoro);
                break;
            case 1:
                setTime(shortBreak);
                setInitTime(shortBreak);
                break;
            case 2:
                setTime(longBreak);
                setInitTime(longBreak);
                break;
            default:
                break;
        }

    }, [activeControl, pomodoro, shortBreak, longBreak]);

    return (
    <StateContext.Provider
        value={{ 
            activeControl, 
            setActiveControl, 
            progress, 
            setProgress,
            time,
            setTime,
            isActive,
            setIsActive, 
        }}
    >
        {children}
    </StateContext.Provider>
  )
}

