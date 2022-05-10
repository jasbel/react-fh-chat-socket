import React from 'react'
import { getDateChat } from '../helpers/times'

const IncomingMessage = ({ msg }) => {
  console.log({ msg2: msg })
  return (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        <img
          src="https://ptetutorials.com/images/user-profile.png"
          alt="sunil"
        />
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{msg.msg}</p>
          <span className="time_date">
            {msg.createdAt ? getDateChat(msg.createdAt) : '-'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default IncomingMessage
