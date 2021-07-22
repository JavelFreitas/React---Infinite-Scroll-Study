import { useState } from "react";

interface Props {
    defaultValue: string,
    elements: string[],
}

function DropDownTest(props: Props) {
    let { elements, defaultValue } = props;
    let [paisesClickados, setPaisesClickados] = useState<string[]>([]);
    
    function listaClickados(elementKey: string){
        const target = document.getElementById(elementKey);
        const attributeValue = target?.getAttribute("value");
        if (attributeValue === null || attributeValue === undefined) {alert("Something Went Wrong"); return;};

        for(let index = 0; index<paisesClickados.length; index++){
            if(paisesClickados[index] === attributeValue){
                let novaLista = (paisesClickados.filter((value: string) => value !== attributeValue)).sort()
                setPaisesClickados(novaLista);
                return;
            }
        }
        
        paisesClickados.push(attributeValue)
        setPaisesClickados(paisesClickados.sort());
        return;
    }

    function test (event: React.ChangeEvent<HTMLInputElement>){
        console.log(event);
        let targetEvent = event.target;
        console.log(targetEvent);
        console.log(targetEvent.checked);
        let target = (document.getElementById("Paises_Brasil") as HTMLInputElement);
        console.log("target" + target);
        console.log(target.checked);
    }

    return (
        <>
            <div className="dds__btn-dropdown dds__multi-select" tabIndex={-1}>
                <button className="dds__btn dds__btn-secondary dds__text-truncate dds__d-flex" data-toggle="dds__dropdown" data-target="#buttonMultiSelectDropdown" tabIndex={0} aria-expanded="false" aria-controls="buttonDropdownPrimary">
                    <span className="dds__text-truncate dds__mb-0">{defaultValue}</span>
                    <svg className="dds__arrow-tri-solid-right dds__align-self-center dds__ml-1" viewBox="0 0 32 32" focusable="false" aria-hidden="true">
                        <title>dds__arrow-tri-solid-right</title>
                        <path d="M21.997 16.002l-11.994-12.356v24.708z"></path>
                    </svg>
                </button>
                <ul id={`${defaultValue}DropDown`} className="dds__button-dropdown-container dds__collapse" role="menu">
                    {elements.map(element => {
                        let elementKey = `${defaultValue}_${element}`;
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
            </div>
        </>
    )
}

export default DropDownTest;
