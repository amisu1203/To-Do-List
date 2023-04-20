import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import DetailTodo from "./pages/DetailTodo";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<DetailTodo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
