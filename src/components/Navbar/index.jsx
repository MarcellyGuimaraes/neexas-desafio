import React from 'react'
import { ConfigIcon, PainelIcon, SupportIcon } from '../Icons'

const Navbar = () => {
  return (
    <div className="border-t-2 col-span-2 row-span-5 row-start-2 flex flex-col h-full p-3">
      <ul className="pt-2 pb-4 space-y-1 text-sm">
        <li className="rounded-sm">
          <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
            <PainelIcon />
            <span>Painel</span>
          </a>
        </li>
        <li className="rounded-sm">
          <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
            <ConfigIcon />
            <span>Configurações</span>
          </a>
        </li>
        <li className="rounded-sm">
          <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
            <SupportIcon />
            <span>Suporte</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
