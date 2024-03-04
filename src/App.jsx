import { useState } from "react";
import Formulario from "./components/Formulario";
import Todos from "./components/Todos";
import { useEffect } from "react";

const initialTodos = JSON.parse(localStorage.getItem("todos-initial")) || [];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  useEffect(() => {
    localStorage.setItem("todos-initial", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    const newArray = todos.filter((todo) => todo.id !== id);
    setTodos(newArray);
  };

  const updateTodo = (id) => {
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        todo.state = !todo.state;
      }
      return todo;
    });
    setTodos(newArray);
  };

  const orderTodos = (arrayTodos) => {
    return arrayTodos.sort((a, b) => {
      if (a.priority === b.priority) return 0;
      if (a.priority) return -1;
      if (!a.priority) return 1;
    });
  };

  return (
    <div className="p-4">
      <div className="container border border-1 border-info border-opacity-75 p-4 rounded-4 w-[80] shadow-lg">
        <h1 className="text-center">TODO App</h1>
        <h3 className="mb-4">New Task</h3>
        <Formulario addTodo={addTodo} />
        <Todos
          todos={orderTodos(todos)}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
};
export default App;
