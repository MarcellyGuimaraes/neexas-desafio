import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Content = () => {
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get('data.json').then((response) => {
      setPost(response.data.customers)
    })
  }, [])
  if (!post) return null
  // Total Arrecadado
  const amount = post.map((item) => item.subscription_amount)
  var sum = 0

  for (var i = 0; i < amount.length; i++) {
    sum += amount[i]
  }

  // CONSTANTES DE CLASSES
  const cardText = 'h-fit w-2/12 bg-white p-5 m-3'
  const textNumber = 'font-bold text-blue-600 text-xl'

  return (
    <div>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div>
            <h3 className="text-3xl font-medium text-gray-700">Visão geral</h3>
            <div className="mt-4">
              <div className="flex flex-wrap -mx-6">
                <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                  <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                    <div className="mx-5">
                      <h4 className="text-2xl font-semibold text-gray-700">
                        Total de clientes
                      </h4>
                      <div className={textNumber}>{post.length}</div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                  <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                    <div className="mx-5">
                      <h4 className="text-2xl font-semibold text-gray-700">
                        Clientes inadimplentes
                      </h4>
                      <div className={textNumber}>
                        {
                          post.filter((post) => post.status == 'inadimplente')
                            .length
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                  <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                    <div className="mx-5">
                      <h4 className="text-2xl font-semibold text-gray-700">
                        Clientes adimplentes
                      </h4>
                      <div className={textNumber}>
                        {
                          post.filter((post) => post.status == 'adimplente')
                            .length
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-3">
                  <div className="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                    <div className="mx-5">
                      <h4 className="text-2xl font-semibold text-gray-700">
                        Total arrecadado
                      </h4>
                      <div className={textNumber}>{sum.toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8" />
            <div className="flex flex-col mt-8">
              <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Content
