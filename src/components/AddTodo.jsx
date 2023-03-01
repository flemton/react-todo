import { useState } from "react"
const AddTodo = () => {
  const [todo, setTodo] = useState("")

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <>
      <h1>Controlled Form</h1>
      <form>
        <label>
          <input type="text" value={todo} onChange={handleChange} placeholder="Add todo..."/>
        </label>
      </form>
    </>
  );
};
export default AddTodo;
