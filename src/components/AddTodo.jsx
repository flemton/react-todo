import { useState } from "react"
const AddTodo = ({ addTodoItem }) => {
  const [todo, setTodo] = useState("")
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      addTodoItem(todo);
      setTodo('');
      setMessage('');
    } else {
      setMessage('Please add a todo item');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
          <input type="text" value={todo} onChange={handleChange} placeholder="Add todo..." className="input-text"/>
          <button className="input-submit">Submit</button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};
export default AddTodo;
