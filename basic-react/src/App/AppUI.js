import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../ToDoCounter';
import { TodoSearch } from '../ToDoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI() {
  // Desesctructuramos los valores de nuestro contexto
  const {
    searchedTodos,
    completeTodo,
    deleteTodo
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      {/* Podemos acceder a nuestro contexto con el consumer */}
        <TodoList>            
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
