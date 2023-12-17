import { OuterCircle, InnerCircle } from "./styled";
import { Clock } from "./Clock";
import { StateContext } from "../../StateProvider";
import { useContext, useEffect } from "react";

export const ProgressCircle = () => {

    const {progress, setProgress, time, initTime} = useContext(StateContext);

    useEffect(() => {
        setProgress(time / (initTime / 100));
    }, [setProgress, time])
    
    return(
        <OuterCircle progress={progress}>
            <InnerCircle>
                <Clock/>
            </InnerCircle>
        </OuterCircle>
    );
};