import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// styled components
const StBox = styled.div`
  border: 1px solid gray;
  display: flex;
  justify-content: center; /* 가로축 중앙 정렬 */
  height: 60vh;
  margin: 100px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
`;

function DetailTodo() {
  const data = useSelector((store) => store.setData);
  const { id } = useParams();
  const todo = data.find((todo) => todo.id === id);

  const navigate = useNavigate();
  // home 이동
  const goHome = () => {
    navigate(`/`);
  };

  return (
    <StBox>
      <div>
        <div>id : {todo.id}</div>
        <button onClick={goHome}>이전으로</button>
      </div>
      <h1>{todo.title}</h1>
      <p>{todo.content}</p>
    </StBox>
  );
}

export default DetailTodo;
