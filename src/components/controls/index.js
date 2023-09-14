import { Wrapper, Control } from "./styled";
import { useState } from "react";

export const Controls = () => {
    const [activeControl, setActiveControl] = useState(0);

    const handleClick = (index) => {
        setActiveControl(index)
    };

    return(
        <Wrapper>
            {
                ["pomodoro", "short break", "long break"].map((control, id) => (
                    <Control 
                        key= { id }
                        activeControl= {activeControl === id}
                        onClick= { () => handleClick(id) }
                    >
                        {control}
                    </Control>
                ))
            }
        </Wrapper>
    );
};