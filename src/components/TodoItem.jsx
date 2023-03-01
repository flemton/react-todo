const TodoItem = ({ itemProp, setTodos }) => {
  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !itemProp.completed,
          };
        }
        return todo;
      })
    );
  };

  return <li>
    <input
      type="checkbox"
      checked={itemProp.completed}
      onChange={() => handleChange(itemProp.id)}
    />
    {itemProp.title}
  </li>;
};
export default TodoItem;
