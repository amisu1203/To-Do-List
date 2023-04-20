import React from "react";
import { useSelector } from "react-redux";
import ItemTodo from "./ItemTodo";
import styled from "styled-components";

// styled components
const StBox = styled.div`
  text-align: left;
  padding: 0 100px 0 100px;
`;
const StTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  padding: 30px 0;
`;

const StBoxItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  justify-content: space-around;
  gap: 40px 0;
`;
const Done = () => {
  const dataStore = useSelector((state) => state.setData);

  return (
    <StBox>
      <StTitle>Done</StTitle>
      <StBoxItems>
        {dataStore
          .filter((todo) => todo.isDone)
          .map((todo) => (
            <ItemTodo todo={todo} key={todo.id} />
          ))}
      </StBoxItems>
    </StBox>
  );
};

export default Done;
