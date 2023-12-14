import { useState } from "react";
import { OuterCircle, InnerCircle } from "./styled";
import { Clock } from "./Clock";

export const ProgressCircle = () => {
    const [progress, setProgress] = useState(66);

    return(
        <OuterCircle progress={progress}>
            <InnerCircle>
                <Clock/>
            </InnerCircle>
        </OuterCircle>
    );
};