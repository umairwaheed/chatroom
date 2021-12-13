import { useParams } from "react-router-dom";
import MessagePane from "./MessagePane";
import SenderPane from "./SenderPane";

export default function Room() {
  const params = useParams();

  return (
    <div className="Room">
      <h3>/{params["*"]}</h3>
      <MessagePane />
      <SenderPane />
    </div>
  );
}
