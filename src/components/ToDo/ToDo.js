import React from 'react';
import './todo.scss';

const ToDo = () => {
  // commnent for wrpt2's review
  return (
    <div className="todo">
      <h1>TODO</h1>
      <section className="add-todo">
        <span className="empty-circle" />
        <input placeholder="create new todo .."/>
      </section>
    </div>
  )
}

export default ToDo;