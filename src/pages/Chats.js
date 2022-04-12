import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CurrentChats from "../components/CurrentChats";
import Form from "../Form";
import Message from "../Message";

const Chats = ({ liders }, list) => {
  // Это стейт
  const [messages, setMessage] = useState({});
  const { idChat } = useParams();
  const [curentLider] = liders.filter((item) => item.id === idChat);
  console.log(curentLider);
  // Тут я добавляю сообщение с Стейт
  const createMessage = (newMessage) => {
    if (messages[idChat]) {
      setMessage({
        ...messages,
        [idChat]: {
          lider: curentLider.name,
          messages: [...messages[idChat].messages, newMessage],
        },
      });
    } else {
      setMessage({
        ...messages,
        [idChat]: { lider: curentLider.name, messages: [newMessage] },
      });
    }
  };
  // Это добавляет ответ робота , что по заданию требуется
  useEffect(() => {
    if (messages[idChat]) {
      console.log(messages[idChat].messages);
    }
    if (messages[idChat] && messages[idChat].messages.length > 0) {
      let lastMsg =
        messages[idChat].messages[messages[idChat].messages.length - 1];
      let robotMsg = {
        id: Date.now(),
        author: curentLider.name,
        textMessage:
          "Здравствуйте, " +
          lastMsg.author +
          ". Ваше сообщение принято! Как только освобожусь, отвечу на все Ваши вопросы.",
      };
      if (lastMsg.author !== curentLider.name) {
        setTimeout(() => {
          //setMessage([...messages, robotMsg]);
          setMessage({
            ...messages,
            [idChat]: {
              lider: curentLider.name,
              messages: [...messages[idChat].messages, robotMsg],
            },
          });
          window.scrollTo(500, document.body.scrollHeight, {
            behavior: "smooth",
          });
        }, 3500);
      }
    }
  }, [messages]);
  return (
    <>
      <div className="App-header">
        {messages[idChat]
          ? messages[idChat].messages.map((message) => (
              <Message message={message} key={message.id} />
            ))
          : null}
          
        {idChat ? (
          <>
            <div className="container">
              <Form create={createMessage} />
            </div>
          </>
        ) : <CurrentChats messages={messages}/>}
      </div>
    </>
  );
};

export default Chats;
