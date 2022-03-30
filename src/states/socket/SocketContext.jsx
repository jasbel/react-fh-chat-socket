import React, { useContext, useEffect } from 'react'
import { createContext } from 'react'
import { urlFront } from '../../helpers/config'
import { useSocket } from '../../hooks/useSocket'
import AuthContext from '../auth/AuthContext'

export const SocketContext = createContext()

export const SocketProvider = ({ children }) => {
  const { socket, online, connectSocket, disconnectSocket } =
    useSocket(urlFront)

  const { auth } = useContext(AuthContext)

  useEffect(() => {
    if (auth.logged) connectSocket()
  }, [auth, connectSocket])

  useEffect(() => {
    if (!auth.logged) disconnectSocket()
  }, [auth, disconnectSocket])

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  )
}
