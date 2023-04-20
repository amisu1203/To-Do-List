import React from "react";
import { useDispatch } from "react-redux";
import { remove_todo, get_done, turn_back } from "../redux/modules/setData";
import { useNavigate } from "react-router-dom";
import { clearTodo } from "../redux/modules/setTodo";
// import { useNavigate } from "react-router-dom";

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
    <>
      <article className="DoneItem box-same1">
        <h2>{todo.title}</h2>
        <p>{todo.content}</p>
        <div className="con-btns">
          <button className="btn-delete btn-original" onClick={handleRemove}>
            삭제
          </button>
          <button className="btn-original" onClick={handleTurnBack}>
            취소
          </button>
        </div>
      </article>
    </>
  ) : (
    <>
      <button onClick={goDetail}>상세 페이지로 가기</button>
      <article className="TodoItem box-same1">
        <h2>{todo.title}</h2>
        <p>{todo.content}</p>
        <div className="con-btns">
          <button className="btn-delete btn-original" onClick={handleRemove}>
            삭제
          </button>
          <button className="btn-original" onClick={handleDone}>
            완료
          </button>
        </div>
      </article>
    </>
  );
}

export default ItemTodo;
