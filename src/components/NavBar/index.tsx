import { Link } from 'react-router-dom'
import ButtonTheme from '../ButtonTheme/index'
import './styles.css'


function NavBar(){
    return (
        <nav>
            <ul className="nav-links">
                <Link className='nav-items' to='/'>Home</Link>
                <Link className='nav-items' to='/counter'>Counter</Link>
                <Link className='nav-items' to='/githubPagination'>Pagination</Link>
                <ButtonTheme/>
            </ul>
        </nav>
    )
}

export default NavBar;