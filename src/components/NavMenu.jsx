import React from 'react'
import NavItem from './NavItem'

const NavMenu = ({ items }) => {
  return (
    <div className='nav-menu'>
      <img></img>
      {items.map((item, index) => {
        return <NavItem key={index} icon={item.icon} title={item.title} url={item.url} />
      })}
    </div>
  )
}

export default NavMenu
