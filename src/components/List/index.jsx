import React from 'react'

const List = ({ post }) => {
  return (
    <div>
      <ul>
        {post.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
