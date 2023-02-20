const TodosList = ({ todosProps }) => {
    return (
      <ul>
        {todosProps.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
    );
  };
  export default TodosList;
  