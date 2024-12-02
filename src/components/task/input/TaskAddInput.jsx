import React from 'react';
import { v4 as uuid } from 'uuid';

export default function TaskAddInput({ inputText, setInputText, setTaskList, taskList }) {
  const handleSubmit = (e) => {
    const taskId = uuid();
    e.preventDefault();
    if(inputText===""){
      return;
    }
    // カードを追加する
    setTaskList([
      ...taskList,
      {
        text: inputText,
        id: taskList.length,
        draggableId: `task-${taskId}`
      },
    ]);
    console.log(...taskList);
    console.log(inputText);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='add a task' 
          className='TaskAddInput'
          onChange={handleChange}
          value={inputText} 
        />
      </form>
    </div>
  );
}