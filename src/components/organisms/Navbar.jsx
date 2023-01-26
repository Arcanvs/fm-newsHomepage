import NavUl from "../molecules/NavUl";

export const Navbar = () => {
    const itemLi = [{name: 'Home', url: '/'},
                    {name: 'New', url: '/'},
                    {name: 'Popular', url: '/'},
                    {name: 'Trending', url: '/'},
                    {name: 'Categories', url: '/'}
                   ];
    return (
        <div>
            logo
            <NavUl itemLi={itemLi} />
        </div>
    )
}

export default Navbar
