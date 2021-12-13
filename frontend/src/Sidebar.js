import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import RoomContext from "./context";

export default function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const context = useContext(RoomContext);

  useEffect(() => {
    fetch("/api/rooms/")
      .then((response) => response.json())
      .then((rooms) => setRooms(rooms));
  }, []);

  return (
    <div className="Sidebar">
      <h3>Chatrooms</h3>
      {rooms.map((room) => (
        <Link key={room.id} to={room.name} className="menu-item" onClick={() => context.setRoomId(room.id)}>
          <div>{room.name}</div>
        </Link>
      ))}
    </div>
  );
}
