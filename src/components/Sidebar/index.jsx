import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ConfigIcon, PainelIcon, SupportIcon, ToggleIcon } from '../Icons'
import Logo from '../Logo'
const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const itensClass =
    'flex rounded-md p-2 cursor-pointer hover:bg-blue-50 text-gray-800 text-sm items-center gap-x-4 mt-9 mt-2 bg-gray-100'

  return (
    <div className="flex">
      <div
        className={` ${
          open ? 'w-72' : 'w-20 '
        } bg-white h-screen p-5 pt-8 relative duration-300`}
      >
        <button
          className={`absolute -right-4 top-9 w-9 h-9 cursor-pointer rounded-full border-2 border-slate-300 bg-slate-100 hover:bg-blue-50`}
          onClick={() => setOpen(!open)}
        >
          <ToggleIcon />
        </button>
        <div className="flex gap-x-4 items-center">
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && 'scale-0'
            }`}
          >
            <Logo />
          </h1>
        </div>
        <ul className="pt-6">
          <Link to="/">
            <li className={itensClass}>
              <PainelIcon />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                Painel
              </span>
            </li>
          </Link>
          <Link to="/configuracoes">
            <li className={itensClass}>
              <ConfigIcon />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                Configurações
              </span>
            </li>
          </Link>
          <Link to="/suporte">
            <li className={itensClass}>
              <SupportIcon />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                Suporte
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}
export default Sidebar
