import { createContext, useReducer } from 'react'
import { chatReducer } from './chatReducer'

export const ChatContext = createContext()

const initialState = {
  uid: '',
  chatActive: null, // UID de usuario al que quiero enviar mensajes
  users: [], // all users of database
  messages: [], // select chat
}

export const ChatProvider = ({ children }) => {
  const [chatState, dispatch] = useReducer(chatReducer, initialState)

  return (
    <ChatContext.Provider value={{ msg: 'hello word', chatState, dispatch }}>
      {children}
    </ChatContext.Provider>
  )
}
