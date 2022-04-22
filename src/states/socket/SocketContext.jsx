import React, { useContext, useEffect } from 'react'
import { createContext } from 'react'
import { urlFront } from '../../helpers/config'
import { useSocket } from '../../hooks/useSocket'
import { types } from '../../types/types'
import AuthContext from '../auth/AuthContext'
import { ChatContext } from '../chat/ChatContext'

export const SocketContext = createContext()

export const SocketProvider = ({ children }) => {
  const { socket, online, connectSocket, disconnectSocket } =
    useSocket(urlFront)
  const { auth } = useContext(AuthContext)
  const { dispatch } = useContext(ChatContext)

  useEffect(() => {
    if (auth.logged) connectSocket()
  }, [auth, connectSocket])

  useEffect(() => {
    if (!auth.logged) disconnectSocket()
  }, [auth, disconnectSocket])

  useEffect(() => {
    socket?.on('list-users', (users) => {
      // console.log({ user })
      dispatch({ type: types.usersLoad, payload: users })
    })
  }, [socket])

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  )
}
