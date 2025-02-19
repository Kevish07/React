import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

export default function Github() {

  const data = useLoaderData()

  // const [data,setData] = useState([])

  // useEffect(() => {
  //   fetch('https://api.github.com/users/kevish07')
  //   .then(response=>response.json())
  //   .then(data=>{
  //     console.log(data)
  //     setData(data)
  //   })
  // },[])
  

  return (
    <div className='bg-gray-600 text-center mr-4 text-white p-4 text-3xl '>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  )
}

export const githubLoader = async ()=>{
  const response = await fetch('https://api.github.com/users/kevish07')
  return response.json()
}