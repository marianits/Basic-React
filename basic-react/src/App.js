//import './App.css';
import React from "react";
import { TodoCounter } from './ToDoCounter';
import { TodoSearch} from './ToDoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton' ;

const todos=[
  {text:'Cortar cebolla', completed:true },
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:true}
];

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList> 
        {todos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
