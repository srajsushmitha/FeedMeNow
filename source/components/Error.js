import React from 'react'
import {useRouteError} from 'react-router-dom'

const Error = () => {
  const err = useRouteError()
  return (
    <div>
      <h2>Oops!!</h2>
      <h4>Something went wrong</h4>
      <h5>{err.status}</h5>
    </div>
  )
}

export default Error