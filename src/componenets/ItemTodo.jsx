import React from "react";
import { useDispatch } from "react-redux";
import { remove_todo, get_done, turn_back } from "../redux/modules/setData";
import { useNavigate } from "react-router-dom";
import { clearTodo } from "../redux/modules/setTodo";
import styled from "styled-components";

// styled componenets
const StBox = styled.div`
  background-color: #c7cabd;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  background-color: #d9e4f5;
  background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 20px 20px;
  box-sizing: border-box;
`;

const BtnGoDetail = styled.button`
  border: none;
  line-height: 30px;
  padding: 0 20px;
  font-size: 15px;
  background-color: transparent;
  transition: all 0.2s ease-in;
  cursor: pointer;
`;

const StTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 10px 0;
`;

const StTxt = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const StBoxBtns = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  > * {
    flex: 0 1 auto;
    margin-left: 10px;
    &:first-child {
      margin-left: 0;
    }
  }
`;

const StBtn = styled.button`
  border: none;
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

function ItemTodo({ todo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 상세 이동
  const goDetail = () => {
    navigate(`/detail/${todo.id}`);
    dispatch(clearTodo());
  };

  // 삭제
  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(remove_todo(todo.id));
      alert("삭제되었습니다!");
    } else return;
  };

  // 완료
  const handleDone = () => {
    window.confirm("정말 완료하셨나요?") && dispatch(get_done(todo.id));
  };

  // 취소
  const handleTurnBack = () => {
    dispatch(turn_back(todo.id));
    alert("다시 할 일이 추가됐네요!");
  };
  return todo.isDone ? (
    <StBox>
      <BtnGoDetail onClick={goDetail}>상세 보기</BtnGoDetail>
      <article>
        <StTitle>{todo.title}</StTitle>
        <StTxt>{todo.content}</StTxt>
        <StBoxBtns>
          <StBtn onClick={handleRemove}>삭제</StBtn>
          <StBtn onClick={handleTurnBack}>취소</StBtn>
        </StBoxBtns>
      </article>
    </StBox>
  ) : (
    <StBox>
      <BtnGoDetail onClick={goDetail}>상세 보기</BtnGoDetail>
      <article className="TodoItem box-same1">
        <StTitle>{todo.title}</StTitle>
        <StTxt>{todo.content}</StTxt>
        <StBoxBtns>
          <StBtn onClick={handleRemove}>삭제</StBtn>
          <StBtn onClick={handleDone}>완료</StBtn>
        </StBoxBtns>
      </article>
    </StBox>
  );
}

export default ItemTodo;
