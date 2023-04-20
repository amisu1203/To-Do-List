import CreateTodo from "../componenets/CreateTodo";
import Working from "../componenets/Working";
import Done from "../componenets/Done";
import styled from "styled-components";

const Title = styled.h1`
  padding: 15px 50px;
  font-size: 30px;
  font-weight: 800;
`;

function Home() {
  return (
    <>
      <Title>MY TO-DO</Title>
      <CreateTodo />
      <Working />
      <Done />
    </>
  );
}

export default Home;
