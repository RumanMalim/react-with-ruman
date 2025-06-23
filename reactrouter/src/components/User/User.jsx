import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}= useParams()
  return (
    <div><h2 className="text-center text-2xl text-gray-900 font-bold md:text-4xl">
                         User: {userid}</h2></div>
  )
}

export default User