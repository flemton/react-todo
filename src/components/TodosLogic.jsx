import InputTodo from '@/components/InputTodo';
import TodosList from './TodosList';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

const TodosLogic = () => {
    const [todos, setTodos] = useState([
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
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
            id: uuidv4(),
            title: todo,
            completed: false,
          };
          setTodos([...todos, newTodo]);

      }

      const setUpdate = (updatedTitle, id) => {
        setTodos(
          todos.map((todo) => {
            if (todo.id === id) {
              todo.title = updatedTitle;
            }
            return todo;
          })
        );
      };
      
    return (
        <div>
            <InputTodo addTodoItem={addTodoItem}/>
            <TodosList todosProps={todos} setTodos={setTodos} delTodo={delTodo} setUpdate={setUpdate}/>
        </div>
    );
}
export default TodosLogic;
