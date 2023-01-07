import React from 'react';

type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void
  deleteTodo: (_id: string) => void
}

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  const checkTodo: string = todo.status ? `line-through` : ''
  return (
    <main className='card'>
      <section className='card--text'>
        <h1 className={checkTodo}>{todo.name}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </section>
      <section className='card--button'>
        <button
          onClick={() => updateTodo(todo)}
          className={todo.status ? `hide-button` : 'card--button__done'}
        >
          Complete
        </button>
        <button
          onClick={() => deleteTodo(todo._id)}
          className='card--button__delete'
        >
          Delete
        </button>
      </section>
    </main>
  )
};

export default Todo;