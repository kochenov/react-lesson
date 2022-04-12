import React from "react";
import { Link } from "react-router-dom";

const CurrentChats = ({ messages }) => {
  console.log(messages);
  //const { msgs } = messages;
  return (
    <>
      {Object.keys(messages).length > 0
        ? Object.keys(messages).map((message, index) => (
            <div key={index} className="message-list">
              <img src={`/static/images/avatar/${message}.jpg`} alt="" />
              <div>
                <p> Переписка с лидером: </p>
                <p>{messages[message].lider}</p>
                <Link to={'/chats/'+ message} > Перейти к переписки </Link> 
              </div>
            </div>
          ))
        : "Переписки нет"}
    </>
  );
};

export default CurrentChats;
