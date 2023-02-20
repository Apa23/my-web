import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavItem = ({ icon, title, url }) => {
  return (
    <div className='nav-item'>
      <a href={url}>
        <FontAwesomeIcon icon={icon} />
        <p >{title}</p>
      </a>
    </div>
  )
}

export default NavItem
