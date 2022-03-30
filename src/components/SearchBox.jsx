import React, { useContext } from 'react'
import AuthContext from '../states/auth/AuthContext'

const SearchBox = () => {
  const { auth, logout } = useContext(AuthContext)

  return (
    <div className="headind_srch">
      <div className="recent_heading mt-2">
        <h4 style={{ textTransform: 'uppercase' }}>{auth.name}</h4>
      </div>
      <div className="srch_bar">
        <div className="stylish-input-group">
          <button onClick={logout} className="btn text-danger">
            Salir
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBox
