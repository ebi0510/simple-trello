import React from 'react'
import { useState } from 'react';

export default function TaskCardTitle() {
  const [isClick, setIsClick] = useState(false);
  const [inputCartTitle, setInputCardTitle] = useState("Today");

  const handleClick = () =>{
    setIsClick(true);
    console.log(isClick);
  }

const handleChange = (e) => {
  setInputCardTitle(e.target.value);
}

const handleSubmit = (e) => {
  // デフォルトの動作をキャンセルする
  e.preventDefault();
  setIsClick(false);
}

const handleBlur = () =>{
  setIsClick(false);
}

  return (
    <div onClick={handleClick} className='taskCardTitleInputArea'>
      {isClick ? (<form onSubmit={handleSubmit}>
        <input
          className='taskCardTitleInput'
          autoFocus 
          type='text' 
          onChange={handleChange} 
          onBlur={handleBlur} 
          value={inputCartTitle}
          maxLength="10">
        </input>
        </form>
      ) : 
      <h3>{inputCartTitle}</h3>
      }

    </div>
  )
}
