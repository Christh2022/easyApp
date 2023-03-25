import React from 'react';
import ChatComponent from '../component/chatcomponent/ChatComponent';
import Navbar from '../component/navbarcomponent/Navbar';
import './Chat.css'

const Chat = () => {
  return (
    <div className="chat">

      <div className='leftSide'>
        <Navbar/>
      </div>
      <div className='rightSide'>
        <ChatComponent/>
      </div>
    </div>
  );
};

export default Chat;