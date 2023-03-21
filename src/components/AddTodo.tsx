import React, { useState } from 'react';

type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void
};

const AddTodo : React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  };

  return (
    <form 
      className='form'
      onSubmit={(e) => saveTodo(e, formData)}
    >
      <h2>Create a to-do</h2>
      <section className='todo-form'>
        <div>
          <label htmlFor='name'>Name</label>
          <input onChange={handleForm} type='text' id='name' />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input onChange={handleForm} type='text' id='description' />
        </div>
      </section>
      <button disabled={formData === undefined ? true: false}> <i className="fa-solid fa-plus"></i> </button>
    </form>
  )
};

export default AddTodo;