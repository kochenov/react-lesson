import React, { useState } from "react";
import "./form.scss";

const Form = ({ create }) => {
  const [message, setMessage] = useState({
    author: "",
    textMessage: "",
  });

  const addNewMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      ...message,
      id: Date.now(),
    };

    setTimeout(() => {
      create(newMessage);
      window.scrollTo(500, document.body.scrollHeight, { behavior: "smooth" });
    }, 1);
    setMessage({ author: message.author, textMessage: "" });
  };
  return (
    <div className="wrap">
      <form className="form">
        <div className="form-control">
          <input
            onChange={(e) => setMessage({ ...message, author: e.target.value })}
            type="text"
            placeholder="Ваше Имя"
            value={message.author}
          />
        </div>
        <div className="form-control">
          <textarea
            onChange={(e) =>
              setMessage({ ...message, textMessage: e.target.value })
            }
            placeholder="Текст сообщения"
            value={message.textMessage}
          />
        </div>
        <div className="msg-btn">
          <button onClick={addNewMessage}>Отправить</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
