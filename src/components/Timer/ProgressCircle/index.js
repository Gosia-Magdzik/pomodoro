import { useState } from "react";
import { OuterCircle, InnerCircle } from "./styled";

export const ProgressCircle = () => {
    const [progress, setProgress] = useState(15);

    return(
        <OuterCircle progress={progress}>
            <InnerCircle/>
        </OuterCircle>
    );
};