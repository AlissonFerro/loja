import { Navbar, NavItem, NavLink } from "react-bootstrap";
import styles from "./styles.module.scss";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

export default function NavBar(){
    var [menuOpen, setMenuOpen] = useState(false);

    return(
        <>
            <Navbar className={styles.navcontent}>
                <div className={menuOpen? styles.menuOpen : styles.menuClose }>
                    <NavItem>
                        <Link to="/" className={styles.navLink}>
                            Home
                        </Link>
                    </NavItem>
                    <NavItem>
                        <NavLink className={styles.navLink}>
                            Pedidos
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <Link to="/sobre" className={styles.navLink}>
                            Sobre
                        </Link>
                    </NavItem>
                </div>
                <NavItem className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
                    <Link className={styles.menu__icon}>
                        <span className={[styles.menu__icon, " material-symbols-outlined"]}>
                            menu
                        </span>
                    </Link>
                </NavItem>
            </Navbar>
            <Outlet />
        </>
    )
}