import { onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { db } from '../firebase'; // Assuming db is your Firestore instance
import { AuthContext } from '../context/Authcontext'; // Assuming AuthContext is your authentication context
import { doc } from 'firebase/firestore';
import {ChatContext} from "../context/ChatContext";

const Chats = ()=> {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext); // Assuming AuthContext is your authentication context
  const { dispatch } = useContext(ChatContext); // Assuming ChatContext is your chat context

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data() || {});
      });

      return () => {
        unsub();
      };
    };

     currentUser.uid &&
      getChats();
    
  }, [currentUser]);

  const handleSelect = (u)=>{
    dispatch({type:"CHANGE_USER", payload : u});
  };

  return (
    <div className="chats">
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
