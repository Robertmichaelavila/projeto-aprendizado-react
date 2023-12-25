import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/empresa">Empresa</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </div>
    )
}

export default NavBar