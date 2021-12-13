import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("/api/rooms/")
      .then((response) => response.json())
      .then((rooms) => setRooms(rooms));
  }, []);

  return (
    <div className="Sidebar">
      <h2>Chatrooms</h2>
      {rooms.map((room) => {
        return (
          <Link to={room.name} className="menu-item">
            <div>{room.name}</div>
          </Link>
        );
      })}
    </div>
  );
}
