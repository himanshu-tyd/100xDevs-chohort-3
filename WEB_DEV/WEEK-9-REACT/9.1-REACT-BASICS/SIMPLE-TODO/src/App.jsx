import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);

  const handleAdd = () => {
    const newArray = [...todo];
    newArray.push({
      title: document.getElementById("todo").value,
      completed: false,
    });
    setTodo(newArray);
  };

  const handleCheck = (index) => {
    const updatedTodo = [...todo];
   updatedTodo[index].completed=!updatedTodo[index].completed
   setTodo(updatedTodo)
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <input
        id="todo"
        type="text"
        placeholder="New todo"
        style={{ padding: "8px 20px" }}
      />
      <button onClick={handleAdd}>Add Todo</button>
      {todo.map((items, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={items.completed}
            onChange={() => handleCheck(index)}
          />
          <h3 style={{ textDecoration: items.completed ? "line-through" : "none" }}>
            {items.title}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default App;

