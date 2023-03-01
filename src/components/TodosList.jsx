import TodoItem from "@/components/TodoItem";

const TodosList = ({ todosProps, setTodos, delTodo }) => {
    return (
      <ul>
        {todosProps.map((todo) => (
          <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} delTodo={delTodo}/>
        ))}
      </ul>
    );
  };
  export default TodosList;
  