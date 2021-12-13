import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("/api/rooms/").then((response) => {
      console.log(response);
      return response.json()
    }).then((args) => console.log(args));
  }, []);

  return (
    <div className="Sidebar">
      <h2>Chatrooms</h2>
      <Link to="/animals" className="menu-item">
        <div>/animals</div>
      </Link>
      <Link to="/teams" className="menu-item">
        <div>/teams</div>
      </Link>
    </div>
  );
}
