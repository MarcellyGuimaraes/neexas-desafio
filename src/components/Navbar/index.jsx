import React from 'react'
import icon1 from '../../assets/img/icon 1.png'
import icon2 from '../../assets/img/icon 2.png'

const Navbar = () => {
  return (
    <div className="border-t-2 col-span-2 row-span-5 row-start-2 flex flex-col h-full p-3">
      <div className="flex-1">
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          <li className="rounded-sm">
            <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Painel</span>
            </a>
          </li>
          <li className="rounded-sm">
            <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <span>Configurações</span>
            </a>
          </li>
          <li className="rounded-sm">
            <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span>Suporte</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
