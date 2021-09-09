import { useEffect, useState } from "react";

interface ElementProps {
    elementKey: string,
    element: string,
    checked: boolean,
    listChecks: (element: string, checked: boolean) => void
}

function LiSingleComponent(props: ElementProps) {
    let {elementKey, element, checked, listChecks} = props;
    let [isChecked, setIsChecked] = useState(checked)

    function handleClick(){
        setIsChecked(!isChecked);
        listChecks(element, !isChecked)
    }

    useEffect(() => {
        console.log("Effect checked");
        console.log(checked);
        
        setIsChecked(checked);
    }, [checked])

    return (
        <>
            <li key={element} id={`li-${elementKey}`} className="dds__dropdown-list-item dds__form-check" role="menuitemcheckbox" tabIndex={0} aria-checked="false">
                <label className="dds__form-check-label" htmlFor={elementKey}>
                    <input onClick={() => handleClick()} value={element} type="button" id={elementKey} name={`${element}`} tabIndex={-1} className="dds__form-check-input" />
                    <span>
                        {element}{isChecked ? <span> escolhida</span> : ""}
                    </span>
                </label>
            </li>
        </>
    )
}

export default LiSingleComponent;
