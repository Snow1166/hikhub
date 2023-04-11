import style from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className={style.navbar}>
            {/* <h2 className={style.navtitle} >Навигация</h2> */}
            <nav>
                <ul className={style.navList}>
                    <li className={style.navItem}>
                        <NavLink to={"/profile"} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }> Профиль
                        </NavLink></li>
                    <li className={style.navItem}>
                        <NavLink to={"/monitoring"} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>
                            Мониторинг
                        </NavLink></li>
                    <li className={style.navItem}>
                        <NavLink to={"/setting-device"} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>
                            Управление устройствами
                        </NavLink></li>
                    <li className={style.navItem}>
                        <NavLink to={"/setting"} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>
                            Настройки
                        </NavLink></li>
                    <li className={style.navItem} >
                        <NavLink to={"/"} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>
                            пустой
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;