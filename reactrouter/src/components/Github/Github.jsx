import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white
    p-4 text-3xl'>Github followers :{data.followers}
    <img src={data.avatar_url} alt="git picture"/>
    </div>
  )
}

export default Github
export const githubInfoLoder = async ()=>{
  const Response=await  fetch('https://api.github.com/users/RumanMalim')
 return Response.json()
}