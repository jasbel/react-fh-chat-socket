import React from 'react'
import { getDateChat } from '../helpers/times'

const OutgoinMessages = ({ msg }) => {
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{msg.msg}</p>
        <span className="time_date">
          {msg.createdAt ? getDateChat(msg.createdAt) : '-'}
        </span>
      </div>
    </div>
  )
}

export default OutgoinMessages
