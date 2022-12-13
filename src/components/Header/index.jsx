import React from 'react'
import avatar from '../../assets/img/avatar-admin.png'
import { NotificationIcon } from '../Icons'

const Header = () => {
  return (
    <div>
      <div className="flex items-center">
        <NotificationIcon />
        <img className="mx-8" src={avatar} />
      </div>
    </div>
  )
}

export default Header
