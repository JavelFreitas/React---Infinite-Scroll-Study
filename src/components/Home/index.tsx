import './style.css';

// import MultiSelectDropDown from '../MultiSelectDropDown'
import DropDownTest from '../DropDownTest'
// import { Container } from './styles';
import SelectTest from '../SelectTest'
import LCTest from "../SelectTest/LCTest"
import LayoutDev from '../LayoutDev'
import TodoList from '../TodoList'
import LiComponent from '../SelectTest/LiComponent'
import { useEffect, useState } from 'react';




function Home() {
    let defaultValue = "Paises";
    let paises = ["Brasil", "Canada", "India"];
    let [paisesClickados, setPaisesClickados] = useState<string[]>([]);

    let estadoDefaultValue = "Estado";
    let estados = ["Ceará", "Rio de Janeiro", "Mato Grosso do Sul"]
    let [estadosClikados, setEstadosClickados] = useState<string[]>([]);

    useEffect(() => {
        console.log("UseEffect Home");
        console.log(paisesClickados);
        
    }, [paisesClickados])

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

    function clearChecks(){
        setPaisesClickados([])
        setEstadosClickados([])
    }

    return (
        <>
            {/* <LayoutDev/> */}
            {/* <DropDownTest defaultValue={defaultValue} elements={paises} /> */}
            {/* <SelectTest defaultValue={defaultValue} elements={paises} /> */}
            <LCTest defaultValue={defaultValue} elements={paises} checkedElements={paisesClickados} setCheckedElements={updateCheckedElements} />
            <LCTest defaultValue={estadoDefaultValue} elements={estados} checkedElements={estadosClikados} setCheckedElements={updateEstadoCheckedElements} />
            {/* <LiComponent defaultValue={defaultValue} element={paises[0]} checked={true} listChecks={listChecks} /> */}
            <input type="button" value="clear" onClick={clearChecks}/>
        </>
    )
}

export default Home
