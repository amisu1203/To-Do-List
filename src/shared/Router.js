import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailTodo from "../componenets/DetailTodo";
import { Link } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      {/* // link태그는 반드시 Router 컴포넌트 안에서 사용 */}
      <Link to={"/detail"}>detail</Link>
      <Routes>
        <Route path="/detail" element={<DetailTodo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
