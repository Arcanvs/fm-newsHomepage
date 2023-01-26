import NavLi from "../atoms/NavLi"

const NavUl = ({itemLi}) => {
    return (
        <ul>
            {
                itemLi.map((li, index) => (
                    <NavLi key={index} name={li.name} url={li.url} />
                ))
            }
        </ul>
    )
}

export default NavUl