import Swal from "sweetalert2";

const Todo = ({ todo, deleteTodo, updateTodo }) => {
  const { id, title, description, state, priority } = todo;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTodo(id);
        Swal.fire({
          title: "Deleted!",
          icon: "success",
        });
      }
    });
  };
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h5 className={`${state && "text-decoration-line-through"}`}>
            {title}
          </h5>
          <p className={`${state && "text-decoration-line-through"}`}>
            {description}
          </p>
          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
            <button
              className={`btn btn-sm btn-${state ? "primary" : "warning"}`}
              onClick={() => updateTodo(id)}
            >
              {state ? "Completed" : "Pending"}
            </button>
          </div>
        </div>
        <span className="badge text-bg-primary">{priority && "Priority"}</span>
      </div>
    </li>
  );
};

export default Todo;
