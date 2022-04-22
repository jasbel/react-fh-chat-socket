import React, { useContext } from 'react'
import ChatSelect from '../components/ChatSelect'
import InboxPeople from '../components/InboxPeople'
import Messages from '../components/Messages'
import '../css/chat.css'
import { ChatContext } from '../states/chat/ChatContext'

const ChatPage = () => {
  const { chatState } = useContext(ChatContext)

  return (
    <div className="messaging">
      <div className="inbox_msg">
        <InboxPeople />

        {/*  <!-- Chat inicio --> */}
        {chatState.chatActive ? <Messages /> : <ChatSelect />}

        {/*  <!-- Chat Fin --> */}
      </div>
    </div>
  )
}

export default ChatPage
