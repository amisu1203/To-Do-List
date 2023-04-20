import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function DetailTodo() {
  const data = useSelector((store) => store.setData);
  const { id } = useParams();
  const todo = data.find((todo) => todo.id === id);
  return (
    <>
      <div>id : {todo.id}</div>
      <h1>{todo.title}</h1>
      <p>{todo.content}</p>
      <Link to={"/"}>뒤로 가기</Link>
    </>
  );
}

export default DetailTodo;
