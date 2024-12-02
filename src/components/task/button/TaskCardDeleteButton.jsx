import React from 'react'

export default function TaskCardDeleteButton({ taskCardsList, setTaskCardsList, taskCard }) {
  const taskCardDeleteButton = (id) => {
    setTaskCardsList(taskCardsList.filter((e) =>  
      e.id !== id
    ));
  }
  return (
    <div>
      <button 
      className='taskCardDeleteButton' 
      onClick={() => taskCardDeleteButton(taskCard.id)}>
        <i class="fa-sharp fa-regular fa-circle-xmark"></i>
        </button>
    </div>
  )
}
