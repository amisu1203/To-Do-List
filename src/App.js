import "./reset.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import DetailTodo from "./pages/DetailTodo";
import Home from "./pages/home";
import styled from "styled-components";

const StBox = styled.div`
  // 그리고 이 안에 스타일 코드를 작성합니다. 스타일 코드는 우리가 알고 있는 css와 동일합니다.
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <StBox>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<DetailTodo />} />
        </Routes>
      </StBox>
    </BrowserRouter>
  );
}

export default App;
