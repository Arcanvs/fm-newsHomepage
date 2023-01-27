import logo from '../../assets/logo.svg'
import NavUl from "../molecules/NavUl";

export const Navbar = () => {
    const itemLi = [{name: 'Home', url: '/'},
                    {name: 'New', url: '/'},
                    {name: 'Popular', url: '/'},
                    {name: 'Trending', url: '/'},
                    {name: 'Categories', url: '/'}
                   ];
    return (
        <nav className="nav__menu">
            <img src={logo} className="logo W" alt="Logo News HomePage" />
            <NavUl itemLi={itemLi} />
        </nav>
    )
}

export default Navbar
