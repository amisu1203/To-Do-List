import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_title, set_content, reset } from "../redux/modules/setTodo";
import { create_todo } from "../redux/modules/setData";
import { v4 as uuidv4 } from "uuid";

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
    if (todoStore.title.length < 2) {
      titleInput.current.focus();
      return;
    }
    if (todoStore.content.length < 3) {
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
    dispatch(reset());
    alert("해야 할 일이 생겼어요!");
  };

  return (
    <div className="CreateToDo">
      <header className="con-inp clearfix">
        제목
        <input
          ref={titleInput}
          type="text"
          name="title"
          value={todoStore.title}
          onChange={handleTitleChange}
          placeholder="제목을 만들어주세요."
          size={30}
        ></input>
        내용
        <input
          ref={contentInput}
          type="text"
          name="content"
          value={todoStore.content}
          onChange={handleContentChange}
          placeholder="할 일을 입력해주세요"
          size={30}
        ></input>
        <button className="btn-add btn-original" onClick={handleAddTodo}>
          추가하기
        </button>
      </header>
    </div>
  );
};

export default CreateToDo;
