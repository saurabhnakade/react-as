import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error=useRouteError();
  return (
    <>
    <h1>Oops Something Went Wrong</h1>
    <h2>{error.status+" "+error.statusText}</h2>
    </>
  )
}

export default Error