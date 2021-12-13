import { useEffect, useState } from "react";

export default function MessagePane() {
  const [messages, setMessages] = useState([]);

  useEffect(
    () =>
      fetch("/api/rooms/1/messages/")
        .then((response) => response.json())
        .then((messages) => setMessages(messages)),
    []
  );

  return (
    <div className="MessagePane">
      {messages.map((message) => (
        <div className="message">{message.text}</div>
      ))}
    </div>
  );
}
