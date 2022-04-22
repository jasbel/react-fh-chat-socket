import React, { useContext } from 'react'
import AuthContext from '../states/auth/AuthContext'
import { ChatContext } from '../states/chat/ChatContext'
import SidebarChat from './SidebarChat'

const Sidebar = () => {
  const { chatState } = useContext(ChatContext)
  const { auth } = useContext(AuthContext)

  return (
    <div className="inbox_chat">
      {chatState.users
        .filter((user) => user.uid !== auth.uid)
        .map((user, _index) => (
          <SidebarChat key={_index} user={user} />
        ))}
      {/*  <!-- Espacio extra para scroll --> */}
      <div className="extra_space"></div>
    </div>
  )
}

export default Sidebar
