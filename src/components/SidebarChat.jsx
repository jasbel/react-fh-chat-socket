import React, { useContext } from 'react'
import { fetchWithToken } from '../helpers/fetch'
import { scrollToBottom } from '../helpers/scrollToBottom'
import { ChatContext } from '../states/chat/ChatContext'
import { types } from '../types/types'

const SidebarChat = ({ user }) => {
  const { chatState, dispatch } = useContext(ChatContext)
  const { chatActive } = chatState

  const onClick = async () => {
    dispatch({
      type: types.chatActive,
      payload: user.uid,
    })

    // Cargar msg chat

    const resp = await fetchWithToken(`messages/${user.uid}`)
    console.log({ resp })
    if (resp.msg)
      dispatch({
        type: types.uploadMessages,
        payload: resp.msg,
      })

    scrollToBottom('messages')
  }

  return (
    <div
      className={`chat_list ${user.uid === chatActive ? 'active_chat' : ''}`}
      onClick={onClick}
    >
      {/* active_chat */}
      <div className={'chat_people'}>
        <div className="chat_img">
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>{user.name}</h5>
          {user.online ? (
            <span className="text-success">Online</span>
          ) : (
            <span className="text-danger">Offline</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default SidebarChat
