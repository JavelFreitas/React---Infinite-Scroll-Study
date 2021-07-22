import { useEffect, useState } from "react";
import LiComponent from './LiComponent'

interface IElements {
    name: string,
    checked: boolean
}

interface Props {
    defaultValue: string,
    elements: string[],
}



function SelectTest(props: Props) {
    let { elements, defaultValue } = props;
    let [elementList, setElementList] = useState<string[]>(elements);
    let [paisesClickados, setPaisesClickados] = useState<string[]>([]);
    let paisesObj: { [k: string]: boolean } = {}

    let [paisesBooleanos, setPaisesBooleanos] = useState(paisesObj)
    let i = 0;
    // for (let element in elements) {
    //     paisesBooleanos.push();
    //     paisesBooleanos[i].checked = false;
    //     i++;
    // }

    elements.forEach(pais => paisesBooleanos[pais] = false); 

    useEffect(() => {
        for (let pais in paisesBooleanos) {
            let target = document.getElementById(`${defaultValue}_${pais}`) as HTMLInputElement;
            console.log(paisesBooleanos[pais]);
        }

    }, [paisesBooleanos])

    function listaClickados(elementKey: string) {
        const target = document.getElementById(elementKey) as HTMLInputElement;
        const attributeValue = target?.getAttribute("value");
        if (attributeValue === null || attributeValue === undefined) { alert("Something Went Wrong"); return; };

        // setTimeout(function () { target.checked = !target.checked }, 0);
        console.log(target.checked);
        target.checked = !target.checked

        for (let index = 0; index < paisesClickados.length; index++) {
            if (paisesClickados[index] === attributeValue) {
                let novaLista = (paisesClickados.filter((value: string) => value !== attributeValue)).sort()
                paisesBooleanos[`${attributeValue}`] = false;
                setPaisesBooleanos(paisesBooleanos)
                console.log(paisesBooleanos);
                setPaisesClickados(novaLista);
                return;
            }
        }

        paisesClickados.push(attributeValue)
        setPaisesClickados(paisesClickados.sort());
        console.log(target.value);
        console.log(isChecked(target.value));

        paisesBooleanos[`${attributeValue}`] = true
        setPaisesBooleanos(paisesBooleanos)
        console.log(paisesBooleanos);

        return;
    }

    async function getChecked() {
        let target = (document.getElementById("scales") as HTMLInputElement);
        console.log(target.checked);
        await setTimeout(function () { target.checked = !target.checked }, 1000);

    }

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

    function isChecked(element: string): boolean | undefined {
        if (paisesClickados.includes(element)) {
            if (element === null) { alert("Não existe"); return; }
            return true;
        }
        return false;
    }

    return (
        <>
            <ul>
                <div className="dds__countryInput-area">
                    <input type="text" onChange={event => filterTextInput(event)} name="countryFilterTextInput" id="countryFilterTextInput" placeholder="Search Options" />
                    <input type="button" value="countryFilterButton" id="countryFilterButton" />
                </div>
                {elementList.map(element => {
                    let elementKey = `${defaultValue}_${element}`;
                    console.log(paisesBooleanos[element]);
                    
                    return (
                        <li key={elements.indexOf(element)} id={`li-${elementKey}`} className="dds__dropdown-list-item dds__form-check" role="menuitemcheckbox" tabIndex={0} aria-checked="false">
                            <label className="dds__form-check-label" htmlFor={elementKey}>
                                <input value={element} type="checkbox" id={elementKey} name={`${element}`} onChange={event => listaClickados(elementKey)} tabIndex={-1} className="dds__form-check-input" />
                                <span>
                                    {element}
                                </span>
                            </label>
                        </li>
                    )
                })}
            </ul>
            {/* {elementList.map(element => {
                let elementKey = `${defaultValue}_${element}`;
                return (
                    <li key={elements.indexOf(element)} id={`li-${elementKey}`} className="dds__dropdown-list-item dds__form-check" role="menuitemcheckbox" tabIndex={0} aria-checked="false">
                        <label className="dds__form-check-label" htmlFor={elementKey}>
                            <input checked={isChecked(elementKey)} value={element} type="checkbox" id={elementKey} name={`${element}`} onChange={event => listaClickados(elementKey)} tabIndex={-1} className="dds__form-check-input" />
                            <span>
                                {element}
                            </span>
                        </label>
                    </li>
                )
            })} */}
        </>
    )
}

export default SelectTest;
