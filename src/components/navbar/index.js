import { Navbar, NavItem, NavLink } from "react-bootstrap";
import "./styles.css";

export default function NavBar(){
    return(
        <Navbar className="navcontent">
            <NavItem>
                <NavLink className="navLink">
                    Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="navLink">
                    Buscar
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="navLink">
                    Pedidos
                </NavLink>
            </NavItem>
            <NavItem className="menu-icon">
                <NavLink>
                    <span class="material-symbols-outlined">
                        menu
                    </span>
                </NavLink>
            </NavItem>
        </Navbar>
    )
}