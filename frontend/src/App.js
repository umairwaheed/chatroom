import { useState } from "react";
import "./App.css";
import Room from "./components/Room";
import Sidebar from "./components/Sidebar";
import RoomContext from "./context";

function App() {
  const [room, setRoom] = useState(null);

  return (
    <div className="App">
      <RoomContext.Provider value={{ room, setRoom }}>
        <header className="App-header">
          <Sidebar />
          <Room />
        </header>
      </RoomContext.Provider>
    </div>
  );
}

export default App;
