import React, { useEffect } from 'react'

export default function Alert({msg,type,removeAlert,list}) {

  useEffect(()=>{
    const timeout=setTimeout(()=>{
      removeAlert();
    },3000)
    return()=>{clearTimeout(timeout)}
  },[list])
  return (
    <>
    <p className={`${type=='success'?'bg-green-500':'bg-red-500'} text-sm capitalize w-[90%] text-center`}>{msg}</p>
    </>
  )
}
