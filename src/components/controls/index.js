import { Wrapper, Control } from "./styled";
import { useContext } from "react";
import { StateContext } from "../StateProvider";

export const Controls = () => {
    const {activeControl, setActiveControl} = useContext(StateContext);

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