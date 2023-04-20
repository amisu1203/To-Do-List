import CreateTodo from "./componenets/CreateTodo";
import Working from "./componenets/Working";
import Done from "./componenets/Done";

function Home() {
  return (
    <>
      <h1>MY TO-DO</h1>
      <CreateTodo />
      <Working />
      <Done />
    </>
  );
}

export default Home;
