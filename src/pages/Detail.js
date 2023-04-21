import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// styled components
const StBox = styled.div`
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 60vh;
  max-width: 600px;
  min-width: 300px;
  margin: 90px auto 0;
  box-sizing: border-box;
  text-align: left;
`;
const StHead = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px;
`;

const StTxtId = styled.div`
  font-size: 18px;
`;

const StBtnBack = styled.button`
  border: 1px solid rgb(238, 238, 238);
  border-radius: 10px;
  line-height: 30px;
  padding: 0 19px;
  font-size: 17px;
  background-color: rgb(255, 255, 255);
  transition: all 0.2s ease-in;
  &:hover {
    scale: 1.1;
  }
`;

const StTitle = styled.h1`
  padding: 0px 24px;
  margin: 21px 0;
  font-size: 32px;
  font-weight: 700;
`;

const StContent = styled.p`
  padding: 0px 26px;
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
      <div style={{ width: "100%" }}>
        <StHead>
          <StTxtId>id : {todo.id}</StTxtId>
          <StBtnBack onClick={goHome}>이전으로</StBtnBack>
        </StHead>
        <StTitle>{todo.title}</StTitle>
        <StContent>{todo.content}</StContent>
      </div>
    </StBox>
  );
}

export default DetailTodo;
