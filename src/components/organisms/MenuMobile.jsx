import { NavUl } from '../molecules';
import icoClose from '../../assets/icon-menu-close.svg';

const MenuMobile = ({onChangeCloseClick}) => {
    const itemLi = [{name: 'Home', url: '/'},
                    {name: 'New', url: '/'},
                    {name: 'Popular', url: '/'},
                    {name: 'Trending', url: '/'},
                    {name: 'Categories', url: '/'}
                    ];
    
    const handleMenuCloseClick = () => {
        onChangeCloseClick();
    }    
  return (
    <div className="mobile__menu">
        <aside>
            <div className="menu__aside">
                <div className='aside__ico'>
                    <img src={icoClose} className="ico__close" onClick={handleMenuCloseClick} alt="close menu" />
                </div>
                <div className='aside__list'>
                    <NavUl itemLi={itemLi} />
                </div>
            </div>
        </aside>
    </div>
  )
}

export default MenuMobile