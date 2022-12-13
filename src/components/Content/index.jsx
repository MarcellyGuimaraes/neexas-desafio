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

  const totalClientes = post.length

  const clientesInad = post.filter((post) => post.status == 'inadimplente')
    .length
  const clientesAdim = post.filter((post) => post.status == 'adimplente').length

  // Total Arrecadado
  const amount = post.map((item) => item.subscription_amount)
  var sum = 0

  for (var i = 0; i < amount.length; i++) {
    sum += amount[i]
  }

  // CONSTANTES DE CLASSES
  const cardText = 'w-fit h-fit w-2/12 bg-white p-5 m-3'
  const textNumber = 'font-bold text-blue-600 text-xl'

  return (
    <div className="h-fit bg-slate-200 border-t-2 border-l-2 col-span-10 row-span-5  pt-7 pl-3">
      <div className="mb-10">
        <p className="border-l-4 border-blue-600 pl-2 font-semibold">
          Visão Geral
        </p>
        <div className="flex">
          <div className={cardText}>
            <p>Total de clientes</p>
            <p className={textNumber}>{totalClientes}</p>
          </div>
          <div className={cardText}>
            <p>Clientes inadimplentes</p>{' '}
            <p className={textNumber}>{clientesInad}</p>
          </div>
          <div className={cardText}>
            <p>Clientes adimplentes</p>{' '}
            <p className={textNumber}>{clientesAdim}</p>
          </div>
          <div className={cardText}>
            <p>Total arrecadado</p>{' '}
            <p className={textNumber}>{sum.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="m-3">
        <p className="border-l-4 border-blue-600 pl-2 font-semibold">
          Clientes Cadastrados
        </p>
        <ul>
          {post.map((item) => (
            <li
              className="bg-white p-5 m-2 flex justify-around"
              key={item.name}
            >
              <img class="rounded-full" src={item.profile_image} alt="" />
              <span>{item.name}</span>
              <span>{item.email}</span>
              <span>{item.phone}</span>
              <span>{item.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Content
