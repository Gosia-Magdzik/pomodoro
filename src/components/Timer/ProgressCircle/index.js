import { OuterCircle, InnerCircle } from "./styled";
import { Clock } from "./Clock";
import { StateContext } from "../../StateProvider";
import { useContext } from "react";

export const ProgressCircle = () => {
    const {progress, setProgress} = useContext(StateContext);

    return(
        <OuterCircle progress={progress}>
            <InnerCircle>
                <Clock/>
            </InnerCircle>
        </OuterCircle>
    );
};