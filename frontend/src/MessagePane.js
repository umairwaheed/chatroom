import { useContext, useEffect, useState } from "react";
import RoomContext from "./context";

export default function MessagePane() {
  const [messages, setMessages] = useState([]);
  const context = useContext(RoomContext);

  useEffect(
    () =>
      !context.room ||
      fetch(`/api/rooms/${context.room.id}/messages/`)
        .then((response) => response.json())
        .then((messages) => setMessages(messages)),
    [context.room]
  );

  return (
    <div className="MessagePane">
      {messages.map((message) => (
        <div key={message.id} className="message">
          {message.text}
        </div>
      ))}
    </div>
  );
}
