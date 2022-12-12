import React from 'react'
import icon1 from '../../assets/img/icon 1.png'
import icon2 from '../../assets/img/icon 2.png'

const Navbar = () => {
  return (
    <div className="h-full space-y-10 m-4">
      <p className="flex items-center">
        <img src={icon1} className="mr-4" alt="" /> Painel
      </p>
      <p className="flex">
        <img src={icon2} className="mr-4" alt="" /> Configurações
      </p>
      <div className="border-t-2">
        <p className="bottom-0 fixed p-3 ">Suporte</p>
      </div>
    </div>
  )
}

export default Navbar
