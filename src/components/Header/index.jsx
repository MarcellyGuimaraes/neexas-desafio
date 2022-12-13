import React from 'react'
import notification from '../../assets/img/Notification.png'
import avatar from '../../assets/img/avatar-admin.png'

const Header = () => {
  return (
    <div className="border-l-2 col-span-10 row-span-1 p-6 flex justify-between">
      <input
        type="text"
        id="simple-search"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-2/3 pl-10 p-2.5"
        placeholder="Search"
        required
      />

      <div className="flex items-center">
        <img className="w-6 h-9 mx-8" src={notification} />
        <img src={avatar} />
      </div>
    </div>
  )
}

export default Header
