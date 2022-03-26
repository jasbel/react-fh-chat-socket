import React from "react";
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
  const chats = [1,1,1,1,1,1,1,1,1,1];
  return (
    <div className="inbox_chat">
      {chats.map((chat, index) => (
        <SidebarChat key={index} />
      ))}
      {/*  <!-- Espacio extra para scroll --> */}
      <div className="extra_space"></div>
    </div>
  );
};

export default Sidebar;
