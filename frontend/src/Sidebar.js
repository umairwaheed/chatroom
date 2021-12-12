import { Link } from "react-router-dom";

export default function Sidebar() {
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
