import { Navbar, NavItem, NavLink } from "react-bootstrap";
import styles from "./styles.module.scss";

export default function NavBar(){
    return(
        <Navbar className={styles.navcontent}>
            <NavItem>
                <NavLink className={styles.navLink}>
                    Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={styles.navLink}>
                    Buscar
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={styles.navLink}>
                    Pedidos
                </NavLink>
            </NavItem>
            <NavItem className={styles.menu}>
                <NavLink>
                    <span class={[styles.menu__icon, " material-symbols-outlined"]}>
                        menu
                    </span>
                </NavLink>
            </NavItem>
        </Navbar>
    )
}