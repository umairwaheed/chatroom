import { useContext, useState } from "react";
import RoomContext from "../context";

const sendMessage = (roomId, message) => {
  fetch("/api/messages/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      room: roomId,
      text: message,
    }),
  });
};

export default function SenderPane() {
  const [message, setMessage] = useState("");
  const context = useContext(RoomContext);

  return (
    <div className="SenderPane">
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button
        type="submit"
        onClick={() => sendMessage(context.room?.id, message)}
      >
        Send
      </button>
    </div>
  );
}
