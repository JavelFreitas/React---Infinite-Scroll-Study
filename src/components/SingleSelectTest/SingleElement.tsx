import { Dispatch, SetStateAction, useEffect, useState } from "react";
import LiSingleComponent from "./LiSingleComponent"

interface Props {
    defaultValue: string,
    elements: string[],
    checkedElement: string; 
    setCheckedElement: (elements: string) => void;
}

function SingleElement(props: Props) {
    let { elements, defaultValue, checkedElement, setCheckedElement } = props;
    let [stateCheckedElement, setStateCheckedElement] = useState(checkedElement)
    let [elementList, setElementList] = useState<string[]>(elements.sort());

    useEffect(() => {
        console.log("Hook checked");
        console.log(checkedElement);
        setStateCheckedElement(checkedElement);
        
    }, [checkedElement])

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
            stateCheckedElement = element;
            setStateCheckedElement(stateCheckedElement);
            setCheckedElement(stateCheckedElement);
        } else {
            setStateCheckedElement("");
            setCheckedElement("");
        }
    }

    function isChecked(element: string): boolean {
        if (stateCheckedElement === element) {
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
                            <LiSingleComponent elementKey={elementKey} element={element} checked={isChecked(element)} listChecks={listChecks} />
                        </div>
                    )
                })}
                {stateCheckedElement}
            </ul>
        </>
    )
}

export default SingleElement;
