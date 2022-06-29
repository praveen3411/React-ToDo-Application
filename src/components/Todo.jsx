import { useState } from "react";
import AddList from "./AddList";
import AddToDo from "./Addtodo";

function ToDo() {
  const [todos, setTodos] = useState([]);
  let handleAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: todos.length + Date.now(),
        title: text,
        status: false,
      },
    ]);
  };
  console.log(todos);
  let handleToggle = (id) => {
    let updated = todos.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodos(updated);
  };
  let handleDelete = (id) => {
    let updated=todos.filter((item)=>item.id !==id)
    setTodos(updated)
  };
  return (
    <div>
      <AddToDo handleAdd={handleAdd} />
      <div>
        <AddList
          data={todos}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}
export default ToDo;
