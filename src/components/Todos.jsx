import Todo from "./Todo";

const Todos = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <div className="mt-5">
      <h2 className="text-center mb-4">Things To Do</h2>
      <ul className="list-group">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
        {todos.length === 0 && (
          <li className="list-group-item text-center">
            <h6>There is nothing to do yet</h6>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Todos;
