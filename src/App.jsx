import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    if (todoList.length >= 10) {
      return; // Maximum limit reached, do not add a new item
    }
    setTodoList([...todoList, { todoName: todo }]);
    setTodo("");
  };

  const handleDelete = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  return (
    <>
      <div data-theme="retro" className="w-full h-screen bg-default flex justify-center items-center">
        <div className="lg:w-[30%] md:w-[40%] sm:w-[50%] w-[80%] h-[80%] bg-secondary text-black text-center rounded-lg">
          <h1 className="text-center text-3xl font-bold py-4 px-4"> TODO APP</h1>
          <form onSubmit={handleForm}>
            <input
              type="text"
              placeholder="type todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className="input w-full max-w-xs px-2"
            />
            <div className="pt-5 pb-5">
              <button type="submit" className="btn btn-active btn-info">
                add Todo
              </button>
            </div>
          </form>
          <div className="">
            <h1 className="pb-5 text-2xl font-bold">TODO LIST</h1>
            <TodoList todos={todoList} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
