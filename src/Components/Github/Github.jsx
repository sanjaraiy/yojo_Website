import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
   
    const data=useLoaderData()
     //**************1 way to fetch API call*************************/
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //   fetch('https://api.github.com/users/sanjaraiy')
    //   .then(response=>response.json())
    //   .then(data=>{
    //     console.log(data);
    //     setData(data);
    //   })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>Github followers : {data.followers}
    <img  src={data.avatar_url} alt="Git picture" width={300}></img>
    </div>
  )
}

export default Github

//**************2 way to fetch API call*************************/
export const githubInfoLoader = async ()=>{
 const response= await  fetch('https://api.github.com/users/sanjaraiy')
  return response.json()
}