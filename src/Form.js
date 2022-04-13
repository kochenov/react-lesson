import React, { useState, useRef } from "react";
import "./form.scss";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import { blue } from "@mui/material/colors";

const Form = ({ create }) => {
  const [message, setMessage] = useState({
    author: "",
    textMessage: "",
  });
  const messageTextInput = useRef(null);

  const addNewMessage = (e) => {
    e.preventDefault();
    messageTextInput.current.focus();
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
          <TextField
            onChange={(e) => setMessage({ ...message, author: e.target.value })}
            label="Ваше Имя"
            variant="outlined"
            value={message.author}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle sx={{ color: blue[500] }} />
                </InputAdornment>
              ),
            }}
            sx={{ color: blue[500] }}
            focused
          />
        </div>
        <div className="form-control">
          <TextField
            label="Текст сообщения"
            onChange={(e) =>
              setMessage({ ...message, textMessage: e.target.value })
            }
            margin="normal"
            autoFocus
            focused
            value={message.textMessage}
            variant="outlined"
            sx={{ color: blue[500] }}
            inputRef={messageTextInput}
          />
        </div>
        <Stack spacing={4} direction="row">
          <Button
            onClick={addNewMessage}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Отправить
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Form;
