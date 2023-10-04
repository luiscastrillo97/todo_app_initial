import Swal from "sweetalert2";
import { useState } from "react";

const Formulario = ({ addTodo }) => {
  const [error, setError] = useState(false);

  const [todo, setTodo] = useState({
    title: "",
    description: "",
    state: "pending",
    priority: true,
  });

  const { title, description, state, priority } = todo;

  const handleSubmit = (event) => {
    // Evitar action del form automático
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Title and Description are required!",
      });
      //setError(true);
    } //else { setError(false);}

    addTodo({
      id: Date.now(),
      ...todo,
      state: state === "completed",
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "To-Do added successfully",
      showConfirmButton: false,
      timer: 1500,
    });

    setTodo({
      title: "",
      description: "",
      state: "pending",
      priority: true,
    });
  };

  const handleOnChange = (event) => {
    //setTodo({ ...todo, priority: event.target.checked })
    const { type, name, value, checked } = event.target;
    setTodo({ ...todo, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add title"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={handleOnChange}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Add description"
        name="description"
        value={description}
        onChange={handleOnChange}
      />
      <div className="form-check mb-2">
        <input
          type="checkbox"
          name="priority"
          className="form-check-input"
          id="inputCheck"
          checked={priority}
          onChange={handleOnChange}
        />
        <label htmlFor="inputCheck">Priority</label>
      </div>
      <select
        className="form-select mb-3"
        name="state"
        value={state}
        onChange={handleOnChange}
      >
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      {error && (
        <div className="alert alert-danger">Llenar todos los campos</div>
      )}
      <button className="btn btn-primary" type="submit">
        Add To-Do
      </button>
    </form>
  );
};

export default Formulario;
