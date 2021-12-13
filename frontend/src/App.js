import { useState } from "react";
import "./App.css";
import Content from "./Room";
import Sidebar from "./Sidebar";
import RoomContext from "./context";

function App() {
  const [room, setRoom] = useState(null);

  return (
    <div className="App">
      <RoomContext.Provider value={{ room, setRoom }}>
        <header className="App-header">
          <Sidebar />
          <Content />
        </header>
      </RoomContext.Provider>
    </div>
  );
}

export default App;
