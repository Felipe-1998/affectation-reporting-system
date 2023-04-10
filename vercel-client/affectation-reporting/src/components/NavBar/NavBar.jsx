import style from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/app_logo-r.png";

export const NavBar = () => {
    return (
        <header className={style.container}>
            <div className={style.logo}>
               <Link to='/' ><img src={Logo} alt="Logo" width={190}/></Link>
            </div>
            <div className={style.links}>
                <Link to='/about-us'>Tematica</Link>
                <Link to='/home'>Afectados</Link>
                <Link to='/stats'>Estadisticas</Link>
                <Link to='/map'>Mapa</Link>
            </div>
        </header>
    )
}