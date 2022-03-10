import React, { useState, useEffect } from "react";
import Form from "./Form";
import Message from "./Message";
import "./message.scss";

function App() {
  const [messages, setMessage] = useState([]);

  const createMessage = (newMessage) => {
    setMessage([...messages, newMessage]);
  };

  useEffect(() => {
    if (messages.length > 0) {
      let lastMsg = messages[messages.length - 1];
      let robotMsg = {
        id: Date.now(),
        author: "Робот Вася",
        textMessage:
          "Здравствуйте, " +
          lastMsg.author +
          ". Ваше сообщение принято к рассмотрению! Ожидайте ответа специалиста.",
      };
      if (lastMsg.author !== "Робот Вася") {
        setTimeout(() => {
          setMessage([...messages, robotMsg]);
        }, 1500);
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
