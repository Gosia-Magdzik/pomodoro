import { Wrapper, Control } from "./styled";
import { useState } from "react";

export const Controls = () => {
    return(
        <Wrapper>
            {
                ["pomodoro", "short break", "long break"].map((control, id) => (
                    <Control key={id}>
                        {control}
                    </Control>
                ))
            }
        </Wrapper>
    );
};