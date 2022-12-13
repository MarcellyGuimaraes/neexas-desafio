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
      <div className="mb-10">
        <p className="border-l-4 border-blue-600 pl-2 font-semibold">
          Visão Geral
        </p>
        <div className="flex">
          <div className={cardText}>
            <p>Total de clientes</p>
            <p className={textNumber}>{post.length}</p>
          </div>
          <div className={cardText}>
            <p>Clientes inadimplentes</p>
            <p className={textNumber}>
              {post.filter((post) => post.status == 'inadimplente').length}
            </p>
          </div>
          <div className={cardText}>
            <p>Clientes adimplentes</p>
            <p className={textNumber}>
              {post.filter((post) => post.status == 'adimplente').length}
            </p>
          </div>
          <div className={cardText}>
            <p>Total arrecadado</p>
            <p className={textNumber}>{sum.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
