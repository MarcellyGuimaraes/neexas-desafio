import Content from './components/Content'
import Logo from './components/Logo'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  NotificationIcon,
  SearchIcon,
  ToggleIcon,
  ConfigIcon,
  PainelIcon,
  SupportIcon,
} from './components/Icons'
import avatar from './assets/img/avatar-admin.png'

function App() {
  const [post, setPost] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isOpen, setIsopen] = useState(false)
  const [filteredList, setFilteredList] = useState([])
  const navText =
    'flex items-center px-6 py-2 mt-4 duration-200 border-l-4 border-blue-600 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100'
  const flexItemCenter = 'flex items-center'

  // Pegando dados do data.json
  useEffect(() => {
    axios.get('data.json').then((response) => {
      setPost(response.data.customers)
    })
  }, [])
  if (!post) return null

  // Filtro de Pesquisa
  const handleSearch = (event) => {
    const query = event.target.value
    setSearchQuery(query)

    const searchList = post.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })

    setFilteredList(searchList)
  }

  const ToggleSidebar = () => {
    setIsopen(!isOpen)
  }

  return (
    <div className="flex h-screen bg-gray-200 font-roboto">
      {/* Sidebar */}
      <div className="flex">
        <div
          className={
            (isOpen == true ? 'block ' : 'hidden ') +
            'fixed inset-0 z-20 transition-opacity bg-black opacity-30 lg:hidden'
          }
          onClick={ToggleSidebar}
        />
        <div
          className={
            (isOpen == true
              ? 'translate-x-0 ease-out'
              : '-translate-x-full ease-in ') +
            'fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-white lg:translate-x-0 lg:static lg:inset-0'
          }
        >
          <div className="flex items-center justify-center mt-8">
            <div className={flexItemCenter}>
              <span className="mx-2 text-2xl font-semibold text-white">
                <Logo />
              </span>
            </div>
          </div>
          <nav className="mt-10">
            <p className={navText}>
              <PainelIcon />
              <span className="mx-4">Painel</span>
            </p>
            <p className={navText}>
              <ConfigIcon />
              <span className="mx-4">Configurações</span>
            </p>
            <p className={navText}>
              <SupportIcon />
              <span className="mx-4">Suporte</span>
            </p>
          </nav>
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4">
          <div className={flexItemCenter}>
            <button
              className="text-gray-500 focus:outline-none lg:hidden"
              onClick={ToggleSidebar}
            >
              <ToggleIcon />
            </button>
            <div className="relative mx-4 lg:mx-0">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon />
              </span>
              <input
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className={flexItemCenter}>
            <button className="flex mx-4 text-gray-600 focus:outline-none">
              <NotificationIcon />
            </button>
            <div className="relative">
              <button className="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
                <img
                  className="object-cover w-full h-full"
                  src={avatar}
                  alt="Your avatar"
                />
              </button>
            </div>
          </div>
        </header>

        {/* Conteúdo */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="flex-1 flex flex-col overflow-hidden">
            <Content />

            <div className="flex flex-col mt-8">
              <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                  <table className="min-w-full">
                    <tbody className="bg-white">
                      {console.log(post)}
                      {console.log(filteredList)}
                      {searchQuery
                        ? filteredList.map((i, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                <div className="flex-shrink-0 w-10 h-10">
                                  <img
                                    className="w-10 h-10 rounded-full"
                                    src={i.profile_image}
                                  />
                                </div>
                              </td>

                              <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                <div className={flexItemCenter}>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium leading-5 text-gray-900">
                                      {i.name}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                <div className="text-sm leading-5 text-gray-900">
                                  {i.email}
                                </div>
                                <div className="text-sm leading-5 text-gray-500">
                                  {i.telefone}
                                </div>
                              </td>
                              <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                <span
                                  className={
                                    'inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full ' +
                                    (i.status === 'adimplente'
                                      ? 'text-green-800 bg-green-100'
                                      : 'text-red-800 bg-red-100')
                                  }
                                >
                                  {i.status}
                                </span>
                              </td>
                            </tr>
                          ))
                        : post.map((i, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                <div className="flex-shrink-0 w-10 h-10">
                                  <img
                                    className="w-10 h-10 rounded-full"
                                    src={i.profile_image}
                                  />
                                </div>
                              </td>

                              <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                <div className={flexItemCenter}>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium leading-5 text-gray-900">
                                      {i.name}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                <div className="text-sm leading-5 text-gray-900">
                                  {i.email}
                                </div>
                                <div className="text-sm leading-5 text-gray-500">
                                  {i.telefone}
                                </div>
                              </td>
                              <td className="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
                                <span
                                  className={
                                    'inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full ' +
                                    (i.status === 'adimplente'
                                      ? 'text-green-800 bg-green-100'
                                      : 'text-red-800 bg-red-100')
                                  }
                                >
                                  {i.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
