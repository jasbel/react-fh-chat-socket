import React from "react";
import IncomingMessage from "./IncomingMessage";
import OutgoinMessages from "./OutgoinMessages";
import SendMessages from "./SendMessages";

const Messages = () => {
  const msgs = [1, 2, 3,4,5,6,7];
  return (
    <div className="mesgs">
      <div className="msg_history">
        {msgs.map((msg, index) => ((msg % 2) ? <IncomingMessage key={index} /> : <OutgoinMessages  key={index}/>))}
      </div>
      <SendMessages />
    </div>
  );
};

export default Messages;
