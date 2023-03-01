import { useState } from "react"
const AddTodo = ({ addTodoItem }) => {
  const [todo, setTodo] = useState("")

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      addTodoItem(todo);
      setTodo('');
    } else {
      alert('Please add a todo item');
    }
  };
  return (
    <>
      <h1>Controlled Form</h1>
      <form onSubmit={handleSubmit}>
          <input type="text" value={todo} onChange={handleChange} placeholder="Add todo..."/>
          <button>Submit</button>
      </form>
    </>
  );
};
export default AddTodo;
