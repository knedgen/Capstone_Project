import {NavLink} from 'react-router-dom'

function Nav() {
    return <>
    <nav id="navbar">
        <ul id="navlist">
            <li id="navitem"><NavLink to="/">Home</NavLink></li>
            <li id="navitem"><NavLink to="/about">About</NavLink></li>
            <li id="navitem"><NavLink to="/menu">Menu</NavLink></li>
            <li id="navitem"><NavLink to="/reservations">Reservations</NavLink></li>
            <li id="navitem"><NavLink to="/order">Order Online</NavLink></li>
            <li id="navitem"><NavLink to="/login">Login</NavLink></li>
        </ul>
    </nav>
    </>
}

export default Nav;