import { useState } from "react";
import { useRef } from "react";

const NoControlado = () => {
  const form = useRef(null);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    // Evitar action del form automático
    event.preventDefault();
    setError("");

    // Capturar datos
    const data = new FormData(form.current); // capturar los datos del form
    console.log(...data.entries());
    // Convertir esa data en un objeto para destructurarlo
    const { todoNombre, todoDescripcion, todoEstado } = Object.fromEntries([
      ...data.entries(),
    ]);
    console.log(todoNombre, todoDescripcion, todoEstado);

    // Validar los datos
    if (!todoNombre.trim()) return setError("El campo Nombre es obligatorio");
    if (!todoDescripcion.trim())
      return setError("El campo Descripción es obligatorio");

    // Enviar los datos
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        type="text"
        placeholder="Ingrese TODO"
        className="form-control mb-2"
        name="todoNombre"
        //defaultValue="Tarea #01"
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripción"
        name="todoDescripcion"
        //defaultValue="Descripción #01"
      />
      <select
        className="form-select mb-2"
        name="todoEstado"
        defaultValue="pendiente"
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button className="btn btn-primary" type="submit">
        Procesar
      </button>
      <p>{error !== "" && error}</p>
    </form>
  );
};

export default NoControlado;
