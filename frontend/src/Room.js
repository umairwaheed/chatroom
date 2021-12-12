import {useParams} from "react-router-dom";
import MessagePane from "./MessagePane";
import SenderPane from "./SenderPane";

export default function Content() {
  const params = useParams();

  return (
    <div className="Content">
      <h3>/{params.roomName}</h3>
      <MessagePane />
      <SenderPane />
    </div>
  );
}
