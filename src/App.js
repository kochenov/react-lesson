import React, { useState, useEffect } from "react";
import Form from "./Form";
import Message from "./Message";
import "./message.scss";

function App() {
  // Это стейт
  const [messages, setMessage] = useState([]);
  // Тут я добавляю сообщение с Стейт
  const createMessage = (newMessage) => {
    setMessage([...messages, newMessage]);
  };

  // Это добавляет ответ робота , что по заданию требуется
  useEffect(() => {
    if (messages.length > 0) {
      let lastMsg = messages[messages.length - 1];
      let robotMsg = {
        id: Date.now(),
        author: "Робот Вася",
        textMessage:
          "Здравствуйте, " +
          lastMsg.author +
          ". Ваше сообщение принято! Ожидайте ответ специалиста.",
      };
      if (lastMsg.author !== "Робот Вася") {
        setTimeout(() => {
          setMessage([...messages, robotMsg]);
          window.scrollTo(500, document.body.scrollHeight, {
            behavior: "smooth",
          });
        }, 3500);
      }
    }
  }, [messages]);

  return (
    <div className="App">
      <header>
        <div className="App-header">
          {messages.map((message) => (
            <Message message={message} key={message.id} />
          ))}
        </div>
      </header>
      <Form create={createMessage} />
    </div>
  );
}

export default App;
