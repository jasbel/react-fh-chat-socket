import { useCallback, useEffect, useMemo, useState } from 'react'
import io from 'socket.io-client'

export const useSocket = (serverPath) => {
  // const socket = useMemo( () => io.connect(serverPath, { transports: ['websocket'] }),[serverPath] )
  const [socket, setSocket] = useState(null)
  const [online, setOnline] = useState(false)

  const connectSocket = useCallback(() => {
    const token = localStorage.getItem('token')

    const socketTemp = io.connect(serverPath, {
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true, // limpia conexion y fuerza a crear nueva conexion
      query: {
        'x-token-socket': token,
      },
    })

    setSocket(socketTemp)
  }, [serverPath])

  const disconnectSocket = () => {
    socket?.disconnect()
  }

  useEffect(() => {
    setOnline(socket?.connected)
  }, [socket])

  useEffect(() => {
    socket?.on('connect', () => setOnline(true))
  }, [socket])

  useEffect(() => {
    socket?.on('disconnect', () => setOnline(false))
  }, [socket])

  return {
    socket,
    online,
    connectSocket,
    disconnectSocket,
  }
}
