import React from 'react'
import { NotificationIcon } from '../Icons'
import avatar from '../../assets/img/avatar-admin.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex items-center">
      <button className="flex mx-4 text-gray-600 focus:outline-none">
        <NotificationIcon />
      </button>
      <div className="relative">
        <Link to="/perfil">
          <button className="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
            <img
              className="object-cover w-full h-full"
              src={avatar}
              alt="Your avatar"
            />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
