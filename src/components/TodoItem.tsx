import React from 'react';

type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void
  deleteTodo: (_id: string) => void
}

const TodoItem: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  const checkTodo: string = todo.status ? `line-through` : ''
  return (
    <main className='card'>
      <section className='card--text'>
        <h2 className={checkTodo}>{todo.name}</h2>
        <span className={checkTodo}>{todo.description}</span>
      </section>
      <section className='card--button'>
        <button
          onClick={() => updateTodo(todo)}
          className={todo.status ? `hide-button` : ''}
        >
          <i className="fa-solid fa-check"></i>
        </button>
        <button
          onClick={() => deleteTodo(todo._id)}
        >
          <i className="fa-solid fa-xmark"> </i>
        </button>
      </section>
    </main>
  )
};

export default TodoItem;