import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function DetailTodo() {
  const data = useSelector((store) => store.setData);
  const { id } = useParams();
  const todo = data.find((todo) => todo.id === id);
  return (
    <>
      <div>{todo.title}</div>
      <div>{todo.content}</div>
      <Link to={"/"}>뒤로 가기</Link>
    </>
  );
}

export default DetailTodo;
