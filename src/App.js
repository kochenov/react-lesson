import { BrowserRouter, Route, Routes } from "react-router-dom";

import ListChats from "./ListChats";
import "./style.scss";
import "./message.scss";
import Chats from "./pages/Chats";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./components/NotFound";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const liders = [
    { id: "1", name: "Владимир Путин" },
    { id: "2", name: "Джозеф Байден" },
    { id: "3", name: "Володимир Зеленский" },
    { id: "4", name: "Олаф Шольц" },
    { id: "5", name: "Эмманюэль Макрон" },
    { id: "6", name: "Си Цзиньпин" },
  ];

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <div className="App">
            <div className="row">
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route
                  path="/chats"
                  element={<Chats liders={liders} list={true} />}
                >
                  <Route
                    path=":idChat"
                    element={<Chats liders={liders} list={false} />}
                  />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
              <ListChats liders={liders} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
