import React from 'react'
import { Navigate } from 'react-router-dom'
import ChatPage from '../pages/ChatPage'

const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <ChatPage /> : <Navigate to="/auth/login" />
}

export default PrivateRoute
