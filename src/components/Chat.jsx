import React from 'react'
import Cam from "../img/Cam.png";
import add from "../img/add.png";
import more from "../img/more.png";
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';
import { useContext } from 'react';

const Chat = ()=> {
  const { data } = useContext(ChatContext);

  return (
    <div className='chat'>
      <div className="chatInfo">
      <span>{data.user?.displayName}</span>
        <div className='chatIcons'>
          <img src={add} alt=''/>
          <img src={Cam} alt=''/>
          <img src={more} alt=''/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  );
};

export default Chat;

