import './style.css';

// import MultiSelectDropDown from '../MultiSelectDropDown'
import DropDownTest from '../DropDownTest'
// import { Container } from './styles';
function Home() {
    let paises = ["Brasil", "Canada", "India"];
    let defaultValue = "Paises";
    return (
        <>
            <DropDownTest defaultValue={defaultValue} elements={paises}/>
        </>
    )
}

export default Home
