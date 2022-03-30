import React from 'react'
import { createContext } from 'react'
import { urlFront } from '../../helpers/config'
import { useSocket } from '../../hooks/useSocket'

export const SocketContext = createContext()

export const SocketProvider = ({ children }) => {
  const { socket, online } = useSocket(urlFront)

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  )
}
