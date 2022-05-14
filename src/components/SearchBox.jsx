import React, { useContext } from 'react'
import AuthContext from '../states/auth/AuthContext'
import { ChatContext } from '../states/chat/ChatContext'
import { types } from '../types/types'

const SearchBox = () => {
  const { auth, logout } = useContext(AuthContext)
  const { dispatch } = useContext(ChatContext)

  const onCloseSession = () => {
    logout()

    dispatch({ type: types.closeSession })
  }

  return (
    <div className="headind_srch">
      <div className="recent_heading mt-2">
        <h4 style={{ textTransform: 'uppercase' }}>{auth.name}</h4>
      </div>
      <div className="srch_bar">
        <div className="stylish-input-group">
          <button onClick={onCloseSession} className="btn text-danger">
            Salir
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBox
