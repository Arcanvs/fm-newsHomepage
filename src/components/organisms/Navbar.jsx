import { useState } from 'react';
import MenuMobile from './MenuMobile';
import NavUl from "../molecules/NavUl";
import logo from '../../assets/logo.svg';
import burger from '../../assets/icon-menu.svg';

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const itemLi = [{name: 'Home', url: '/'},
                    {name: 'New', url: '/'},
                    {name: 'Popular', url: '/'},
                    {name: 'Trending', url: '/'},
                    {name: 'Categories', url: '/'}
                   ];
    
    const handleMenuClick = () => {
        let menu = !showMenu;
        setShowMenu(!showMenu);
        if(menu){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "visible";
        }
    }

    return (
        <>
            { showMenu && <MenuMobile onChangeCloseClick={handleMenuClick} /> }
            <nav className="nav__menu">
                <img src={logo} className="menu__logo W" alt="Logo News HomePage" />
                <img src={burger} className="menu__app" onClick={handleMenuClick} alt="Menu News HomePage" />
                <NavUl itemLi={itemLi} />
            </nav>
        </>
    )
}

export default Navbar
