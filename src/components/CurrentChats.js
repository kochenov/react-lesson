import React from "react";
import { Link } from "react-router-dom";

const CurrentChats = ({ messages, deleteMess }) => {
  const deleteMesgs = (message, e) => {
    e.preventDefault();
    deleteMess(message);
    //deleteMsg(message);
  };

  //const { msgs } = messages;
  return (
    <>
      {Object.keys(messages).length > 0 ? (
        Object.keys(messages).map((message, index) => (
          <div key={index} className="message-list">
            <img src={`/static/images/avatar/${message}.jpg`} alt="" />
            <div>
              <p>Президент: {messages[message].lider}</p>
              <Link to={"/chats/" + message}> Продолжить переписку </Link>
              <div className="deleteChat">
                <button onClick={(e) => deleteMesgs(message, e)}>
                  Удалить переписку
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="notRecords">
          Переписки нет!
          <br /> Выбирите лидера и задайте вопрос, после этого здесь отобразятся
          чаты с президентами
        </div>
      )}
    </>
  );
};

export default CurrentChats;
