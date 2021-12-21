import { useContext } from "react";
import RoomContext from "../context";
import MessagePane from "./MessagePane";
import SenderPane from "./SenderPane";

export default function Room() {
  const context = useContext(RoomContext);

  return (
    <div className="Room">
      <h3>{context.room?.name}</h3>
      <MessagePane />
      <SenderPane />
    </div>
  );
}
