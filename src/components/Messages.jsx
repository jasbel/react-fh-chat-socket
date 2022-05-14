import React, { useContext } from 'react'
import AuthContext from '../states/auth/AuthContext'
import { ChatContext } from '../states/chat/ChatContext'
import IncomingMessage from './IncomingMessage'
import OutgoinMessages from './OutgoinMessages'
import SendMessages from './SendMessages'

const Messages = () => {
  const { chatState } = useContext(ChatContext)
  const { auth } = useContext(AuthContext)
  return (
    <div className="mesgs">
      <div id="messages" className="msg_history">
        {chatState.messages.map((msg) =>
          msg.to === auth.uid ? (
            <IncomingMessage key={msg._id} msg={msg} />
          ) : (
            <OutgoinMessages key={msg._id} msg={msg} />
          )
        )}
      </div>
      <SendMessages />
    </div>
  )
}

export default Messages
