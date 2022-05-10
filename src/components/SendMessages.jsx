import React, { useState, useContext } from 'react'
import AuthContext from '../states/auth/AuthContext'
import { ChatContext } from '../states/chat/ChatContext'
import { SocketContext } from '../states/socket/SocketContext'

const SendMessages = () => {
  const [message, setMessage] = useState('')
  const { socket } = useContext(SocketContext)
  const { auth } = useContext(AuthContext)
  const { chatState } = useContext(ChatContext)

  const onChange = ({ target }) => {
    setMessage(target.value)
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    if (message.length === 0) return

    // TODO: emit event socket for send msg
    // {
    //   from: // uid send user
    //   to: // uid user receiver
    //   msg: // message
    // }
    const dataEmit = {
      from: auth.uid,
      to: chatState.chatActive,
      msg: message,
    }

    console.log({ dataEmit })
    socket.emit('message-personal', dataEmit)

    // TODO: hacer dispathc del menssage
    //
    setMessage('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="type_msg row">
        <div className="input_msg_write col-sm-9">
          <input
            type="text"
            className="write_msg"
            placeholder="Mensaje..."
            value={message}
            onChange={onChange}
          />
        </div>
        <div className="col-sm-3 text-center">
          <button className="msg_send_btn mt-3" type="submit">
            enviar
          </button>
        </div>
      </div>
    </form>
  )
}

export default SendMessages
