import { useState } from "react";
import "./App.css";
import Content from "./Room";
import Sidebar from "./Sidebar";
import RoomContext from "./context";

function App() {
  const [roomId, setRoomId] = useState(null);

  return (
    <div className="App">
      <RoomContext.Provider value={{ roomId, setRoomId }}>
        <header className="App-header">
          <Sidebar />
          <Content />
        </header>
      </RoomContext.Provider>
    </div>
  );
}

export default App;
