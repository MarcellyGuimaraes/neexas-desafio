import Content from './components/Content'
import Header from './components/Header'
import Navbar from './components/Navbar'
import React, { useEffect, useState } from 'react'
import Logo from './components/Logo'
import axios from 'axios'

function App() {
  const [post, setPost] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredList, setFilteredList] = useState([])

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

  // Classes Tailwind
  const tableContent = 'px-5 py-5 border-b border-gray-200 bg-white text-sm'
  const tableText = 'text-gray-900 whitespace-no-wrap'

  return (
    <div className="h-screen w-screen grid grid-cols-12 auto-rows-max">
      {/* Grid Logo */}
      <Logo />

      {/* Grid Navbar */}
      <div className="border-l-2 col-span-10 row-span-1 p-6 flex justify-between">
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-2/3 pl-10 p-2.5"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
        />

        <Header />
      </div>
      {/* Grid Sidebar */}
      <Navbar />

      {/* Grid Conteúdo */}
      <div className="h-fit bg-slate-200 border-t-2 border-l-2 col-span-10 row-span-5  py-7 px-3">
        <Content />
        <div>
          <p className="border-l-4 border-blue-600 pl-2 mb-8 font-semibold">
            Clientes Cadastrados
          </p>

          <table className="min-w-full border-separate border-spacing-y-2 sleading-normal">
            <tbody>
              {filteredList === []
                ? post.map((i, index) => (
                    <tr key={index}>
                      <td className={tableContent}>
                        <div className="w-12 h-12">
                          <img
                            className="w-full h-full rounded-full"
                            src={i.profile_image}
                            alt=""
                          />
                        </div>
                      </td>
                      <td className={tableContent}>
                        <p className={tableText}>{i.name}</p>
                      </td>
                      <td className={tableContent}>
                        <p className={tableText}>{i.email}</p>
                      </td>
                      <td className={tableContent}>
                        <p className={tableText}>{i.phone}</p>
                      </td>
                      <td className={tableContent}>
                        <p className={tableText}>{i.status}</p>
                      </td>
                    </tr>
                  ))
                : filteredList.map((i, index) => (
                    <tr key={index}>
                      <td className={tableContent}>
                        <div className="w-12 h-12">
                          <img
                            className="w-full h-full rounded-full"
                            src={i.profile_image}
                            alt=""
                          />
                        </div>
                      </td>
                      <td className={tableContent}>
                        <p className={tableText}>{i.name}</p>
                      </td>
                      <td className={tableContent}>
                        <p className={tableText}>{i.email}</p>
                      </td>
                      <td className={tableContent}>
                        <p className={tableText}>{i.phone}</p>
                      </td>
                      <td className={tableContent}>
                        <p className={tableText}>{i.status}</p>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
