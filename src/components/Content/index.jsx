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

  const clientesInad = post.filter((post) => post.status == 'overdue').length
  const clientesAdim = post.filter((post) => post.status == 'paying').length

  // Total Arrecadado
  const amount = post.map((item) => item.subscription_amount)
  var sum = 0

  for (var i = 0; i < amount.length; i++) {
    sum += amount[i]
  }

  return (
    <div>
      <div>
        <p>Visão Geral</p>
        <div className="flex">
          <div className="w-40 bg-white m-3">{totalClientes}</div>
          <div className="w-40 bg-white m-3">{clientesInad}</div>
          <div className="w-40 bg-white m-3">{clientesAdim}</div>
          <div className="w-40 bg-white m-3">{sum.toFixed(2)}</div>
        </div>
      </div>
      <div className="m-3">
        <p>Clientes Cadastrados</p>
        <ul>
          {post.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Content
