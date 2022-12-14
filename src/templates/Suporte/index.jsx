import React from 'react'
import Content from '../../components/Content'
import Sidebar from '../../components/Sidebar'

const Suporte = () => {
  return (
    <div className="flex h-screen bg-gray-200 font-roboto">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div className="flex-1 flex flex-col overflow-hidden">
          <Content />

          <div className="flex flex-col mt-8">
            <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="text-center inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                Esse é o Suporte.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Suporte
