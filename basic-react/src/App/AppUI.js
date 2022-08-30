import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../ToDoCounter';
import { TodoSearch } from '../ToDoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../modal';

function AppUI() {
  // Desesctructuramos los valores de nuestro contexto
  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
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

        {!!openModal && (
          <Modal>
            <p>{searchedTodos[0]?.text}</p>
          </Modal>
        )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
