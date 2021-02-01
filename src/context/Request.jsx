import React, { useState, useContext, createContext } from 'react'

const RequestContext = createContext()

export const RequestProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  return (
    <RequestContext.Provider value={{ loading, setLoading, error, setError }}>
      {children}
    </RequestContext.Provider>
  )
}

export const useRequest = () => {
  const context = useContext(RequestContext)
  const { loading, setLoading, error, setError } = context
  return { loading, setLoading, error, setError }
}
export default RequestProvider
