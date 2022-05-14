/* eslint-disable react/prop-types */
import { createContext, useCallback, useContext, useState } from 'react'

export const AuthContext = createContext()

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
}

import React from 'react'
import { fetchNoToken, fetchWithToken } from '../../helpers/fetch'

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState)

  const login = async (email, password) => {
    const resp = await fetchNoToken('login', { email, password }, 'POST')

    if (resp.ok) {
      localStorage.setItem('token', resp.token)
      const { user } = resp

      setAuth({
        uid: user.uid,
        checking: false,
        logged: true,
        name: user.name,
        email: user.email,
      })
    }

    return resp.ok
  }

  const register = async (name, email, password) => {
    const resp = await fetchNoToken(
      'login/new',
      { name, email, password },
      'POST'
    )

    if (resp.ok) {
      localStorage.setItem('token', resp.token)
      const { user } = resp

      setAuth({
        uid: user.uid,
        checking: false,
        logged: true,
        name: user.name,
        email: user.email,
      })
    }

    return [resp.ok, resp.msg]
  }

  const verificationToken = useCallback(async () => {
    const token = localStorage.getItem('token')

    if (!token) {
      return setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      })
    }

    const resp = await fetchWithToken('login/renew')
    if (resp.ok) {
      localStorage.setItem('token', resp.token)
      const { user } = resp

      setAuth({
        uid: user.uid,
        checking: false,
        logged: true,
        name: user.name,
        email: user.email,
      })
      console.log('Autenticado')
      return true
    } else {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      })
      return false
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('token')

    setAuth({
      checking: false,
      logged: false,
    })
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        register,
        verificationToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
