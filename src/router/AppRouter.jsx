import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ChatPage from '../pages/ChatPage'
import AuthContext from '../states/auth/AuthContext'
import AuthRouter from './AuthRouter'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  const { auth, verificationToken } = useContext(AuthContext)

  useEffect(() => {
    verificationToken()
  }, [verificationToken])

  if (auth.checking) {
    return <h1>Espere por favor</h1>
  }

  return (
    <BrowserRouter>
      <Routes path="/" element={<ChatPage />}>
        <Route
          path="/auth/*"
          element={<PublicRoute isAuthenticated={auth.logged} />}
        />
        <Route
          path="/"
          element={<PrivateRoute isAuthenticated={auth.logged} />}
        />

        {/* <Route path="*" element={<p>La página no existe</p>} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
