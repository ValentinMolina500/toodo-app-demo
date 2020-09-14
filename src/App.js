import React, { useState } from 'react';
import "./App.css";
import noTodosImage from "./images/relax-1.svg"
import closeIcon from './images/close.svg';
function App() {
  const [showModal, setShowModal] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");

  const renderTodos = () => {
    return todos.map((todo, i) => {
      return (
        <li className={todo.isComplete ? "complete" : ""} key={i}>
          <label>{todo.title}</label>
          <input onClick={() => { todos[i].isComplete = !todos[i].isComplete; setTodos([...todos])}} type="checkbox" value={todo.isComplete}></input>
        </li>
      );
    })
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos(todos => {
      return todos.concat({
        title: todoTitle,
        isComplete: false
      })
    });

    setShowModal(false);
    setTodoTitle("");
  }

  return (
    <div className="App">
      <header>
        <h1>Toodo</h1>
      </header>

      <ul className={todos.length > 0 ? "todo-list-container" : "todo-list-container no-todos"}>
        {
          todos.length > 0 ? renderTodos() : (
            <div>
              <img src={noTodosImage} />
              <h3>No Todos</h3>
              <p>Take a moment to relax</p>
            </div>
          )
        }
      </ul>

      <footer>
        <button onClick={() => setShowModal(true)} className="add-todo-button">Add Todo</button>
      </footer>

      {
        showModal ? (
          <div className="add-todo-modal">
            <form onSubmit={addTodo}>
              <img onClick={() => setShowModal(false)} src={closeIcon} className="close-icon"></img>
              <h2>Add Todo</h2>
              <input value={todoTitle} onChange={e => setTodoTitle(e.target.value)} placeholder="Add todo..." tabIndex="1" className="add-todo-input" type="text"></input>
              <input tabIndex="2" type="submit"></input>
            </form>
            
          </div>
        ) : null
      }
    </div>
  )
}

export default App;