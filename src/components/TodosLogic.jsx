import InputTodo from '@/components/InputTodo';
import TodosList from './TodosList';
import { useState } from 'react';

const TodosLogic = () => {
    const [todos, setTodos] = useState([
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ]);

      const delTodo = (id) => {
        setTodos([
          ...todos.filter((todo) => {
            return todo.id !== id;
          }),
        ]);
      };

      const addTodoItem = (todo) => {
        const newTodo = {
            id: 4,
            title: todo,
            completed: false,
          };
          setTodos([...todos, newTodo]);

      }
      
    return (
        <div>
            <InputTodo addTodoItem={addTodoItem}/>
            <TodosList todosProps={todos} setTodos={setTodos} delTodo={delTodo}/>
        </div>
    );
}
export default TodosLogic;
