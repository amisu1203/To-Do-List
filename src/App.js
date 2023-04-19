import "./App.css";
import CreateToDo from "./componenets/CreateTodo";
import Working from "./componenets/Working";
import Done from "./componenets/Done";
import { Link } from "react-router-dom";
import Router from "./shared/Router";

function App() {
  return (
    <div className="App">
      <h1>MY TO-DO</h1>
      <Router />
      <CreateToDo />
      <Working />
      <Done />
    </div>
  );
}

export default App;
