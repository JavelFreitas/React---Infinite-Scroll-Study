import { ChangeEventHandler, EventHandler, useState } from "react";

interface Props {
    defaultValue: string,
    elements: string[],
}

function DropDownTest(props: Props) {
    let { elements, defaultValue } = props;
    let [paisesClickados, setPaisesClickados] = useState([]);
    let [checked, setChecked] = useState(false);
    
    function listaClickados(event: React.ChangeEvent<HTMLInputElement>){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : false;
        console.log(value);
        setChecked(value);
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
                            <li key={elements.indexOf(element)} className="dds__dropdown-list-item dds__form-check" role="menuitemcheckbox" tabIndex={0} aria-checked="false">
                                <label className="dds__form-check-label" htmlFor={elementKey}>
                                    <input checked={checked} value={element} type="checkbox" id={elementKey} name={`${element}`} onChange={listaClickados} tabIndex={-1} className="dds__form-check-input test_check" />
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
