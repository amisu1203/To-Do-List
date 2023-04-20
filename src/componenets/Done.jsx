import React from "react";
import { useSelector } from "react-redux";
import ItemTodo from "./ItemTodo";

const Done = () => {
  const dataStore = useSelector((state) => state.setData);

  return (
    <div>
      <h2>Done</h2>
      {dataStore
        .filter((todo) => todo.isDone)
        .map((todo) => (
          <ItemTodo todo={todo} key={todo.id} />
        ))}
    </div>
  );
};

export default Done;
