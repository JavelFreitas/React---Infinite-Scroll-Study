import { Dispatch, SetStateAction, useEffect, useState } from "react";
import LiComponent from "./LiComponent";

interface Props {
    defaultValue: string,
    checkedElements: string[]; 
}

function ListChecked(props: Props) {
    let { defaultValue, checkedElements } = props;
    let [stateCheckedElements, setStateCheckedElements] = useState(checkedElements)

    useEffect(() => {
        console.log("algo mudou no ListChecked");
    },)

    useEffect(() => {
        console.log("List Checked");
        console.log(checkedElements);
        setStateCheckedElements(checkedElements);
        
    }, [checkedElements])

    return (
        <>
            <span>{stateCheckedElements.length === 0
                    ? `${defaultValue}`
                    : stateCheckedElements.join(", ")
            }</span>
        </>
    )
}

export default ListChecked;
