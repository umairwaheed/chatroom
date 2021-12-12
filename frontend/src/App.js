import "./App.css";
import Content from "./Room";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sidebar />
        <Content />
      </header>
    </div>
  );
}

export default App;
