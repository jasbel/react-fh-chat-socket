import React from 'react'
import { Routes } from 'react-router-dom'

const AuthRouter = () => {
  return (
    <Routes>
      {/* en AppRouter tenemos /auth/* que va manejar las rutas anidadas */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<p>La página no existe</p>} />
    </Routes>
  )
}

export default AuthRouter