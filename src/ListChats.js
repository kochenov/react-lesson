import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListSubheader from "@mui/material/ListSubheader";
import Router from "./pages/Router";
import { Link } from "react-router-dom";

const ListChats = ({liders}) => {
  
  const [chat] = useState(liders);
  
  

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Router />
      <nav aria-label="secondary mailbox folders">
        <List
          subheader={<ListSubheader>Задать вопрос президенту:</ListSubheader>}
        >
          {chat.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt={`${item.name}`}
                    src={`/static/images/avatar/${item.id}.jpg`}
                  />
                </ListItemAvatar>
                <Link to={`${'/chats/' + item.id}`}>
                  <ListItemText primary={item.name} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};

export default ListChats;
