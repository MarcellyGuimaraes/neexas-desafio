import React from 'react'
import icon1 from '../../assets/img/icon 1.png'
import icon2 from '../../assets/img/icon 2.png'

const Navbar = () => {
  return (
    <div className="flex flex-col space-y-10">
      <div className="">
        <img src={icon1} alt="" /> Painel
      </div>
      <p>
        <img src={icon2} alt="" /> Configurações
      </p>
      <p>Suporte</p>
    </div>
  )
}

export default Navbar
