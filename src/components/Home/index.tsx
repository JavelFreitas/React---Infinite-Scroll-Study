import './style.css';

import LCTest from "../SelectTest/LCTest"
import LayoutDev from '../LayoutDev'
import SingleElement from "../SingleSelectTest/SingleElement"
import { useEffect, useState } from 'react';

function Home() {
    let defaultValue = "Paises";
    let paises = ["Brasil", "Canada", "India"];
    let [paisesClickados, setPaisesClickados] = useState<string[]>([]);

    let estadoDefaultValue = "Estado";
    let estados = ["Ceará", "Rio de Janeiro", "Mato Grosso do Sul"]
    let [estadosClikados, setEstadosClickados] = useState<string[]>([]);

    let ruaDefaultValue = "Rua";
    let ruas = ["Rua Almeida", "Rua Agenor", "Rua Principal"]
    let [ruaEscolhida, setRuaEscolhida] = useState("");

    useEffect(() => {
        console.log("UseEffect Home");
        console.log(paisesClickados);
        
    }, [paisesClickados])

    useEffect(() => {
        console.log("algo mudou no Home");
    },)

    function updateCheckedElements(elements: string[]){
        console.log("Paises Clickados");
        console.log(paisesClickados);
        setPaisesClickados(elements)
    }

    function updateEstadoCheckedElements(elements: string[]){
        console.log("Estados Clickados");
        console.log(estadosClikados);
        setEstadosClickados(elements)
    }

    function updateRuaCheckedElements(element: string){
        console.log("Rua Escolhida");
        console.log(element);
        setRuaEscolhida(element)
    }

    function clearChecks(){
        setPaisesClickados([])
        setEstadosClickados([])
        setRuaEscolhida("")
    }

    function getSelectedOptions(){
        let allSelected = {
            paises: paisesClickados,
            estados: estadosClikados,
            rua: ruaEscolhida
        }
        return JSON.stringify(allSelected);
    }

    return (
        <>
            {/* <LayoutDev/> */}
            {/* <DropDownTest defaultValue={defaultValue} elements={paises} /> */}
            {/* <SelectTest defaultValue={defaultValue} elements={paises} /> */}
            <LCTest defaultValue={defaultValue} elements={paises} checkedElements={paisesClickados} setCheckedElements={elements => setPaisesClickados(elements)} />
            <LCTest defaultValue={estadoDefaultValue} elements={estados} checkedElements={estadosClikados} setCheckedElements={updateEstadoCheckedElements} />
            <SingleElement defaultValue={ruaDefaultValue} elements={ruas} checkedElement={ruaEscolhida} setCheckedElement={updateRuaCheckedElements} />
            <input type="button" value="clear" onClick={clearChecks}/>
            <input type="button" value="Add to Download List" onClick={() => alert(getSelectedOptions())}/>
        </>
    )
}

export default Home
