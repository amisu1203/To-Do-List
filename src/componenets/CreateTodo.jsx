import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_title, set_content, clearTodo } from "../redux/modules/setTodo";
import { create_todo } from "../redux/modules/setData";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

// styled-components
const StBox = styled.div`
  background: rgb(226, 205, 205);
  height: 130px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  font-size: 20px;
  font-weight: 700;
  box-sizing: border-box;
  padding: 0 10px 0 100px;
`;

const StHeader = styled.div`
  content: "";
  display: block;
  clear: both;
`;

const StInp = styled.input`
  border: none;
  border-radius: 10px;
  line-height: 30px;
  margin: 0 20px;
  padding: 0 10px;
`;

const StBtnAdd = styled.button`
  border: none;
  border-radius: 10px;
  line-height: 30px;
  padding: 0 30px;
  font-size: 17px;
  background-color: rgb(255, 255, 255);
  transition: all 0.2s ease-in;
  position: absolute;
  right: 80px;

  &:hover {
    scale: 1.1;
    background-color: rgba(255, 232, 251, 0.681);
  }
`;

// CreateTodo
const CreateToDo = () => {
  const dispatch = useDispatch();
  const todoStore = useSelector((state) => state.setTodo);
  const titleInput = useRef();
  const contentInput = useRef();

  const handleTitleChange = (e) => {
    dispatch(set_title(e));
  };

  const handleContentChange = (e) => {
    dispatch(set_content(e));
  };

  const handleAddTodo = () => {
    if (todoStore.title.length < 1) {
      titleInput.current.focus();
      return;
    }
    if (todoStore.content.length < 2) {
      contentInput.current.focus();
      return;
    }
    dispatch(
      create_todo({
        title: todoStore.title,
        content: todoStore.content,
        isDone: false,
        id: uuidv4(),
      })
    );
    console.log(todoStore.id);
    dispatch(clearTodo());
    alert("해야 할 일이 생겼어요!");
  };

  return (
    <StBox>
      <StHeader>
        제목
        <StInp
          ref={titleInput}
          type="text"
          name="title"
          value={todoStore.title}
          onChange={handleTitleChange}
          placeholder="제목을 만들어주세요."
          size={30}
        ></StInp>
        내용
        <StInp
          ref={contentInput}
          type="text"
          name="content"
          value={todoStore.content}
          onChange={handleContentChange}
          placeholder="할 일을 입력해주세요"
          size={30}
        ></StInp>
        <StBtnAdd onClick={handleAddTodo}>추가하기</StBtnAdd>
      </StHeader>
    </StBox>
  );
};

export default CreateToDo;
