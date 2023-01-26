import React from 'react'

const NavLi = ({name, url}) => {
  return (
    <li>
        <a href={url}>{name}</a>
    </li>
  )
}

export default NavLi