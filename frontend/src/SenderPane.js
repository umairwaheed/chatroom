const sendMessage = (message) => {
  fetch("/api/rooms/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": document.forms.csrf.csrfmiddlewaretoken.value,
    },
    body: JSON.stringify({}),
  });
}

export default function SenderPane() {

  return (
    <div className="SenderPane">
      <input type="text" />
      <button>Send</button>
    </div>
  );
}
