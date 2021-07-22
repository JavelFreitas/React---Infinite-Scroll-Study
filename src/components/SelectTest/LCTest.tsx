import { Dispatch, SetStateAction, useEffect, useState } from "react";
import LiComponent from "./LiComponent";

interface Props {
    defaultValue: string,
    elements: string[],
    checkedElements: string[]; 
    setCheckedElements: (elements: string[]) => void;
}

function LCTest(props: Props) {
    let { elements, defaultValue, checkedElements, setCheckedElements } = props;
    let [stateCheckedElements, setStateCheckedElements] = useState(checkedElements)
    let [elementList, setElementList] = useState<string[]>(elements);

    useEffect(() => {
        console.log("Hook checked");
        console.log(checkedElements);
        setStateCheckedElements(checkedElements);
        
    }, [checkedElements])

    function filterTextInput(event: React.ChangeEvent<HTMLInputElement>) {
        let searchValue = event.target.value;
        if (searchValue === "" || searchValue === null) {
            setElementList(elements.sort())
        }
        let searchString = searchValue.toLowerCase();
        const filteredCountries = elements.filter(value => {
            const valueMatch = value.toLowerCase();
            return valueMatch.includes(searchString)
        });
        console.log(filteredCountries);
        setElementList(filteredCountries);
    }


    function listChecks(element: string, checked: boolean) {
        console.log(element);
        console.log(checked);
        if (checked === true) {
            stateCheckedElements.push(element);
            stateCheckedElements.sort();
            setStateCheckedElements(stateCheckedElements);
            setCheckedElements(stateCheckedElements);
        } else {
            stateCheckedElements.splice(stateCheckedElements.indexOf(element), 1);
            setStateCheckedElements(stateCheckedElements);
            setCheckedElements(stateCheckedElements);
        }
    }

    function isChecked(element: string): boolean {
        if (stateCheckedElements.includes(element)) {
            return true;
        }
        return false;
    }

    return (
        <>
            <ul>
                <div className="dds__countryInput-area">
                    <input type="text" onChange={event => filterTextInput(event)} name={`${defaultValue}_filterTextInput`} id={`${defaultValue}_filterTextInput`} placeholder="Search Options" />
                    <input type="button" value="Filter" id={`${defaultValue}_filterButton`} />
                </div>
                {elementList.map(element => {
                    let elementKey = `${defaultValue}_${element}`;

                    return (
                        <div key={element}>
                            <LiComponent elementKey={elementKey} element={element} checked={isChecked(element)} listChecks={listChecks} />
                        </div>
                    )
                })}
            </ul>
        </>
    )
}

export default LCTest;
